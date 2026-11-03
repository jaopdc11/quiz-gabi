import { useEffect, useMemo, useState } from 'react'
import { aposVeredito } from '@/core/baralho'
import { embaralhar } from '@/core/pontos'
import { href } from '@/core/route'
import { gravarAndamento, lerAndamento, lerVereditos, registrarCard, zerarCards } from '@/core/storage'
import type { Flashcard, Modulo } from '@/core/types'
import { Anel, Botao, BotaoLink, Rotulo, Stat } from './ui'

const TODOS = '__todos__'

export function TelaFlashcards({ modulo }: { modulo: Modulo }) {
  const cards = modulo.flashcards ?? []
  const chave = `${modulo.id}:cards`
  // baralho em andamento volta sozinho depois de recarregar
  const [sessao, setSessao] = useState<Flashcard[] | null>(() => {
    const s = lerAndamento<SessaoSalva>(chave)
    if (!s) return null
    const porId = new Map(cards.map((c) => [c.id, c]))
    return s.inicial.every((id) => porId.has(id)) && s.fila.every((id) => porId.has(id)) ? s.inicial.map((id) => porId.get(id)!) : null
  })
  const [, forcar] = useState(0)
  const voltar = href({ nome: 'modulo', modulo: modulo.id })

  if (sessao)
    return (
      <Sessao
        modulo={modulo}
        inicial={sessao}
        chave={chave}
        sair={() => {
          gravarAndamento(chave, null)
          setSessao(null)
        }}
      />
    )

  const vered = lerVereditos(modulo.id)
  const temas = [...new Set(cards.map((c) => c.tema))]
  const sabidas = cards.filter((c) => vered[c.id] === 'sabia').length
  const nao = cards.filter((c) => vered[c.id] === 'nao')

  const comecar = (tema: string, soNao = false) => {
    let base = tema === TODOS ? cards : cards.filter((c) => c.tema === tema)
    if (soNao) base = base.filter((c) => vered[c.id] === 'nao')
    setSessao(embaralhar(base))
    window.scrollTo({ top: 0 })
  }

  return (
    <div className="flex flex-col gap-7">
      <div>
        <a href={voltar} className="inline-flex items-center gap-1.5 py-2 text-sm text-suave hover:text-texto">
          <span aria-hidden>←</span> {modulo.titulo}
        </a>
        <header className="mt-3 flex items-center gap-5">
          <div className="min-w-0 flex-1">
            <p className="font-mono text-[11px] tracking-[0.2em] text-qui uppercase">flashcards</p>
            <h1 className="fonte-display mt-1.5 text-4xl leading-tight font-bold">Baralho</h1>
            <p className="mt-2 text-sm text-suave">Vire o cartão, diga se sabia. O que você não sabia volta logo depois.</p>
          </div>
          <Anel valor={sabidas} total={cards.length} tamanho={80} cor="var(--color-qui)">
            <span className="fonte-display text-lg font-bold tabular">
              {sabidas}
              <span className="text-xs text-tenue">/{cards.length}</span>
            </span>
          </Anel>
        </header>
      </div>

      <div className="flex flex-col gap-2">
        <Botao onClick={() => comecar(TODOS)}>Todos os {cards.length} cartões, embaralhados</Botao>
        {nao.length > 0 && (
          <Botao variante="perigo" onClick={() => comecar(TODOS, true)}>
            Só os {nao.length} que eu não sabia
          </Botao>
        )}
      </div>

      <section>
        <Rotulo contagem={temas.length}>Por tema</Rotulo>
        <ul className="escalonar grid grid-cols-1 gap-2 min-[420px]:grid-cols-2">
          {temas.map((t, i) => {
            const doTema = cards.filter((c) => c.tema === t)
            const ok = doTema.filter((c) => vered[c.id] === 'sabia').length
            return (
              <li key={t} style={{ '--i': i } as React.CSSProperties}>
                <button
                  type="button"
                  onClick={() => comecar(t)}
                  className="group w-full rounded-2xl border border-borda bg-superficie p-4 text-left transition-all hover:border-qui/60 motion-safe:active:scale-[0.98]"
                >
                  <p className="fonte-display text-lg font-semibold">{t}</p>
                  <p className="mt-1 font-mono text-xs text-suave tabular">
                    {ok}/{doTema.length} sabidas
                  </p>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-fundo-alt">
                    <div className="h-full rounded-full bg-qui" style={{ width: `${(ok / doTema.length) * 100}%` }} />
                  </div>
                </button>
              </li>
            )
          })}
        </ul>
      </section>

      {Object.keys(vered).length > 0 && (
        <button
          type="button"
          onClick={() => {
            zerarCards(modulo.id)
            forcar((x) => x + 1)
          }}
          className="self-end text-xs text-tenue hover:text-suave"
        >
          zerar baralho
        </button>
      )}
    </div>
  )
}

interface SessaoSalva {
  inicial: string[]
  fila: string[]
  vistas: number
  primeiraVez: Record<string, boolean>
}

function Sessao({ modulo, inicial, chave, sair }: { modulo: Modulo; inicial: Flashcard[]; chave: string; sair: () => void }) {
  const [salvo] = useState(() => lerAndamento<SessaoSalva>(chave))
  const [fila, setFila] = useState(() => {
    if (!salvo) return inicial
    const porId = new Map(inicial.map((c) => [c.id, c]))
    return salvo.fila.map((id) => porId.get(id)!).filter(Boolean)
  })
  const [virado, setVirado] = useState(false)
  const [vistas, setVistas] = useState(salvo?.vistas ?? 0)
  const [primeiraVez, setPrimeiraVez] = useState<Record<string, boolean>>(salvo?.primeiraVez ?? {})

  useEffect(() => {
    if (fila.length === 0) gravarAndamento(chave, null)
    else gravarAndamento(chave, { inicial: inicial.map((c) => c.id), fila: fila.map((c) => c.id), vistas, primeiraVez } satisfies SessaoSalva)
  }, [chave, inicial, fila, vistas, primeiraVez])
  const total = inicial.length
  const resolvidos = total - new Set(fila.map((c) => c.id)).size

  const atual = fila[0]
  const acertosDePrimeira = useMemo(() => Object.values(primeiraVez).filter(Boolean).length, [primeiraVez])

  if (!atual)
    return (
      <div className="cascata flex flex-col gap-5 pt-6">
        <p className="font-mono text-xs tracking-wider text-tenue uppercase">fim do baralho</p>
        <p className="fonte-display text-3xl font-bold">Todos os {total} cartões passaram ✓</p>
        <div className="grid grid-cols-2 gap-2">
          <Stat rotulo="de primeira" valor={`${acertosDePrimeira}/${total}`} cor="text-qui" />
          <Stat rotulo="viradas" valor={vistas} />
        </div>
        <Botao onClick={sair}>Voltar ao baralho</Botao>
        <BotaoLink href={href({ nome: 'modulo', modulo: modulo.id })} variante="secundario">
          Voltar ao módulo
        </BotaoLink>
      </div>
    )

  const decidir = (sabia: boolean) => {
    registrarCard(modulo.id, atual.id, sabia ? 'sabia' : 'nao')
    setPrimeiraVez((p) => (atual.id in p ? p : { ...p, [atual.id]: sabia }))
    setVistas((v) => v + 1)
    setVirado(false)
    setFila((f) => aposVeredito(f, sabia))
  }

  return (
    <div>
      <div className="mb-5 flex items-center justify-between gap-3">
        <button type="button" onClick={sair} className="-ml-2 rounded-lg px-2 py-1.5 text-sm text-suave hover:bg-superficie">
          ✕ sair
        </button>
        <span className="font-mono text-xs text-suave tabular">
          {resolvidos}/{total} · faltam {fila.length}
        </span>
      </div>
      <div className="mb-5 h-1 overflow-hidden rounded-full bg-fundo-alt">
        <div className="h-full rounded-full bg-qui transition-[width] duration-300" style={{ width: `${(resolvidos / total) * 100}%` }} />
      </div>

      {/* o cartão: duas faces, gira no eixo Y */}
      <button
        type="button"
        onClick={() => setVirado((v) => !v)}
        aria-label={virado ? 'mostrar a pergunta' : 'mostrar a resposta'}
        className="block w-full perspective-[1200px]"
      >
        <div
          key={`${atual.id}-${vistas}`}
          className={`relative grid min-h-[22rem] transition-transform duration-500 transform-3d motion-safe:animate-surgir ${virado ? 'rotate-y-180' : ''}`}
        >
          <Face lado="frente" card={atual} />
          <Face lado="verso" card={atual} />
        </div>
      </button>

      {virado ? (
        <div className="mt-5 grid animate-surgir grid-cols-2 gap-2">
          <Botao variante="perigo" onClick={() => decidir(false)}>
            ✕ Não sabia
          </Botao>
          <Botao onClick={() => decidir(true)}>✓ Sabia</Botao>
        </div>
      ) : (
        <p className="mt-5 text-center text-sm text-tenue">toque no cartão para virar</p>
      )}
    </div>
  )
}

function Face({ lado, card }: { lado: 'frente' | 'verso'; card: Flashcard }) {
  const verso = lado === 'verso'
  return (
    <div
      className={`col-start-1 row-start-1 flex flex-col rounded-3xl border p-6 text-left backface-hidden ${
        verso
          ? 'rotate-y-180 border-qui/50 bg-qui-fundo/50 shadow-[0_0_40px_-16px_var(--color-qui)]'
          : 'border-borda bg-superficie shadow-[0_10px_40px_-20px_black]'
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="rounded-full border border-qui/40 bg-qui-fundo px-2.5 py-0.5 font-mono text-[11px] tracking-wider text-qui uppercase">
          {card.tema}
        </span>
        <span className="font-mono text-[11px] tracking-widest text-tenue uppercase">{verso ? 'resposta' : 'pergunta'}</span>
      </div>
      <div className="flex flex-1 items-center py-6">
        <p className={verso ? 'text-lg leading-relaxed' : 'fonte-display text-2xl leading-snug font-semibold'}>
          {verso
            ? card.verso.split(' · ').map((parte, k, a) => (
                <span key={k} className={a.length > 1 ? 'mb-1.5 flex gap-2' : ''}>
                  {a.length > 1 && <span className="text-qui">•</span>}
                  <span>{parte}</span>
                </span>
              ))
            : card.frente}
        </p>
      </div>
    </div>
  )
}
