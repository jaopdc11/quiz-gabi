import type { Modulo } from '@/core/types'
import { extras as leM2Extras } from './linguagem-escrita-m2-extras'
import { prova as leM2Prova } from './linguagem-escrita-m2-prova'

/*
 * Registro de módulos. Prova nova:
 *   1. src/modulos/<id>-prova.ts  (questões reais, gabarito da professora)
 *   2. src/modulos/<id>-extras.ts (questões de treino, opcional)
 *   3. uma entrada aqui embaixo.
 * `npm test` valida ids, gabaritos e explicações.
 */
export const modulos: Modulo[] = [
  {
    id: 'linguagem-escrita-m2',
    titulo: 'Linguagem Escrita · M2',
    origem: 'UNIVALI · Fonoaudiologia 6º período · 2023',
    prova: leM2Prova,
    extras: leM2Extras,
  },
]

export function buscarModulo(id: string): Modulo | undefined {
  return modulos.find((m) => m.id === id)
}
