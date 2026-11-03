import { useSyncExternalStore } from 'react'
import type { SecaoId } from './types'

/* Roteador por hash (mesmo esquema do nerd-trainer: F5 funciona no GitHub Pages). */

export type Modo = 'jogar' | 'erros'

export type Rota =
  | { nome: 'inicio' }
  | { nome: 'modulo'; modulo: string }
  | { nome: 'jogo'; modulo: string; secao: SecaoId; modo: Modo }

export function parseHash(hash: string): Rota {
  const [a, modulo, secao, modo] = hash.replace(/^#\/?/, '').split('/').filter(Boolean)
  if (a === 'm' && modulo) {
    if ((secao === 'prova' || secao === 'extras') && (modo === 'jogar' || modo === 'erros')) {
      return { nome: 'jogo', modulo, secao, modo }
    }
    return { nome: 'modulo', modulo }
  }
  return { nome: 'inicio' }
}

export function href(r: Rota): string {
  if (r.nome === 'inicio') return '#/'
  if (r.nome === 'modulo') return `#/m/${r.modulo}`
  return `#/m/${r.modulo}/${r.secao}/${r.modo}`
}

let cacheHash: string | null = null
let cacheRota: Rota = { nome: 'inicio' }

function ler(): Rota {
  const h = window.location.hash
  if (h !== cacheHash) {
    cacheHash = h
    cacheRota = parseHash(h)
  }
  return cacheRota
}

function inscrever(f: () => void) {
  window.addEventListener('hashchange', f)
  return () => window.removeEventListener('hashchange', f)
}

export function useRota(): Rota {
  return useSyncExternalStore(inscrever, ler)
}
