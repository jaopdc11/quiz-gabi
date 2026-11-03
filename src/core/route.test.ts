import { expect, it } from 'vitest'
import { href, parseHash } from './route'

it('ida e volta', () => {
  for (const r of [
    { nome: 'inicio' },
    { nome: 'modulo', modulo: 'x' },
    { nome: 'jogo', modulo: 'x', secao: 'extras', modo: 'erros' },
  ] as const) {
    expect(parseHash(href(r))).toEqual(r)
  }
})
