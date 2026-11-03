/**
 * Fila de uma sessão de flashcards. "Sabia" tira o cartão da fila; "não sabia"
 * o devolve algumas posições adiante, para ele voltar ainda nesta sessão.
 */
export const DISTANCIA_VOLTA = 3

export function aposVeredito<T>(fila: readonly T[], sabia: boolean): T[] {
  const [atual, ...resto] = fila
  if (atual === undefined) return []
  if (sabia) return resto
  const pos = Math.min(DISTANCIA_VOLTA, resto.length)
  return [...resto.slice(0, pos), atual, ...resto.slice(pos)]
}
