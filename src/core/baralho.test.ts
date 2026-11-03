import { expect, it } from 'vitest'
import { aposVeredito } from './baralho'

it('sabia remove', () => expect(aposVeredito([1, 2, 3], true)).toEqual([2, 3]))
it('não sabia volta 3 adiante', () => expect(aposVeredito([1, 2, 3, 4, 5], false)).toEqual([2, 3, 4, 1, 5]))
it('não sabia no fim volta pro fim', () => expect(aposVeredito([1, 2], false)).toEqual([2, 1]))
it('único cartão errado repete', () => expect(aposVeredito([1], false)).toEqual([1]))
