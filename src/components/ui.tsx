import type { ComponentProps, ReactNode } from 'react'
import type { SecaoId } from '@/core/types'

/* Primitivas visuais. Mesma linguagem do nerd-trainer: neon com parcimônia,
   botão com brilho e resposta tátil, painel com borda fina. */

type Variante = 'primario' | 'perigo' | 'secundario' | 'discreto'

const VARIANTE: Record<Variante, string> = {
  primario:
    'bg-acento text-fundo font-semibold shadow-[0_0_28px_-6px_var(--color-acento)] hover:bg-acento-forte',
  perigo:
    'bg-erro-fundo text-erro font-semibold border border-erro/50 shadow-[0_0_24px_-10px_var(--color-erro)] hover:border-erro',
  secundario: 'border border-borda bg-superficie text-texto hover:border-borda-forte hover:bg-superficie-alta',
  discreto: 'text-tenue hover:text-suave',
}

export function classesBotao(v: Variante, extra = ''): string {
  return `inline-flex min-h-13 items-center justify-center gap-2 rounded-xl px-5 py-3 text-center transition-all duration-150 motion-safe:active:scale-[0.97] disabled:opacity-40 disabled:active:scale-100 ${VARIANTE[v]} ${extra}`
}

export function Botao({ variante = 'primario', className = '', ...p }: ComponentProps<'button'> & { variante?: Variante }) {
  return <button type="button" className={classesBotao(variante, className)} {...p} />
}

export function BotaoLink({ variante = 'primario', className = '', ...p }: ComponentProps<'a'> & { variante?: Variante }) {
  return <a className={classesBotao(variante, className)} {...p} />
}

export const SECOES: Record<SecaoId, { nome: string; selo: string; descricao: string; texto: string; fundo: string; borda: string; cor: string }> = {
  prova: {
    nome: 'Questões da prova',
    selo: 'da prova',
    descricao: 'As questões reais, na ordem original, com o gabarito da professora.',
    texto: 'text-mat',
    fundo: 'bg-mat-fundo',
    borda: 'border-mat/40',
    cor: 'var(--color-mat)',
  },
  extras: {
    nome: 'Questões extras',
    selo: 'extra',
    descricao: 'Novas, no mesmo estilo e conteúdo, embaralhadas a cada rodada.',
    texto: 'text-fis',
    fundo: 'bg-fis-fundo',
    borda: 'border-fis/40',
    cor: 'var(--color-fis)',
  },
}

export function Selo({ secao, className = '' }: { secao: SecaoId; className?: string }) {
  const s = SECOES[secao]
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] tracking-wider uppercase ${s.texto} ${s.fundo} ${s.borda} ${className}`}
    >
      <span className="size-1.5 rounded-full bg-current" />
      {s.selo}
    </span>
  )
}

/** Anel de progresso. `cor` é uma var CSS. */
export function Anel({
  valor,
  total,
  tamanho = 72,
  cor = 'var(--color-acento)',
  children,
}: {
  valor: number
  total: number
  tamanho?: number
  cor?: string
  children?: ReactNode
}) {
  const r = 15.5
  const c = 2 * Math.PI * r
  const frac = total ? Math.min(valor / total, 1) : 0
  return (
    <div className="relative shrink-0" style={{ width: tamanho, height: tamanho }}>
      <svg viewBox="0 0 36 36" className="size-full -rotate-90">
        <circle cx="18" cy="18" r={r} fill="none" stroke="var(--color-fundo-alt)" strokeWidth="3" />
        <circle
          cx="18"
          cy="18"
          r={r}
          fill="none"
          stroke={cor}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - frac)}
          style={{ transition: 'stroke-dashoffset 0.8s cubic-bezier(0.22,1,0.36,1)' }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">{children}</div>
    </div>
  )
}

export function Stat({ rotulo, valor, cor = 'text-texto', className = '' }: { rotulo: string; valor: ReactNode; cor?: string; className?: string }) {
  return (
    <div className={`rounded-xl border border-borda bg-fundo-alt/70 px-3 py-2.5 ${className}`}>
      <p className={`fonte-display text-2xl leading-none font-bold tabular ${cor}`}>{valor}</p>
      <p className="mt-1.5 text-[11px] tracking-wide text-tenue uppercase">{rotulo}</p>
    </div>
  )
}

export function Rotulo({ children, contagem }: { children: ReactNode; contagem?: number }) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <h2 className="fonte-display text-xs font-semibold tracking-[0.22em] text-suave uppercase">{children}</h2>
      <span className="h-px flex-1 bg-borda" />
      {contagem !== undefined && <span className="font-mono text-xs text-tenue">{contagem}</span>}
    </div>
  )
}
