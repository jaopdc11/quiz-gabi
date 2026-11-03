import { beforeEach, expect, it } from 'vitest'
import { lerProgresso, registrarPontos, registrarResposta } from './storage'

beforeEach(() => localStorage.clear())

it('erro entra na revisão e sai quando acerta', () => {
  registrarResposta('m', 'prova', 'q1', false)
  expect(lerProgresso('m', 'prova').erros).toEqual(['q1'])
  registrarResposta('m', 'prova', 'q1', true)
  expect(lerProgresso('m', 'prova')).toMatchObject({ erros: [], dominadas: ['q1'] })
})

it('seções são separadas', () => {
  registrarResposta('m', 'extras', 'q1', false)
  expect(lerProgresso('m', 'prova').erros).toEqual([])
})

it('recorde só sobe', () => {
  expect(registrarPontos('m', 'prova', 50)).toBe(true)
  expect(registrarPontos('m', 'prova', 30)).toBe(false)
  expect(lerProgresso('m', 'prova').recorde).toBe(50)
})
