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
