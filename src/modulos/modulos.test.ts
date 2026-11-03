import { describe, expect, it } from 'vitest'
import { modulos } from './index'

describe('módulos', () => {
  it('ids de módulo únicos', () => {
    const ids = modulos.map((m) => m.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('ids de questão únicos no site inteiro', () => {
    const ids = modulos.flatMap((m) => [...m.prova, ...m.extras].map((q) => q.id))
    expect(new Set(ids).size).toBe(ids.length)
  })

  for (const m of modulos) {
    describe(m.id, () => {
      it('tem questões da prova', () => expect(m.prova.length).toBeGreaterThan(0))

      for (const q of [...m.prova, ...m.extras]) {
        it(`${q.id} é válida`, () => {
          expect(q.enunciado.trim()).not.toBe('')
          expect(q.explicacao.trim().length).toBeGreaterThan(20)
          if (q.tipo === 'multipla') {
            expect(q.alternativas.length).toBeGreaterThanOrEqual(2)
            expect(Number.isInteger(q.correta)).toBe(true)
            expect(q.correta).toBeGreaterThanOrEqual(0)
            expect(q.correta).toBeLessThan(q.alternativas.length)
            expect(new Set(q.alternativas).size).toBe(q.alternativas.length)
          } else {
            expect(q.itens.length).toBeGreaterThanOrEqual(2)
          }
        })
      }
    })
  }

  it('gabarito da M2/2023 bate com a correção da professora', () => {
    const m = modulos.find((x) => x.id === 'linguagem-escrita-m2')!
    const gab = m.prova.map((q) =>
      q.tipo === 'multipla' ? q.correta : q.itens.map((i) => (i.verdadeiro ? 'V' : 'F')).join(''),
    )
    // 1C 2D 3B 4C 5A 6C 7C 8e 9 VFVFV 10 IV
    expect(gab).toEqual([2, 3, 1, 2, 0, 2, 2, 4, 'VFVFV', 3])
  })
})
