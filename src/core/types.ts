/*
 * Um Módulo é uma prova antiga virando unidade de estudo. Dentro dele há duas
 * seções separadas: as questões da prova real (transcritas, gabarito da
 * professora) e as questões extras (criadas no mesmo estilo para treinar).
 *
 * Prova nova = arquivo novo em src/modulos/ + registro em src/modulos/index.ts.
 * O teste src/modulos/modulos.test.ts valida o formato.
 */

/** Alternativas: "é correto o que se afirma em", caso clínico, conceito… */
export interface QuestaoMultipla {
  tipo: 'multipla'
  id: string
  /** Texto principal (caso clínico, contexto). */
  enunciado: string
  /** Itens I, II, III… quando a questão pede para analisar afirmativas. */
  afirmativas?: string[]
  /** Pergunta final ("É correto o que se afirma em:"), se separada do enunciado. */
  pergunta?: string
  alternativas: string[]
  /** Índice (0-based) da alternativa correta. */
  correta: number
  explicacao: string
  /** De onde saiu a questão extra (ex.: 'resumo'); vira um selo na tela. */
  base?: 'resumo'
}

/** Verdadeiro ou falso item a item. */
export interface QuestaoVF {
  tipo: 'vf'
  id: string
  enunciado: string
  itens: { texto: string; verdadeiro: boolean }[]
  explicacao: string
  base?: 'resumo'
}

export type Questao = QuestaoMultipla | QuestaoVF

/** Cartão de memorização: frente é a pergunta/pista, verso a resposta. */
export interface Flashcard {
  id: string
  /** Agrupa o baralho (ex.: 'Avaliação', 'Zorzi', 'Dislexia'). */
  tema: string
  frente: string
  verso: string
}

/** Bloco do resumo para leitura. */
export type BlocoResumo =
  | { tipo: 'h2'; texto: string }
  | { tipo: 'h3'; texto: string }
  | { tipo: 'p'; texto: string }
  | { tipo: 'item'; texto: string }
  | { tipo: 'destaque'; texto: string }
  | { tipo: 'grafico-zorzi' }

export type SecaoId = 'prova' | 'extras'

export interface Modulo {
  id: string
  titulo: string
  /** Ex.: "UNIVALI · Fonoaudiologia 6º período · M2 · 2023" */
  origem: string
  /** Transcritas da prova real, na ordem original. */
  prova: Questao[]
  /** Criadas no mesmo estilo e conteúdo, para treino. */
  extras: Questao[]
  /** Material de leitura (opcional). */
  resumo?: { titulo: string; subtitulo?: string; blocos: BlocoResumo[] }
  flashcards?: Flashcard[]
}
