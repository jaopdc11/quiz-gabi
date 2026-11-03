/** 10 por acerto + bônus de sequência (até +10 a partir do 5º acerto seguido). */
export function pontosDoAcerto(sequencia: number): number {
  return 10 + Math.min(sequencia - 1, 5) * 2
}

export function embaralhar<T>(xs: readonly T[]): T[] {
  const a = [...xs]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j]!, a[i]!]
  }
  return a
}
