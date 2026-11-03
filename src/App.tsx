import { useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { TelaFlashcards } from '@/components/Flashcards'
import { TelaResumo } from '@/components/Resumo'
import { Anel, Botao, BotaoLink, Rotulo, SECOES, Selo, Stat } from '@/components/ui'
import { embaralhar, pontosDoAcerto } from '@/core/pontos'
import { href, type Modo, useRota } from '@/core/route'
import { gravarAndamento, lerAndamento, lerProgresso, lerVereditos, registrarPontos, registrarResposta, zerarSecao } from '@/core/storage'
import type { Modulo, Questao, SecaoId } from '@/core/types'
import { buscarModulo, modulos } from '@/modulos'

const LETRAS = 'ABCDEFGH'
const ROMANOS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']
const SECAO_IDS = ['prova', 'extras'] as const

export function App() {
  const rota = useRota()
  const chave = href(rota)

  // tela nova começa do topo: sem isso o resumo abria na altura em que a
  // página do módulo estava rolada
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [chave])

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-2xl flex-col px-4 pt-[max(1.25rem,env(safe-area-inset-top))] pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:px-6">
      <div key={chave} className="flex-1 motion-safe:animate-entrar-tela">
        {rota.nome === 'inicio' ? (
          <Inicio />
        ) : (
          <ComModulo id={rota.modulo}>
            {(m) =>
              rota.nome === 'modulo' ? (
                <TelaModulo modulo={m} />
              ) : rota.nome === 'resumo' ? (
                <TelaResumo modulo={m} />
              ) : rota.nome === 'flashcards' ? (
                <TelaFlashcards modulo={m} />
              ) : (
                <Jogo modulo={m} secao={rota.secao} modo={rota.modo} />
              )
            }
          </ComModulo>
        )}
      </div>
      {rota.nome !== 'jogo' && (
        <footer className="mt-12 border-t border-borda pt-5 text-center text-sm text-tenue">
          feito por{' '}
          <a
            href="https://tree.jaopd.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-acento underline decoration-acento/30 underline-offset-4"
          >
            jaopd
          </a>
        </footer>
      )}
    </div>
  )
}

function ComModulo({ id, children }: { id: string; children: (m: Modulo) => React.ReactNode }) {
  const m = buscarModulo(id)
  if (!m)
    return (
      <div className="py-24 text-center">
        <p className="text-suave">Módulo não encontrado.</p>
        <BotaoLink href="#/" variante="secundario" className="mt-6">
          voltar ao início
        </BotaoLink>
      </div>
    )
  return <>{children(m)}</>
}

function resumo(m: Modulo) {
  const s = SECAO_IDS.map((id) => {
    const p = lerProgresso(m.id, id)
    const ids = new Set(m[id].map((q) => q.id))
    return {
      id,
      total: m[id].length,
      dominadas: p.dominadas.filter((x) => ids.has(x)).length,
      erros: p.erros.filter((x) => ids.has(x)).length,
      recorde: p.recorde,
    }
  })
  return {
    secoes: s,
    total: s.reduce((a, x) => a + x.total, 0),
    dominadas: s.reduce((a, x) => a + x.dominadas, 0),
    erros: s.reduce((a, x) => a + x.erros, 0),
  }
}

/* ── Início ───────────────────────────────────────────────────────────── */

function Inicio() {
  const resumos = modulos.map((m) => ({ m, r: resumo(m) }))
  const total = resumos.reduce((a, x) => a + x.r.total, 0)
  const dominadas = resumos.reduce((a, x) => a + x.r.dominadas, 0)
  const erros = resumos.reduce((a, x) => a + x.r.erros, 0)

  return (
    <div className="flex flex-col gap-10">
      <header className="cascata flex flex-col gap-5 pt-6">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-acento/30 bg-acento-fundo/40 px-3 py-1 font-mono text-[11px] tracking-[0.2em] text-acento uppercase">
          <span className="size-1.5 animate-respirar rounded-full bg-acento" />
          provas antigas · modo treino
        </span>
        <h1 className="fonte-display text-5xl leading-[0.95] font-bold min-[400px]:text-6xl">
          Quiz<span className="text-acento">Gabi</span>
        </h1>
        <p className="max-w-md text-lg leading-relaxed text-suave">
          Cada módulo é uma prova antiga. Treine as questões reais, depois as extras, e revise o que errar até
          dominar.
        </p>
        <div className="grid grid-cols-3 gap-2">
          <Stat rotulo="dominadas" valor={`${dominadas}/${total}`} cor="text-acento" />
          <Stat rotulo="pra revisar" valor={erros} cor={erros ? 'text-erro' : 'text-texto'} />
          <Stat rotulo="módulos" valor={modulos.length} />
        </div>
      </header>

      <section>
        <Rotulo contagem={modulos.length}>Módulos</Rotulo>
        <ul className="escalonar flex flex-col gap-3">
          {resumos.map(({ m, r }, i) => (
            <li key={m.id} style={{ '--i': i } as React.CSSProperties}>
              <a
                href={href({ nome: 'modulo', modulo: m.id })}
                className="group relative block overflow-hidden rounded-2xl border border-borda bg-superficie p-5 transition-all hover:border-acento/60 motion-safe:hover:-translate-y-0.5 motion-safe:active:scale-[0.99]"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-16 -right-16 size-44 rounded-full opacity-25 blur-3xl transition-opacity group-hover:opacity-50"
                  style={{ background: 'var(--color-acento)' }}
                />
                <div className="relative flex items-center gap-4">
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-mono text-[11px] tracking-wide text-tenue uppercase">{m.origem}</p>
                    <p className="fonte-display mt-1.5 text-2xl leading-tight font-bold">{m.titulo}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {r.secoes.map((s) => (
                        <span
                          key={s.id}
                          className={`rounded-md px-2 py-0.5 font-mono text-[11px] ${SECOES[s.id].texto} ${SECOES[s.id].fundo}`}
                        >
                          {s.total} {SECOES[s.id].selo === 'extra' ? 'extras' : 'da prova'}
                        </span>
                      ))}
                      {r.erros > 0 && (
                        <span className="rounded-md bg-erro-fundo px-2 py-0.5 font-mono text-[11px] text-erro">
                          {r.erros} pra revisar
                        </span>
                      )}
                    </div>
                  </div>
                  <Anel valor={r.dominadas} total={r.total} tamanho={68}>
                    <span className="font-mono text-sm font-bold tabular">
                      {r.total ? Math.round((r.dominadas / r.total) * 100) : 0}%
                    </span>
                  </Anel>
                </div>
                <p className="relative mt-4 flex items-center justify-between border-t border-borda pt-3 text-sm">
                  <span className="text-suave">
                    {r.dominadas === 0 ? 'Começar' : r.dominadas === r.total ? 'Tudo dominado' : 'Continuar'}
                  </span>
                  <span className="text-acento transition-transform group-hover:translate-x-1">→</span>
                </p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

/* ── Módulo: as duas seções ───────────────────────────────────────────── */

function TelaModulo({ modulo }: { modulo: Modulo }) {
  const [, forcar] = useState(0)
  const r = resumo(modulo)

  return (
    <div className="flex flex-col gap-8">
      <div>
        <a href="#/" className="inline-flex items-center gap-1.5 py-2 text-sm text-suave hover:text-texto">
          <span aria-hidden>←</span> módulos
        </a>
        <header className="mt-3 flex items-center gap-5">
          <div className="min-w-0 flex-1">
            <p className="font-mono text-[11px] tracking-wide text-tenue uppercase">{modulo.origem}</p>
            <h1 className="fonte-display mt-1.5 text-4xl leading-[1.05] font-bold">{modulo.titulo}</h1>
            <p className="mt-2 text-sm text-suave">
              <span className="font-semibold text-acento">{r.dominadas}</span> de {r.total} questões dominadas
            </p>
          </div>
          <Anel valor={r.dominadas} total={r.total} tamanho={84}>
            <span className="fonte-display text-xl font-bold tabular">
              {r.total ? Math.round((r.dominadas / r.total) * 100) : 0}
              <span className="text-xs text-tenue">%</span>
            </span>
          </Anel>
        </header>
      </div>

      <div className="cascata flex flex-col gap-4">
        {r.secoes.map((s) => {
          const info = SECOES[s.id]
          return (
            <section
              key={s.id}
              className="relative overflow-hidden rounded-2xl border border-borda bg-superficie p-5"
            >
              <div aria-hidden className="absolute inset-x-0 top-0 h-0.5" style={{ background: info.cor, boxShadow: `0 0 18px ${info.cor}` }} />
              <div
                aria-hidden
                className="pointer-events-none absolute -top-20 left-1/2 h-32 w-3/4 -translate-x-1/2 rounded-full opacity-15 blur-3xl"
                style={{ background: info.cor }}
              />
              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <Selo secao={s.id} />
                    <h2 className="fonte-display mt-2.5 text-2xl font-bold">{info.nome}</h2>
                  </div>
                  <span className={`fonte-display text-4xl font-bold tabular opacity-90 ${info.texto}`}>{s.total}</span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-suave">{info.descricao}</p>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  <Stat rotulo="dominadas" valor={`${s.dominadas}/${s.total}`} cor={s.dominadas ? 'text-acento' : 'text-texto'} />
                  <Stat rotulo="erros" valor={s.erros} cor={s.erros ? 'text-erro' : 'text-texto'} />
                  <Stat rotulo="recorde" valor={s.recorde} cor={s.recorde ? 'text-quase' : 'text-texto'} />
                </div>

                {s.total === 0 ? (
                  <p className="mt-4 text-sm text-tenue">Ainda sem questões aqui.</p>
                ) : (
                  <div className="mt-4 flex flex-col gap-2">
                    <BotaoLink href={href({ nome: 'jogo', modulo: modulo.id, secao: s.id, modo: 'jogar' })}>
                      {s.id === 'prova' ? 'Fazer a prova' : 'Treinar extras'} <span aria-hidden>→</span>
                    </BotaoLink>
                    {s.erros > 0 && (
                      <BotaoLink href={href({ nome: 'jogo', modulo: modulo.id, secao: s.id, modo: 'erros' })} variante="perigo">
                        Revisar {s.erros} {s.erros === 1 ? 'erro' : 'erros'}
                      </BotaoLink>
                    )}
                  </div>
                )}

                {(s.dominadas > 0 || s.recorde > 0 || s.erros > 0) && (
                  <ZerarBotao
                    onZerar={() => {
                      zerarSecao(modulo.id, s.id)
                      forcar((x) => x + 1)
                    }}
                  />
                )}
              </div>
            </section>
          )
        })}

        {modulo.flashcards && modulo.flashcards.length > 0 && <CartaoFlashcards modulo={modulo} />}
        {modulo.resumo && (
          <a
            href={href({ nome: 'resumo', modulo: modulo.id })}
            className="group flex items-center gap-4 rounded-2xl border border-borda bg-superficie p-5 transition-all hover:border-geo/60 motion-safe:active:scale-[0.99]"
          >
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-geo-fundo text-2xl text-geo">¶</span>
            <span className="min-w-0 flex-1">
              <span className="block font-mono text-[11px] tracking-wider text-geo uppercase">leitura</span>
              <span className="fonte-display block text-xl font-bold">Resumo da matéria</span>
              <span className="block text-sm text-suave">{modulo.resumo.subtitulo}</span>
            </span>
            <span className="text-geo transition-transform group-hover:translate-x-1">→</span>
          </a>
        )}
      </div>
    </div>
  )
}

function CartaoFlashcards({ modulo }: { modulo: Modulo }) {
  const cards = modulo.flashcards ?? []
  const v = lerVereditos(modulo.id)
  const sabidas = cards.filter((c) => v[c.id] === 'sabia').length
  const nao = cards.filter((c) => v[c.id] === 'nao').length
  return (
    <section className="relative overflow-hidden rounded-2xl border border-borda bg-superficie p-5">
      <div aria-hidden className="absolute inset-x-0 top-0 h-0.5" style={{ background: 'var(--color-qui)', boxShadow: '0 0 18px var(--color-qui)' }} />
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-qui/40 bg-qui-fundo px-2.5 py-0.5 font-mono text-[11px] tracking-wider text-qui uppercase">
            <span className="size-1.5 rounded-full bg-current" />
            flashcards
          </span>
          <h2 className="fonte-display mt-2.5 text-2xl font-bold">Baralho de revisão</h2>
        </div>
        <span className="fonte-display text-4xl font-bold text-qui tabular opacity-90">{cards.length}</span>
      </div>
      <p className="mt-1 text-sm leading-relaxed text-suave">Cartões tirados do resumo: vira, responde de cabeça, marca se sabia.</p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <Stat rotulo="sabia" valor={`${sabidas}/${cards.length}`} cor={sabidas ? 'text-qui' : 'text-texto'} />
        <Stat rotulo="não sabia" valor={nao} cor={nao ? 'text-erro' : 'text-texto'} />
      </div>
      <BotaoLink href={href({ nome: 'flashcards', modulo: modulo.id })} className="mt-4 w-full !bg-qui shadow-[0_0_28px_-6px_var(--color-qui)]">
        Abrir baralho <span aria-hidden>→</span>
      </BotaoLink>
    </section>
  )
}

function ZerarBotao({ onZerar }: { onZerar: () => void }) {
  const [confirmando, setConfirmando] = useState(false)
  return (
    <div className="mt-3 flex justify-end text-xs">
      {confirmando ? (
        <span className="flex items-center gap-3 text-suave">
          Apagar o progresso desta seção?
          <button type="button" onClick={onZerar} className="font-semibold text-erro">
            apagar
          </button>
          <button type="button" onClick={() => setConfirmando(false)} className="text-suave underline">
            cancelar
          </button>
        </span>
      ) : (
        <button type="button" onClick={() => setConfirmando(true)} className="text-tenue hover:text-suave">
          zerar progresso
        </button>
      )}
    </div>
  )
}

/* ── Jogo ─────────────────────────────────────────────────────────────── */

interface Resposta {
  questao: Questao
  acertou: boolean
}

function Jogo(props: { modulo: Modulo; secao: SecaoId; modo: Modo }) {
  // revisar erros de dentro da própria revisão não muda o hash: remonta pela rodada
  const [rodada, setRodada] = useState(0)
  return <Rodada key={rodada} {...props} deNovo={() => setRodada((r) => r + 1)} />
}

interface Salvo {
  ordem: string[]
  respostas: { id: string; acertou: boolean }[]
  pontos: number
  seq: number
  maiorSeq: number
}

function Rodada({ modulo, secao, modo, deNovo }: { modulo: Modulo; secao: SecaoId; modo: Modo; deNovo: () => void }) {
  const chave = `${modulo.id}:${secao}:${modo}`
  // retoma a rodada em andamento (recarregar a página não perde nada)
  const [salvo] = useState(() => {
    const s = lerAndamento<Salvo>(chave)
    const porId = new Map(modulo[secao].map((q) => [q.id, q]))
    if (!s || !s.ordem.every((id) => porId.has(id)) || s.respostas.length >= s.ordem.length) return null
    return { ...s, fila: s.ordem.map((id) => porId.get(id)!) }
  })
  const fila = useMemo(() => {
    if (salvo) return salvo.fila
    let qs = modulo[secao]
    if (modo === 'erros') {
      const erros = new Set(lerProgresso(modulo.id, secao).erros)
      qs = qs.filter((q) => erros.has(q.id))
    }
    // a prova real mantém a ordem original; o resto embaralha
    return secao === 'prova' && modo === 'jogar' ? qs : embaralhar(qs)
  }, [modulo, secao, modo, salvo])

  const [i, setI] = useState(salvo?.respostas.length ?? 0)
  const [pontos, setPontos] = useState(salvo?.pontos ?? 0)
  const [seq, setSeq] = useState(salvo?.seq ?? 0)
  const [maiorSeq, setMaiorSeq] = useState(salvo?.maiorSeq ?? 0)
  const [respostas, setRespostas] = useState<Resposta[]>(
    () => salvo?.respostas.map((r, k) => ({ questao: salvo.fila[k]!, acertou: r.acertou })) ?? [],
  )
  const [ultimoGanho, setUltimoGanho] = useState<number | null>(null)
  const [fim, setFim] = useState<{ recorde: boolean } | null>(null)

  useEffect(() => {
    if (fim || fila.length === 0) {
      gravarAndamento(chave, null)
      return
    }
    gravarAndamento(chave, {
      ordem: fila.map((q) => q.id),
      respostas: respostas.map((r) => ({ id: r.questao.id, acertou: r.acertou })),
      pontos,
      seq,
      maiorSeq,
    } satisfies Salvo)
  }, [chave, fila, respostas, pontos, seq, maiorSeq, fim])

  const voltar = href({ nome: 'modulo', modulo: modulo.id })

  if (fila.length === 0)
    return (
      <div className="flex flex-col items-center py-24 text-center">
        <p className="text-5xl">✓</p>
        <p className="fonte-display mt-4 text-2xl font-bold">Nada pra revisar</p>
        <p className="mt-1 text-suave">Todos os erros desta seção já foram corrigidos.</p>
        <BotaoLink href={voltar} variante="secundario" className="mt-8">
          voltar ao módulo
        </BotaoLink>
      </div>
    )

  if (fim)
    return (
      <Resultado
        secao={secao}
        modo={modo}
        respostas={respostas}
        pontos={pontos}
        maiorSeq={maiorSeq}
        recorde={fim.recorde}
        voltar={voltar}
        revisar={href({ nome: 'jogo', modulo: modulo.id, secao, modo: 'erros' })}
        deNovo={modo === 'erros' ? deNovo : undefined}
      />
    )

  const q = fila[i]!
  const respondida = respostas.length > i

  function responder(acertou: boolean) {
    registrarResposta(modulo.id, secao, q.id, acertou)
    setRespostas((r) => [...r, { questao: q, acertou }])
    if (acertou) {
      const nova = seq + 1
      const ganho = pontosDoAcerto(nova)
      setSeq(nova)
      setMaiorSeq((m) => Math.max(m, nova))
      setPontos((p) => p + ganho)
      setUltimoGanho(ganho)
    } else {
      setSeq(0)
      setUltimoGanho(null)
    }
  }

  function proxima() {
    setUltimoGanho(null)
    if (i + 1 >= fila.length) {
      setFim({ recorde: registrarPontos(modulo.id, secao, pontos) })
    } else {
      setI(i + 1)
    }
    window.scrollTo({ top: 0 })
  }

  return (
    <div>
      {/* placar fixo no topo */}
      <div className="sticky top-0 z-10 -mx-4 mb-5 border-b border-borda bg-fundo/85 px-4 pt-[env(safe-area-inset-top)] backdrop-blur-md sm:-mx-6 sm:px-6">
        <div className="flex items-center justify-between gap-3 py-3">
          <a href={voltar} className="-ml-2 rounded-lg px-2 py-1.5 text-sm text-suave hover:bg-superficie hover:text-texto">
            ✕ <span className="ml-0.5">sair</span>
          </a>
          <span className="font-mono text-xs tracking-wider text-suave uppercase tabular">
            {modo === 'erros' ? <span className="text-erro">revisão · </span> : null}
            {String(i + 1).padStart(2, '0')}
            <span className="text-tenue">/{String(fila.length).padStart(2, '0')}</span>
          </span>
          <span className="relative flex items-center gap-2 font-mono text-sm tabular">
            {seq >= 2 && (
              <span key={seq} className="rounded-full bg-quase-fundo px-2 py-0.5 text-xs font-bold text-quase motion-safe:animate-pulo">
                🔥 {seq}
              </span>
            )}
            <span key={pontos} className="min-w-8 text-right text-base font-bold text-acento motion-safe:animate-pulo">
              {pontos}
            </span>
            {ultimoGanho !== null && (
              <span key={`g${respostas.length}`} className="absolute -top-2 right-0 animate-subir-ponto text-xs font-bold text-acento">
                +{ultimoGanho}
              </span>
            )}
          </span>
        </div>
        {/* um segmento por questão, pintado pelo resultado */}
        <div className="flex gap-1 pb-3">
          {fila.map((x, k) => {
            const r = respostas[k]
            const cls = r ? (r.acertou ? 'bg-acento shadow-[0_0_6px_var(--color-acento)]' : 'bg-erro') : k === i ? 'bg-borda-forte' : 'bg-fundo-alt'
            return <span key={x.id} className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${cls}`} />
          })}
        </div>
      </div>

      <div key={q.id} className="animate-surgir">
        <div className="mb-3 flex items-center gap-2">
          <Selo secao={secao} />
          {q.base === 'resumo' && (
            <span className="rounded-full border border-geo/40 bg-geo-fundo px-2.5 py-0.5 font-mono text-[11px] tracking-wider text-geo uppercase">
              do resumo
            </span>
          )}
          <span className="font-mono text-xs text-tenue">
            {secao === 'prova' ? `Questão ${String(modulo.prova.indexOf(q) + 1).padStart(2, '0')}` : q.tipo === 'vf' ? 'Verdadeiro ou falso' : 'Múltipla escolha'}
          </span>
        </div>
        {q.tipo === 'multipla' ? (
          <Multipla q={q} onResponder={responder} />
        ) : (
          <VF q={q} onResponder={responder} />
        )}
        {respondida && (
          <Explicacao acertou={respostas[i]!.acertou} questao={q} onProxima={proxima} ultima={i + 1 >= fila.length} />
        )}
      </div>
    </div>
  )
}

function Enunciado({ texto }: { texto: string }) {
  return <p className="text-[17px] leading-relaxed whitespace-pre-line">{texto}</p>
}

function Multipla({ q, onResponder }: { q: Extract<Questao, { tipo: 'multipla' }>; onResponder: (ok: boolean) => void }) {
  const [escolha, setEscolha] = useState<number | null>(null)
  const respondida = escolha !== null

  return (
    <div>
      <Enunciado texto={q.enunciado} />
      {q.afirmativas && (
        <ol className="mt-4 flex flex-col divide-y divide-borda overflow-hidden rounded-2xl border border-borda bg-fundo-alt/80">
          {q.afirmativas.map((a, k) => (
            <li key={k} className="flex gap-3 px-4 py-3 leading-relaxed">
              <span className="w-7 shrink-0 pt-px font-mono text-sm font-bold text-acento">{ROMANOS[k]}</span>
              <span className="text-[15px]">{a}</span>
            </li>
          ))}
        </ol>
      )}
      {q.pergunta && <p className="fonte-display mt-5 text-lg font-semibold">{q.pergunta}</p>}

      <div className="mt-4 flex flex-col gap-2.5">
        {q.alternativas.map((alt, k) => {
          const certa = k === q.correta
          const marcada = k === escolha
          let estilo =
            'border-borda bg-superficie hover:border-borda-forte hover:bg-superficie-alta motion-safe:active:scale-[0.98]'
          let letra = 'bg-fundo-alt text-suave group-hover:text-texto'
          if (respondida) {
            if (certa) {
              estilo = 'border-acento bg-acento-fundo animate-brilho'
              letra = 'bg-acento text-fundo'
            } else if (marcada) {
              estilo = 'border-erro bg-erro-fundo animate-tremer'
              letra = 'bg-erro text-fundo'
            } else {
              estilo = 'border-borda bg-superficie opacity-45'
            }
          }
          return (
            <button
              key={k}
              type="button"
              disabled={respondida}
              onClick={() => {
                setEscolha(k)
                onResponder(certa)
              }}
              className={`group flex min-h-14 items-start gap-3 rounded-xl border p-3.5 text-left leading-snug transition-all duration-150 ${estilo}`}
            >
              <span className={`flex size-8 shrink-0 items-center justify-center rounded-lg font-mono text-sm font-bold transition-colors ${letra}`}>
                {respondida && certa ? '✓' : respondida && marcada ? '✕' : LETRAS[k]}
              </span>
              <span className="pt-1 font-sans">{alt}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function VF({ q, onResponder }: { q: Extract<Questao, { tipo: 'vf' }>; onResponder: (ok: boolean) => void }) {
  const [marcas, setMarcas] = useState<(boolean | null)[]>(() => q.itens.map(() => null))
  const [conferido, setConferido] = useState(false)
  const feitas = marcas.filter((m) => m !== null).length
  const completo = feitas === marcas.length

  return (
    <div>
      <Enunciado texto={q.enunciado} />
      <div className="mt-4 flex flex-col gap-2.5">
        {q.itens.map((it, k) => {
          const m = marcas[k]
          const ok = conferido && m === it.verdadeiro
          const errado = conferido && m !== it.verdadeiro
          return (
            <div
              key={k}
              className={`rounded-xl border p-3.5 transition-colors ${
                ok ? 'border-acento/70 bg-acento-fundo/50' : errado ? 'border-erro/70 bg-erro-fundo/50 animate-tremer' : 'border-borda bg-superficie'
              }`}
            >
              <p className="text-[15px] leading-snug">{it.texto}</p>
              <div className="mt-3 flex items-center gap-2">
                {([true, false] as const).map((v) => {
                  const ativo = m === v
                  return (
                    <button
                      key={String(v)}
                      type="button"
                      disabled={conferido}
                      onClick={() => setMarcas((ms) => ms.map((x, j) => (j === k ? v : x)))}
                      className={`h-11 flex-1 rounded-lg border font-mono text-sm font-bold transition-all motion-safe:active:scale-95 ${
                        ativo
                          ? v
                            ? 'border-acento bg-acento text-fundo'
                            : 'border-erro bg-erro text-fundo'
                          : 'border-borda bg-fundo-alt text-suave hover:text-texto'
                      }`}
                    >
                      {v ? 'Verdadeiro' : 'Falso'}
                    </button>
                  )
                })}
              </div>
              {errado && (
                <p className="mt-2 font-mono text-xs text-erro">o certo era {it.verdadeiro ? 'Verdadeiro' : 'Falso'}</p>
              )}
            </div>
          )
        })}
      </div>
      {!conferido && (
        <Botao
          disabled={!completo}
          onClick={() => {
            setConferido(true)
            onResponder(q.itens.every((it, k) => marcas[k] === it.verdadeiro))
          }}
          className="mt-5 w-full"
        >
          {completo ? 'Conferir' : `Marque todas (${feitas}/${marcas.length})`}
        </Botao>
      )}
    </div>
  )
}

function Explicacao({ acertou, questao, onProxima, ultima }: { acertou: boolean; questao: Questao; onProxima: () => void; ultima: boolean }) {
  // a explicação termina com uma ou mais "Fonte: …"; separa o texto das fontes
  const [texto, ...fontes] = questao.explicacao.split(/\s*Fonte:\s*/)
  return (
    <div className="mt-6 animate-surgir">
      <div
        className={`overflow-hidden rounded-2xl border ${acertou ? 'border-acento/50 bg-acento-fundo/35' : 'border-erro/50 bg-erro-fundo/35'}`}
      >
        <div className={`flex items-center gap-3 px-4 py-3 ${acertou ? 'bg-acento-fundo/70' : 'bg-erro-fundo/70'}`}>
          <span
            className={`flex size-8 items-center justify-center rounded-full font-bold text-fundo ${acertou ? 'bg-acento' : 'bg-erro'}`}
          >
            {acertou ? '✓' : '✕'}
          </span>
          <div>
            <p className={`fonte-display text-lg leading-tight font-bold ${acertou ? 'text-acento' : 'text-erro'}`}>
              {acertou ? 'Acertou!' : 'Não foi dessa vez'}
            </p>
            <p className="text-xs text-suave">
              {acertou
                ? 'Questão dominada.'
                : questao.tipo === 'multipla'
                  ? `A certa é a ${LETRAS[questao.correta]} — ela vai pra revisão.`
                  : 'Ela vai pra revisão.'}
            </p>
          </div>
        </div>
        <div className="px-4 py-4">
          <p className="mb-1.5 font-mono text-[11px] tracking-[0.2em] text-tenue uppercase">por quê</p>
          <p className="leading-relaxed text-texto/90">{texto}</p>
          {fontes.length > 0 && (
            <div className="mt-3 flex flex-col gap-1 border-t border-borda pt-2 text-xs break-words text-tenue">
              {fontes.map((f) => (
                <p key={f}>Fonte: {f}</p>
              ))}
            </div>
          )}
        </div>
      </div>
      <Botao onClick={onProxima} autoFocus className="mt-4 w-full">
        {ultima ? 'Ver resultado' : 'Próxima'} <span aria-hidden>→</span>
      </Botao>
    </div>
  )
}

/* ── Resultado ────────────────────────────────────────────────────────── */

function Resultado({
  secao,
  modo,
  respostas,
  pontos,
  maiorSeq,
  recorde,
  voltar,
  revisar,
  deNovo,
}: {
  secao: SecaoId
  modo: Modo
  respostas: Resposta[]
  pontos: number
  maiorSeq: number
  recorde: boolean
  voltar: string
  revisar: string
  deNovo?: () => void
}) {
  const acertos = respostas.filter((r) => r.acertou).length
  const erradas = respostas.filter((r) => !r.acertou)
  const nota = respostas.length ? (acertos / respostas.length) * 10 : 0
  const frase =
    nota === 10 ? 'Gabaritou!' : nota >= 7 ? 'Mandou bem!' : nota >= 5 ? 'Tá no caminho.' : 'Bora revisar os erros.'

  return (
    <div className="cascata flex flex-col gap-5 pt-6">
      <div className="flex items-center gap-2">
        <Selo secao={secao} />
        <span className="font-mono text-xs tracking-wider text-tenue uppercase">
          {modo === 'erros' ? 'fim da revisão' : 'fim da rodada'}
        </span>
      </div>

      <div className="flex items-center gap-5 rounded-2xl border border-borda bg-superficie p-5">
        <Anel valor={acertos} total={respostas.length} tamanho={112} cor={nota >= 7 ? 'var(--color-acento)' : nota >= 5 ? 'var(--color-quase)' : 'var(--color-erro)'}>
          <div className="text-center">
            <p className="fonte-display text-3xl leading-none font-bold tabular">{nota.toFixed(1).replace('.', ',')}</p>
            <p className="mt-1 text-[10px] tracking-widest text-tenue uppercase">nota</p>
          </div>
        </Anel>
        <div>
          <p className="fonte-display text-2xl font-bold">{frase}</p>
          <p className="mt-1 text-suave">
            {acertos} de {respostas.length} certas
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <Stat rotulo={recorde ? 'pontos · recorde!' : 'pontos'} valor={<span className={recorde ? 'animate-halo' : ''}>{pontos}</span>} cor="text-acento" />
        <Stat rotulo="maior sequência" valor={`🔥 ${maiorSeq}`} cor="text-quase" />
      </div>

      {erradas.length > 0 && (
        <div>
          <Rotulo contagem={erradas.length}>Pra revisar</Rotulo>
          <ul className="flex flex-col gap-2">
            {erradas.map((r) => (
              <li key={r.questao.id} className="flex gap-3 rounded-xl border border-borda bg-superficie p-3 text-sm">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-erro-fundo text-[10px] text-erro">✕</span>
                <span className="line-clamp-2 text-suave">{r.questao.enunciado}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-col gap-2">
        {erradas.length > 0 && (
          <BotaoLink
            href={revisar}
            variante="perigo"
            onClick={(e) => {
              if (deNovo) {
                e.preventDefault()
                window.scrollTo({ top: 0 })
                deNovo()
              }
            }}
          >
            {erradas.length === 1 ? "Revisar o erro agora" : `Revisar os ${erradas.length} erros agora`}
          </BotaoLink>
        )}
        <BotaoLink href={voltar} variante={erradas.length ? 'secundario' : 'primario'}>
          Voltar ao módulo
        </BotaoLink>
      </div>
    </div>
  )
}
