import type { SecaoId } from './types'

/*
 * Progresso por seção, no localStorage do aparelho.
 * - erros: questões que ela errou e ainda não acertou na revisão
 * - dominadas: questões que ela já acertou alguma vez
 * - recorde: maior pontuação numa rodada
 */
export interface ProgressoSecao {
  erros: string[]
  dominadas: string[]
  recorde: number
}

type Tudo = Record<string, Partial<Record<SecaoId, ProgressoSecao>>>

const CHAVE = 'quiz-gabi:v1'

function lerTudo(): Tudo {
  try {
    const bruto = localStorage.getItem(CHAVE)
    return bruto ? (JSON.parse(bruto) as Tudo) : {}
  } catch {
    return {}
  }
}

function gravarTudo(t: Tudo): void {
  try {
    localStorage.setItem(CHAVE, JSON.stringify(t))
  } catch {
    // aba anônima / sem espaço: o jogo segue, só não lembra
  }
}

export function lerProgresso(modulo: string, secao: SecaoId): ProgressoSecao {
  const p = lerTudo()[modulo]?.[secao]
  return { erros: p?.erros ?? [], dominadas: p?.dominadas ?? [], recorde: p?.recorde ?? 0 }
}

/** Registra uma resposta: erro entra na revisão; acerto sai dela e conta como dominada. */
export function registrarResposta(modulo: string, secao: SecaoId, questao: string, acertou: boolean): void {
  const t = lerTudo()
  const p = lerProgresso(modulo, secao)
  const erros = new Set(p.erros)
  const dominadas = new Set(p.dominadas)
  if (acertou) {
    erros.delete(questao)
    dominadas.add(questao)
  } else {
    erros.add(questao)
  }
  t[modulo] = { ...t[modulo], [secao]: { ...p, erros: [...erros], dominadas: [...dominadas] } }
  gravarTudo(t)
}

/** Grava o recorde se bateu; devolve true quando é recorde novo. */
export function registrarPontos(modulo: string, secao: SecaoId, pontos: number): boolean {
  const t = lerTudo()
  const p = lerProgresso(modulo, secao)
  if (pontos <= p.recorde) return false
  t[modulo] = { ...t[modulo], [secao]: { ...p, recorde: pontos } }
  gravarTudo(t)
  return true
}

export function zerarSecao(modulo: string, secao: SecaoId): void {
  const t = lerTudo()
  if (t[modulo]) delete t[modulo][secao]
  gravarTudo(t)
}

/* ── Flashcards: o último veredito de cada cartão ─────────────────────── */

const CHAVE_CARDS = 'quiz-gabi:cards:v1'

type Veredito = 'sabia' | 'nao'

function lerCards(): Record<string, Record<string, Veredito>> {
  try {
    const b = localStorage.getItem(CHAVE_CARDS)
    return b ? JSON.parse(b) : {}
  } catch {
    return {}
  }
}

export function lerVereditos(modulo: string): Record<string, Veredito> {
  return lerCards()[modulo] ?? {}
}

export function registrarCard(modulo: string, card: string, v: Veredito): void {
  const t = lerCards()
  t[modulo] = { ...t[modulo], [card]: v }
  try {
    localStorage.setItem(CHAVE_CARDS, JSON.stringify(t))
  } catch {
    // sem armazenamento: segue sem lembrar
  }
}

export function zerarCards(modulo: string): void {
  const t = lerCards()
  delete t[modulo]
  try {
    localStorage.setItem(CHAVE_CARDS, JSON.stringify(t))
  } catch {
    // idem
  }
}

/* ── Resumo: tópicos marcados como lidos ──────────────────────────────── */

const CHAVE_LIDOS = 'quiz-gabi:lidos:v1'

export function lerLidos(modulo: string): string[] {
  try {
    const b = localStorage.getItem(CHAVE_LIDOS)
    return (b ? (JSON.parse(b) as Record<string, string[]>) : {})[modulo] ?? []
  } catch {
    return []
  }
}

export function gravarLidos(modulo: string, lidos: string[]): void {
  try {
    const b = localStorage.getItem(CHAVE_LIDOS)
    const t = b ? (JSON.parse(b) as Record<string, string[]>) : {}
    t[modulo] = lidos
    localStorage.setItem(CHAVE_LIDOS, JSON.stringify(t))
  } catch {
    // sem armazenamento: só não lembra
  }
}

/* Rodada/baralho em andamento: sobrevive a recarregar a página. */
export function lerAndamento<T>(chave: string): T | null {
  try {
    const bruto = localStorage.getItem(`quiz-gabi:andamento:${chave}`)
    return bruto ? (JSON.parse(bruto) as T) : null
  } catch {
    return null
  }
}

export function gravarAndamento(chave: string, valor: unknown): void {
  try {
    if (valor === null) localStorage.removeItem(`quiz-gabi:andamento:${chave}`)
    else localStorage.setItem(`quiz-gabi:andamento:${chave}`, JSON.stringify(valor))
  } catch {
    // sem storage: só não retoma
  }
}
