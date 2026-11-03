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
}

/** Verdadeiro ou falso item a item. */
export interface QuestaoVF {
  tipo: 'vf'
  id: string
  enunciado: string
  itens: { texto: string; verdadeiro: boolean }[]
  explicacao: string
}

export type Questao = QuestaoMultipla | QuestaoVF

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
}
