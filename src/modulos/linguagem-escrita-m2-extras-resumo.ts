import type { Questao } from '@/core/types'

/* Questões extras baseadas exclusivamente no resumo da professora (linguagem-escrita-m2-resumo.ts). */
const F = (s: string) => ` Fonte: resumo da professora (${s}).`

export const extrasResumo: Questao[] = [
  {
    tipo: 'multipla',
    id: 'le-m2-r01',
    base: 'resumo',
    enunciado: 'Qual sequência corresponde às etapas da avaliação da linguagem escrita?',
    alternativas: [
      'Entrevista/anamnese, aplicação de provas e testes, análise dos dados, hipóteses diagnósticas fonoaudiológicas e encaminhamento/devolutiva/relatório.',
      'Aplicação de testes padronizados, diagnóstico médico, anamnese e alta.',
      'Observação escolar, teste de QI, diagnóstico e encaminhamento ao neurologista.',
      'Anamnese, exame de neuroimagem, análise dos dados e relatório.',
      'Ditado de palavras, cópia, devolutiva e terapia, sem necessidade de anamnese.',
    ],
    correta: 0,
    explicacao:
      'As etapas são entrevista/anamnese, provas e testes, análise dos dados, hipóteses diagnósticas fonoaudiológicas e encaminhamento/devolutiva/relatório. A avaliação deve englobar linguagem oral, escrita e avaliação audiológica completa.' +
      F('Avaliação: etapas e anamnese'),
  },
  {
    tipo: 'multipla',
    id: 'le-m2-r02',
    base: 'resumo',
    enunciado: 'Sobre a anamnese na avaliação da linguagem escrita (Weiss, 2000), analise:',
    afirmativas: [
      'Inclui dados gerais e queixa: tempo, forma de início, sintomas principais e recursos usados antes.',
      'Inclui a história das primeiras aprendizagens, como gestação, desenvolvimento motor e de linguagem, alimentação e sono.',
      'Dispensa a história escolar, já que esta é avaliada pela pedagoga.',
      'Inclui a história clínica, com condições auditivas e visuais.',
      'Inclui a história da família nuclear e ampliada, com a estimulação oferecida.',
    ],
    pergunta: 'É correto o que se afirma em:',
    alternativas: ['I, II e III', 'II, III e V', 'I, II, IV e V', 'I e IV', 'Todas'],
    correta: 2,
    explicacao:
      'A anamnese abrange queixa, primeiras aprendizagens, história clínica, família e história escolar. A história escolar (entrada, trocas de escola, como foi a alfabetização) faz parte dela, por isso III está errada.' +
      F('Avaliação: etapas e anamnese'),
  },
  {
    tipo: 'multipla',
    id: 'le-m2-r03',
    base: 'resumo',
    enunciado:
      'Uma criança escreve palavras novas aplicando a correspondência grafema-fonema, mas ainda não escreve corretamente pelo léxico mental. Em qual estratégia de ortografia ela está?',
    alternativas: ['Logográfica', 'Ortográfica', 'Grafia', 'Alfabética', 'Produção textual'],
    correta: 3,
    explicacao:
      'Na estratégia alfabética a criança percebe a relação fala-escrita e aplica a correspondência grafema-fonema, o que permite escrever palavras novas. Na logográfica ela “desenha” a palavra; na ortográfica escreve corretamente por acesso ao léxico mental ortográfico.' +
      F('Três componentes da escrita'),
  },
  {
    tipo: 'multipla',
    id: 'le-m2-r04',
    base: 'resumo',
    enunciado: 'Pela psicologia cognitiva e neuropsicologia, os três componentes da escrita são:',
    alternativas: [
      'Leitura, escrita e cálculo.',
      'Consciência fonológica, memória e atenção.',
      'Rota lexical, rota fonológica e rota mista.',
      'Coesão, coerência e informatividade.',
      'Ortografia, grafia e produção textual.',
    ],
    correta: 4,
    explicacao:
      'Os três componentes são ortografia, grafia (elementos motores) e produção textual (planejamento, construção de frases e revisão). Coesão e coerência são critérios de análise do texto, não componentes.' +
      F('Três componentes da escrita'),
  },
  {
    tipo: 'multipla',
    id: 'le-m2-r05',
    base: 'resumo',
    enunciado: 'Na avaliação da leitura por recursos não padronizados, a leitura de PSEUDOPALAVRAS avalia principalmente:',
    alternativas: [
      'O uso da rota lexical.',
      'O uso da rota fonológica.',
      'A compreensão de textos.',
      'A coordenação visomotora.',
      'A pontuação e a estrutura da frase.',
    ],
    correta: 1,
    explicacao:
      'Pseudopalavras são pronunciáveis e sem significado, então avaliam a rota fonológica. Já a leitura de palavras com significado avalia se a criança usa a rota lexical.' +
      F('Avaliação da leitura'),
  },
  {
    tipo: 'multipla',
    id: 'le-m2-r06',
    base: 'resumo',
    enunciado: 'Relacione o recurso não padronizado ao que ele avalia. Qual associação está CORRETA?',
    alternativas: [
      'Ditado de letras: coesão e coerência.',
      'Cópia: apenas a relação fonema-grafema.',
      'Ditado de frases: pontuação, estrutura da frase, parágrafo e letras maiúsculas.',
      'Ditado de pseudopalavras: conhecimento lexical e ortografia de palavras irregulares.',
      'Produção textual: apenas coordenação motora fina.',
    ],
    correta: 2,
    explicacao:
      'O ditado de frases avalia pontuação, estrutura da frase, parágrafo e maiúsculas, além dos itens dos ditados anteriores. O ditado de letras avalia conhecimento das letras e relação fonema/grafema; o de pseudopalavras, relação fonema-grafema, concentração e discriminação auditiva; a cópia, concentração, memória lexical, ortografia, pontuação e coordenação motora.' +
      F('Recursos não padronizados para avaliar a escrita'),
  },
  {
    tipo: 'multipla',
    id: 'le-m2-r07',
    base: 'resumo',
    enunciado: 'Sobre os testes mais utilizados na avaliação da escrita (Maia et al., 2021), analise:',
    afirmativas: [
      'A Prova ABC é não padronizada e avalia ortografia, grafia e produção textual.',
      'O TLE é padronizado e avalia ortografia e grafia.',
      'A EAVE é não padronizada e avalia produção textual.',
      'O TAE é padronizado e avalia ortografia, grafia e produção textual.',
      'O TDE é padronizado e avalia ortografia.',
    ],
    pergunta: 'É correto o que se afirma em:',
    alternativas: ['I, II, IV e V', 'I e III', 'II, III e IV', 'III e V', 'Todas'],
    correta: 0,
    explicacao:
      'A EAVE (Escala de Avaliação da Escrita) é padronizada e avalia ortografia, por isso III está errada. Dos citados, só a Prova ABC é não padronizada.' +
      F('Testes mais utilizados'),
  },
  {
    tipo: 'multipla',
    id: 'le-m2-r08',
    base: 'resumo',
    enunciado: 'Qual item NÃO faz parte dos 7 pontos-chave do relatório fonoaudiológico?',
    alternativas: [
      'Identificação.',
      'Comportamento e sociabilização.',
      'Conduta e encaminhamentos.',
      'Orientação para família e escola.',
      'Resultado do exame de neuroimagem.',
    ],
    correta: 4,
    explicacao:
      'Os 7 pontos são identificação, comportamento e sociabilização, linguagem oral, linguagem escrita, conclusão com hipóteses diagnósticas, conduta e encaminhamentos, e orientação para família e escola. Neuroimagem não entra no relatório, e nem há exame de imagem que detecte dislexia.' +
      F('Relatório fonoaudiológico: 7 pontos-chave'),
  },
  {
    tipo: 'vf',
    id: 'le-m2-r09',
    base: 'resumo',
    enunciado: 'Sobre as representações múltiplas (Zorzi), julgue:',
    itens: [
      { texto: 'Nas correspondências estáveis, um som é representado por uma única letra, como /p/ sempre “p”.', verdadeiro: true },
      { texto: 'O /s/ pode ser escrito por s, ss, sc, sç, c, ç, x, xc e z.', verdadeiro: true },
      { texto: 'Uma mesma letra ter mais de um som (c = /s/ ou /k/) é exemplo de correspondência estável.', verdadeiro: false },
      { texto: '“Queicho” e “xurasco” são exemplos de erros por representações múltiplas.', verdadeiro: true },
      { texto: 'Na escrita ingênua (erro não consciente), a criança testa várias formas antes de escolher.', verdadeiro: false },
    ],
    explicacao:
      'Correspondências instáveis incluem tanto um som com várias letras quanto uma letra com vários sons, como c e g. Testar várias formas é estratégia da situação de conflito; no erro não consciente a pessoa escreve certa de que está correta.' +
      F('Zorzi: representações múltiplas'),
  },
  {
    tipo: 'multipla',
    id: 'le-m2-r10',
    base: 'resumo',
    enunciado:
      'Ao escrever “fucícola”, o aluno percebe que há várias formas de grafar o /s/, exclui as que não cabem pelo contexto e consulta o dicionário. Segundo Zorzi, isso caracteriza:',
    alternativas: [
      'Erro não consciente (escrita ingênua).',
      'Situação de conflito.',
      'Hipercorreção.',
      'Apoio na oralidade.',
      'Troca surda/sonora.',
    ],
    correta: 1,
    explicacao:
      'Na situação de conflito a pessoa percebe que há mais de uma alternativa e usa estratégias: escrever de várias formas, consultar o dicionário, perguntar ou usar derivação. No exemplo da aula restam fussícola, fucícola e fuscícola, e só o dicionário resolve.' +
      F('Zorzi: representações múltiplas'),
  },
  {
    tipo: 'multipla',
    id: 'le-m2-r11',
    base: 'resumo',
    enunciado: 'Escritas como “derepente”, “em bora” e “quees tava” são explicadas, segundo Zorzi, principalmente:',
    alternativas: [
      'Pela dificuldade no traçado da letra cursiva.',
      'Pela troca do traço de sonoridade.',
      'Pela influência da oralidade, já que a fala é um fluxo sonoro contínuo.',
      'Pela generalização de uma regra ortográfica.',
      'Por dislexia visual, necessariamente.',
    ],
    correta: 2,
    explicacao:
      'Junção/separação indevida (segmentação) vem da influência da oralidade: a fala é contínua e a criança precisa descobrir os segmentos da escrita. É difícil entender que “a”, “e”, “o”, “de” também são palavras.' +
      F('Zorzi: junção/separação indevida'),
  },
  {
    tipo: 'multipla',
    id: 'le-m2-r12',
    base: 'resumo',
    enunciado: 'Sobre atividades para trabalhar a segmentação (junção/separação), analise:',
    afirmativas: [
      'Contar as palavras e comparar a extensão das frases.',
      'Escrever frases com palavras juntas de propósito para a criança segmentar.',
      'Acentuar o traço de sonoridade com pistas tátil-cinestésicas.',
      'Ordenar palavras desordenadas e completar frases.',
      'Identificar as palavras em frases faladas.',
    ],
    pergunta: 'São atividades indicadas para segmentação:',
    alternativas: ['I, II e III', 'III e IV', 'I, III e V', 'I, II, IV e V', 'Todas'],
    correta: 3,
    explicacao:
      'Contar palavras, segmentar frases juntadas de propósito, ordenar, completar e identificar palavras em frases faladas são atividades de segmentação. Acentuar o traço de sonoridade é o trabalho das trocas surdas/sonoras.' +
      F('Zorzi: junção/separação indevida'),
  },
  {
    tipo: 'vf',
    id: 'le-m2-r13',
    base: 'resumo',
    enunciado: 'Sobre as alterações ortográficas de Zorzi, julgue:',
    itens: [
      { texto: 'Os erros fazem parte da aprendizagem, pois são hipóteses da criança.', verdadeiro: true },
      { texto: 'Inversões e acréscimos são erros pouco frequentes.', verdadeiro: true },
      { texto: 'A maioria das crianças com trocas surdas/sonoras vai mal em testes de discriminação auditiva por pares mínimos.', verdadeiro: false },
      { texto: 'A coleta é feita com ditado de palavras e ditado de frases.', verdadeiro: true },
      { texto: 'Toda criança que erra deve ser encaminhada a tratamento, independentemente da proposta pedagógica.', verdadeiro: false },
    ],
    explicacao:
      'A maioria tem discriminação auditiva adequada; o problema está na consciência fonológica. Só devem ser encaminhadas as crianças que não respondem a uma boa proposta pedagógica por dificuldades próprias.' +
      F('Alterações ortográficas (Zorzi)'),
  },
  {
    tipo: 'multipla',
    id: 'le-m2-r14',
    base: 'resumo',
    enunciado: 'Segundo o DSM-5, qual critério exige que as dificuldades NÃO sejam explicadas por deficiência intelectual, acuidade visual ou auditiva não corrigida ou instrução inadequada?',
    alternativas: ['Critério A', 'Critério B', 'Critério C', 'Critério D', 'Especificador de gravidade'],
    correta: 3,
    explicacao:
      'O critério D é o de exclusão. A traz as dificuldades por 6 meses ou mais apesar de intervenções; B, desempenho abaixo do esperado confirmado por medidas padronizadas; C, início nos anos escolares.' +
      F('CID-10 e DSM-5'),
  },
  {
    tipo: 'multipla',
    id: 'le-m2-r15',
    base: 'resumo',
    enunciado: 'Sobre o diagnóstico de dislexia, analise:',
    afirmativas: [
      'O CID-10 classifica como F81.0, transtorno específico de leitura.',
      'O DSM-5 usa o código 315.00, transtorno específico de aprendizagem com prejuízo na leitura.',
      'O teste de QI é obrigatório em todo diagnóstico.',
      'O critério A do DSM-5 exige sintomas por pelo menos 6 meses, apesar de intervenções.',
      'O CID-10 prevê os graus leve, moderado e grave.',
    ],
    pergunta: 'É correto o que se afirma em:',
    alternativas: ['I, II e III', 'I, II e IV', 'II, IV e V', 'III e V', 'Todas'],
    correta: 1,
    explicacao:
      'Segundo a professora, o QI não é obrigatório: é usado quando necessário para excluir deficiência intelectual (critério D). A gravidade leve/moderada/grave é do DSM-5; o CID-10 não prevê subtipos nem graus.' +
      F('Dislexia: QI/WISC; CID-10 e DSM-5'),
  },
  {
    tipo: 'multipla',
    id: 'le-m2-r16',
    base: 'resumo',
    enunciado: 'O novo conceito de dislexia da IDA (2025) afirma que:',
    alternativas: [
      'Dificuldades de processamento fonológico e morfológico são universais em todos os disléxicos.',
      'A causa é exclusivamente genética.',
      'Ocorre num continuum de gravidade e persiste mesmo com ensino eficaz para os colegas.',
      'A identificação só é útil antes dos 7 anos.',
      'As dificuldades são iguais em qualquer ortografia.',
    ],
    correta: 2,
    explicacao:
      'A IDA 2025 descreve a dislexia num continuum de gravidade, persistente mesmo com ensino eficaz, com causas genéticas, neurobiológicas e ambientais que interagem. Dificuldades fonológicas e morfológicas são comuns, mas não universais, e a identificação importa em qualquer idade.' +
      F('O que mudou: novo conceito (IDA, 2025)'),
  },
  {
    tipo: 'multipla',
    id: 'le-m2-r17',
    base: 'resumo',
    enunciado:
      'Uma criança lê bem palavras familiares, mas tem muita dificuldade com pseudopalavras e troca p/b, t/d e f/v. Pelos subtipos de Boder, trata-se de dislexia:',
    alternativas: [
      'Visual (diseidética)',
      'Mista',
      'Adquirida',
      'Superficial com rota fonológica preservada',
      'Fonológica (disfonética)',
    ],
    correta: 4,
    explicacao:
      'Na fonológica (disfonética) a rota fonológica falha e a lexical está preservada: lê palavras familiares, erra pseudopalavras e troca surdo-sonoras. Representa cerca de 67% dos casos; a visual (diseidética) envolve inversões, espelhamento e falha no reconhecimento global.' +
      F('Subtipos (Boder, 1973)'),
  },
  {
    tipo: 'vf',
    id: 'le-m2-r18',
    base: 'resumo',
    enunciado: 'Sobre os subtipos de Boder e a intervenção, julgue:',
    itens: [
      { texto: 'Na dislexia visual (diseidética), há mais dificuldade com letra cursiva do que com letra de fôrma.', verdadeiro: true },
      { texto: 'A dislexia mista é a soma das duas, com reeducação mais trabalhosa.', verdadeiro: true },
      { texto: 'O método fônico é indicado para crianças mais velhas com histórico de fracasso escolar.', verdadeiro: false },
      { texto: 'A soletração oral simultânea é a técnica principal do método multissensorial.', verdadeiro: true },
      { texto: 'A associação fonema-grafema deve começar pelos fonemas de várias representações, como /s/ e /z/.', verdadeiro: false },
    ],
    explicacao:
      'O fônico é para crianças mais novas, no início da alfabetização; o multissensorial, para mais velhas com fracasso escolar. A associação começa pelos fonemas de representação única (p, b, m, t, d...) e depois passa aos de várias representações.' +
      F('Subtipos (Boder, 1973); Intervenção e orientações'),
  },
  {
    tipo: 'multipla',
    id: 'le-m2-r19',
    base: 'resumo',
    enunciado:
      'Uma criança que sempre foi atenta passa, de repente, a parecer desatenta, sem queixa de dor. Segundo o resumo, qual hipótese deve ser considerada antes de TDAH?',
    alternativas: [
      'Otite média serosa.',
      'Dislexia visual.',
      'Deficiência intelectual.',
      'Disgrafia.',
      'Dislexia adquirida por lesão.',
    ],
    correta: 0,
    explicacao:
      'Na otite média serosa não há dor e a desatenção aparece de repente, com mudança de comportamento; no déficit de atenção a criança é sempre desatenta. Por isso o 1º passo é descartar alterações sensoriais.' +
      F('Diagnóstico: otite x TDAH'),
  },
  {
    tipo: 'multipla',
    id: 'le-m2-r20',
    base: 'resumo',
    enunciado: 'Sobre o amparo legal e o diagnóstico de dislexia, analise:',
    afirmativas: [
      'A Lei 14.254/2021 garante acompanhamento integral a educandos com dislexia, TDAH ou outro transtorno de aprendizagem.',
      'A Lei 14.254/2021 prevê identificação precoce, apoio educacional na rede de ensino e apoio terapêutico na rede de saúde.',
      'Existe exame de imagem que confirma a dislexia.',
      'O diagnóstico é clínico e multidisciplinar.',
      'Visão e audição são exames de exclusão.',
    ],
    pergunta: 'É correto o que se afirma em:',
    alternativas: ['I e III', 'II, III e V', 'III, IV e V', 'I, II, IV e V', 'Todas'],
    correta: 3,
    explicacao:
      'Não existe exame laboratorial nem de imagem que detecte a dislexia; o diagnóstico é clínico e multidisciplinar, com visão e audição como exames de exclusão. A Lei 14.254/2021 garante acompanhamento integral, incluindo identificação precoce e apoio educacional e terapêutico.' +
      F('Diagnóstico; Amparo legal'),
  },
  {
    tipo: 'vf',
    id: 'le-m2-r21',
    base: 'resumo',
    enunciado: 'Sobre a frequência e a classificação dos erros ortográficos, julgue:',
    itens: [
      { texto: 'O protocolo CLIFO usa 13 categorias de análise ortográfica.', verdadeiro: true },
      { texto: 'Junção/separação indevida é uma das categorias do CLIFO.', verdadeiro: true },
      { texto: 'A maioria das omissões é de m e n em final de sílaba.', verdadeiro: true },
      { texto: 'O apoio na oralidade aumenta com o avanço das séries.', verdadeiro: false },
      { texto: 'A hipercorreção (como “chapel”) é sinal de aprendizagem em curso.', verdadeiro: true },
    ],
    explicacao:
      'O apoio na oralidade é mais comum nas séries iniciais, com diminuição gradual. As demais afirmativas reproduzem o resumo: 13 categorias do CLIFO, omissões de m/n em final de sílaba e generalização como aprendizagem em curso.' +
      F('Zorzi: frequência, CLIFO, omissões, generalização'),
  },
]
