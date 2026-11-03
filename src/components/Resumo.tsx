import { useEffect, useMemo, useState } from 'react'
import { href } from '@/core/route'
import { gravarLidos, lerLidos } from '@/core/storage'
import { Anel } from './ui'
import type { BlocoResumo, Modulo } from '@/core/types'

/* Frequência dos erros ortográficos, Zorzi (1998) — o gráfico do resumo, redesenhado. */
const ZORZI = [
  ['Representações múltiplas', 47.5],
  ['Apoio na oralidade', 16.8],
  ['Omissões', 9.6],
  ['Junção/separação', 7.8],
  ['Am x ão', 5.2],
  ['Generalização', 4.6],
  ['Surdas/sonoras', 3.8],
  ['Acréscimos', 1.4],
  ['Letras parecidas', 1.3],
  ['Outros', 1.2],
  ['Inversões', 0.6],
] as const

function slug(s: string) {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

/** "Rótulo: resto" vira rótulo em negrito quando o rótulo é curto. */
function ComRotulo({ texto }: { texto: string }) {
  const i = texto.indexOf(':')
  if (i > 0 && i < 70) {
    return (
      <>
        <b className="font-semibold text-texto">{texto.slice(0, i + 1)}</b>
        {texto.slice(i + 1)}
      </>
    )
  }
  return <>{texto}</>
}

function GraficoZorzi() {
  const max = ZORZI[0][1]
  return (
    <figure className="my-4 rounded-2xl border border-borda bg-fundo-alt/70 p-4">
      <figcaption className="mb-3 font-mono text-[11px] tracking-wider text-tenue uppercase">
        % dos erros · Zorzi (1998), 1ª a 4ª séries
      </figcaption>
      <ul className="flex flex-col gap-1.5">
        {ZORZI.map(([nome, v], k) => (
          <li key={nome} className="grid grid-cols-[8.5rem_1fr_3rem] items-center gap-2 text-xs">
            <span className={k < 4 ? 'text-texto' : 'text-suave'}>{nome}</span>
            <span className="h-3 overflow-hidden rounded-full bg-fundo">
              <span
                className="block h-full rounded-full"
                style={{
                  width: `${(v / max) * 100}%`,
                  background: k === 0 || k === 3 ? 'var(--color-acento)' : 'var(--color-mat)',
                }}
              />
            </span>
            <span className="text-right font-mono tabular text-suave">{String(v).replace('.', ',')}%</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-tenue">
        Em verde, os dois focos indicados pela professora: representações múltiplas e junção/separação.
      </p>
    </figure>
  )
}

function Bloco({ b }: { b: BlocoResumo }) {
  switch (b.tipo) {
    case 'h2':
      return (
        <h2 id={slug(b.texto)} className="fonte-display mt-10 scroll-mt-20 border-t border-borda pt-6 text-2xl font-bold text-acento">
          {b.texto}
        </h2>
      )
    case 'h3':
      return <h3 className="fonte-display mt-6 mb-1 text-lg font-semibold">{b.texto}</h3>
    case 'p':
      return (
        <p className="mt-2 leading-relaxed text-suave">
          <ComRotulo texto={b.texto} />
        </p>
      )
    case 'item':
      return (
        <li className="mt-2 flex gap-2.5 leading-relaxed text-suave">
          <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-acento/70" />
          <span>
            <ComRotulo texto={b.texto} />
          </span>
        </li>
      )
    case 'destaque':
      return (
        <p className="mt-3 rounded-xl border border-quase/40 bg-quase-fundo/50 px-4 py-3 text-sm leading-relaxed text-quase">
          {b.texto}
        </p>
      )
    case 'grafico-zorzi':
      return <GraficoZorzi />
  }
}

interface Topico {
  id: string
  titulo: string
  blocos: BlocoResumo[]
}

interface Capitulo {
  id: string
  titulo: string
  curto: string
  intro: BlocoResumo[]
  topicos: Topico[]
}

/** h2 vira capítulo, h3 vira tópico recolhível; o que vem antes do 1º h3 é a introdução. */
function agrupar(blocos: BlocoResumo[]): Capitulo[] {
  const caps: Capitulo[] = []
  for (const b of blocos) {
    if (b.tipo === 'h2') {
      caps.push({
        id: slug(b.texto),
        titulo: b.texto,
        curto: b.texto.replace(/\s*\(.*?\)\s*/g, ' ').replace(/ — .*/, '').trim(),
        intro: [],
        topicos: [],
      })
      continue
    }
    const cap = caps.at(-1)
    if (!cap) continue
    if (b.tipo === 'h3') cap.topicos.push({ id: `${cap.id}--${slug(b.texto)}`, titulo: b.texto, blocos: [] })
    else if (cap.topicos.length) cap.topicos.at(-1)!.blocos.push(b)
    else cap.intro.push(b)
  }
  // capítulo sem subtítulos (ex.: referências) vira um tópico só
  for (const c of caps) {
    if (!c.topicos.length && c.intro.length) {
      c.topicos.push({ id: `${c.id}--conteudo`, titulo: 'Conteúdo', blocos: c.intro })
      c.intro = []
    }
  }
  return caps
}

/** Agrupa itens consecutivos numa lista. */
function Blocos({ blocos }: { blocos: BlocoResumo[] }) {
  const out: React.ReactNode[] = []
  let lista: React.ReactNode[] = []
  const fecha = () => {
    if (lista.length) out.push(<ul key={`l${out.length}`} className="mt-1">{lista}</ul>)
    lista = []
  }
  blocos.forEach((b, k) => {
    if (b.tipo === 'item') lista.push(<Bloco key={k} b={b} />)
    else {
      fecha()
      out.push(<Bloco key={k} b={b} />)
    }
  })
  fecha()
  return <>{out}</>
}

function useProgressoRolagem() {
  const [p, setP] = useState(0)
  useEffect(() => {
    const f = () => {
      const max = document.documentElement.scrollHeight - innerHeight
      setP(max > 0 ? Math.min(scrollY / max, 1) : 0)
    }
    f()
    addEventListener('scroll', f, { passive: true })
    addEventListener('resize', f)
    return () => {
      removeEventListener('scroll', f)
      removeEventListener('resize', f)
    }
  }, [])
  return p
}

function useCapituloAtivo(ids: string[]) {
  const [ativo, setAtivo] = useState(ids[0] ?? '')
  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => {
        const vis = es.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (vis[0]) setAtivo(vis[0].target.id)
      },
      { rootMargin: '-25% 0px -65% 0px' },
    )
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    }
    return () => obs.disconnect()
  }, [ids])
  return ativo
}

export function TelaResumo({ modulo }: { modulo: Modulo }) {
  const r = modulo.resumo
  const caps = useMemo(() => (r ? agrupar(r.blocos) : []), [r])
  const ids = useMemo(() => caps.map((c) => c.id), [caps])
  const todos = useMemo(() => caps.flatMap((c) => c.topicos.map((t) => t.id)), [caps])
  const [abertos, setAbertos] = useState<Set<string>>(() => new Set())
  const [lidos, setLidos] = useState<Set<string>>(() => new Set(lerLidos(modulo.id)))
  const progresso = useProgressoRolagem()
  const ativo = useCapituloAtivo(ids)
  const voltar = href({ nome: 'modulo', modulo: modulo.id })

  // o chip ativo do índice acompanha a leitura
  useEffect(() => {
    document.getElementById(`chip-${ativo}`)?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' })
  }, [ativo])

  if (!r) return null

  const alternar = (id: string) =>
    setAbertos((a) => {
      const n = new Set(a)
      if (n.has(id)) n.delete(id)
      else n.add(id)
      return n
    })

  const marcarLido = (id: string, lido: boolean) =>
    setLidos((l) => {
      const n = new Set(l)
      if (lido) n.add(id)
      else n.delete(id)
      gravarLidos(modulo.id, [...n])
      return n
    })

  const nLidos = todos.filter((t) => lidos.has(t)).length
  const tudoAberto = abertos.size === todos.length

  return (
    <article>
      {/* progresso de rolagem, colado no topo da tela */}
      <div className="fixed inset-x-0 top-0 z-30 h-0.5 bg-transparent">
        <div className="h-full bg-geo shadow-[0_0_10px_var(--color-geo)]" style={{ width: `${progresso * 100}%` }} />
      </div>

      <a href={voltar} className="inline-flex items-center gap-1.5 py-2 text-sm text-suave hover:text-texto">
        <span aria-hidden>←</span> {modulo.titulo}
      </a>
      <header className="cascata mt-3 flex flex-col gap-3">
        <p className="font-mono text-[11px] tracking-[0.2em] text-geo uppercase">resumo</p>
        <h1 className="fonte-display text-4xl leading-tight font-bold">{r.titulo}</h1>
        {r.subtitulo && <p className="text-sm text-suave">{r.subtitulo}</p>}
        <div className="flex items-center gap-4 rounded-2xl border border-borda bg-superficie p-4">
          <Anel valor={nLidos} total={todos.length} tamanho={60} cor="var(--color-geo)">
            <span className="font-mono text-xs font-bold tabular">{Math.round((nLidos / Math.max(todos.length, 1)) * 100)}%</span>
          </Anel>
          <div className="min-w-0 flex-1">
            <p className="font-semibold">
              {nLidos} de {todos.length} tópicos lidos
            </p>
            <p className="text-xs text-tenue">Abra um tópico, leia e marque como lido.</p>
          </div>
          <button
            type="button"
            onClick={() => setAbertos(tudoAberto ? new Set() : new Set(todos))}
            className="shrink-0 rounded-lg border border-borda px-2.5 py-1.5 text-xs text-suave hover:text-texto"
          >
            {tudoAberto ? 'fechar tudo' : 'abrir tudo'}
          </button>
        </div>
      </header>

      <nav className="sticky top-0 z-20 -mx-4 mt-5 flex gap-2 overflow-x-auto border-b border-borda bg-fundo/85 px-4 py-3 backdrop-blur-md [scrollbar-width:none] sm:-mx-6 sm:px-6">
        {caps.map((c) => {
          const total = c.topicos.length
          const ok = c.topicos.filter((t) => lidos.has(t.id)).length
          const on = c.id === ativo
          return (
            <button
              key={c.id}
              id={`chip-${c.id}`}
              type="button"
              onClick={() => document.getElementById(c.id)?.scrollIntoView({ behavior: 'smooth' })}
              className={`flex shrink-0 items-center gap-2 rounded-full border px-3 py-1.5 text-xs whitespace-nowrap transition-all ${
                on ? 'border-geo bg-geo-fundo text-geo' : 'border-borda bg-superficie text-suave'
              }`}
            >
              {c.curto}
              <span className={`font-mono tabular ${ok === total && total ? 'text-acento' : 'text-tenue'}`}>
                {ok === total && total ? '✓' : `${ok}/${total}`}
              </span>
            </button>
          )
        })}
      </nav>

      {caps.map((c, ci) => (
        <section key={c.id} id={c.id} className="scroll-mt-16 pt-8">
          <div className="mb-3 flex items-baseline gap-3">
            <span className="font-mono text-sm text-geo">{String(ci + 1).padStart(2, '0')}</span>
            <h2 className="fonte-display text-2xl leading-tight font-bold">{c.titulo.replace(/^\d+\.\s*/, '')}</h2>
          </div>
          {c.intro.length > 0 && (
            <div className="mb-3">
              <Blocos blocos={c.intro} />
            </div>
          )}
          <div className="flex flex-col gap-2">
            {c.topicos.map((t) => {
              const aberto = abertos.has(t.id)
              const lido = lidos.has(t.id)
              return (
                <div
                  key={t.id}
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    aberto ? 'border-geo/50 bg-superficie' : lido ? 'border-acento/30 bg-superficie/60' : 'border-borda bg-superficie'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => alternar(t.id)}
                    aria-expanded={aberto}
                    className="flex w-full items-center gap-3 px-4 py-3.5 text-left"
                  >
                    <span
                      className={`flex size-6 shrink-0 items-center justify-center rounded-full border text-xs transition-colors ${
                        lido ? 'border-acento bg-acento text-fundo' : 'border-borda-forte text-transparent'
                      }`}
                    >
                      ✓
                    </span>
                    <span className={`flex-1 font-semibold ${lido && !aberto ? 'text-suave' : ''}`}>{t.titulo}</span>
                    <span className={`text-tenue transition-transform duration-300 ${aberto ? 'rotate-180' : ''}`}>⌄</span>
                  </button>
                  {/* grid 0fr→1fr: abre e fecha com altura animada, sem medir nada */}
                  <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${aberto ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <div className="border-t border-borda px-4 pt-1 pb-4">
                        <Blocos blocos={t.blocos} />
                        <button
                          type="button"
                          onClick={() => {
                            marcarLido(t.id, !lido)
                            if (!lido) alternar(t.id)
                          }}
                          className={`mt-4 w-full rounded-xl py-3 text-sm font-semibold transition-all motion-safe:active:scale-[0.98] ${
                            lido ? 'border border-borda text-suave' : 'bg-acento/15 text-acento hover:bg-acento/25'
                          }`}
                        >
                          {lido ? 'desmarcar lido' : '✓ Marcar como lido'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          {modulo.flashcards?.length ? (
            <a
              href={href({ nome: 'flashcards', modulo: modulo.id })}
              className="mt-3 flex items-center justify-between rounded-xl border border-dashed border-qui/40 px-4 py-3 text-sm text-qui hover:bg-qui-fundo/40"
            >
              <span>Fixar com flashcards</span>
              <span aria-hidden>→</span>
            </a>
          ) : null}
        </section>
      ))}

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="mt-10 w-full rounded-xl border border-borda py-3 text-sm text-suave"
      >
        ↑ voltar ao topo
      </button>
    </article>
  )
}
