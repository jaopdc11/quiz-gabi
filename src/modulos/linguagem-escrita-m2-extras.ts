import type { Questao } from '@/core/types'

/*
 * Questões extras de treino (M2 · Linguagem Escrita). Cada questão foi
 * escrita a partir de fonte consultada na web e citada no fim da explicação.
 */

const ABD = 'ABD — O que é dislexia (https://www.dislexia.org.br/o-que-e-dislexia/)'
const ABD_SALA =
  'ABD — Como interagir com o disléxico em sala de aula (https://www.dislexia.org.br/wp-content/uploads/2019/04/Como-interagir-com-o-disl%C3%A9xico-em-sala-de-aula-Leis.pdf)'
const IDA =
  'IDA — Dislexia na sala de aula, trad. LANCE/UFSC (https://lance.paginas.ufsc.br/files/2020/03/LANCE-Tradu%C3%A7%C3%A3o-IDA-_-Dislexia-na-Sala-de-Aula.pdf)'
const ZORZI =
  'Zorzi (2006), Alterações ortográficas nos transtornos de aprendizagem (http://www.ieb.usp.br/wp-content/uploads/sites/393/2019/07/Cap.-Altera%C3%A7%C3%B5es-Ortogr%C3%A1ficas-ZORZI.pdf)'
const DSM =
  'DSM-5 citado em Psicologia: Reflexão e Crítica — Impacto do DSM-5 no diagnóstico de TA em TDAH (https://www.scielo.br/j/prc/a/cbwHmCDqrxB6SPyq4SJhFKg)'
const DSM_PT =
  'Dislexia.pt — DSM-5: alterações nos critérios (https://dislexia.pt/blog/dsm-5-criterios-diagnostico-perturbacao-aprendizagem-especifica/)'
const SUBTIPOS =
  'Psico-USF — Subtipos de Dislexia do Desenvolvimento no Português Brasileiro (http://www.scielo.br/j/pusf/a/sXRsSZgcHNqVNX4L9ys3w4B/?lang=pt)'
const PEPSIC =
  'Bol. Psicol./PePSIC 2023 — Processamento fonológico e dificuldades de leitura (https://pepsic.bvsalud.org/scielo.php?script=sci_arttext&pid=S0103-84862023000200168)'
const CODAS =
  'CoDAS — Leitura de palavras e pseudopalavras em adultos jovens (https://www.scielo.br/j/codas/a/PpWfcYDpwPcB35Hxq84mpwC/?format=pdf&lang=pt)'
const BVS = 'BVS/Ministério da Saúde — Mês de conscientização sobre a dislexia (https://bvsms.saude.gov.br/mes-de-conscientizacao-sobre-a-dislexia/)'
const CEFAC_CF =
  'Rev. CEFAC — Deuschle & Cechella, O déficit em consciência fonológica e sua relação com a dislexia (https://www.scielo.br/j/rcefac/a/vDx8fPdvsqVpt9YGgTQy3JR/)'
const CEFAC_NIVEIS =
  'Rev. CEFAC 2008 — Relação entre consciência fonológica e níveis de escrita (http://www.scielo.br/j/rcefac/a/MvhQ9DrY8n4g6MZjQbXJ8wD/?lang=pt)'
const CEFAC_DESEMP =
  'Rev. CEFAC — Consciência fonológica e desempenho escolar (http://www.scielo.br/j/rcefac/a/kVZ96PbYDkvFVwYmFVnVk9j/?lang=pt)'
const PROLEC = 'Hogrefe — PROLEC (https://hogrefe.com.br/provas-de-avaliac-o-dos-processos-de-leitu.html)'
const DISGRAFIA = 'Renata Bringel — Disortografia é diferente de Disgrafia (https://renatabringel.com.br/disortografia-e-diferente-de-disgrafia/)'

const f = (s: string) => ` Fonte: ${s}.`

export const extras: Questao[] = [
  // ───────── Definição / o que não causa ─────────
  {
    tipo: 'multipla',
    id: 'le-m2-x01',
    enunciado:
      'Segundo a definição de dislexia adotada pela International Dyslexia Association (IDA), as dificuldades de reconhecimento de palavras, decodificação e ortografia resultam tipicamente de:',
    alternativas: [
      'Um déficit no componente fonológico da linguagem, inesperado em relação às outras habilidades cognitivas e à instrução adequada.',
      'Métodos de alfabetização inadequados aplicados nos primeiros anos escolares.',
      'Um déficit visual que faz a criança enxergar as letras ao contrário.',
      'Baixa inteligência associada a pouca motivação para aprender.',
      'Privação cultural e baixo nível socioeconômico da família.',
    ],
    correta: 0,
    explicacao:
      'A IDA define a dislexia como transtorno específico de aprendizagem de origem neurológica, cujas dificuldades resultam tipicamente de um déficit no componente fonológico, inesperado diante das demais habilidades cognitivas e de instrução adequada. O mesmo material diz que ela não se deve à falta de inteligência ou de vontade, que atinge todos os níveis socioeconômicos e que “ler de trás pra frente” é mito.' +
      f(IDA),
  },
  {
    tipo: 'vf',
    id: 'le-m2-x02',
    enunciado: 'Julgue as afirmações sobre mitos e fatos da dislexia, segundo a IDA:',
    itens: [
      { texto: 'Pessoas com dislexia leem e veem as palavras “de trás pra frente”.', verdadeiro: false },
      { texto: 'A dislexia não é doença e, portanto, não tem cura.', verdadeiro: true },
      { texto: 'A dislexia ocorre na linha familiar: ter pai ou irmão disléxico aumenta a chance de tê-la.', verdadeiro: true },
      { texto: 'A dislexia acomete apenas pessoas de baixo nível socioeconômico.', verdadeiro: false },
      { texto: 'Disléxicos costumam ter inteligência abaixo da média.', verdadeiro: false },
    ],
    explicacao:
      'A IDA chama de mito a leitura “de trás pra frente”: as confusões vêm da dificuldade de lembrar os símbolos que representam os sons. Dislexia não é doença (logo, não tem cura), tem caráter familiar, atinge todos os níveis socioeconômicos e intelectuais e não implica inteligência mais baixa.' +
      f(IDA),
  },
  {
    tipo: 'multipla',
    id: 'le-m2-x03',
    enunciado: 'Sobre a definição atual de dislexia publicada pela Associação Brasileira de Dislexia (ABD), analise:',
    afirmativas: [
      'As dificuldades envolvem precisão, velocidade ou ambos na leitura de palavras e/ou na escrita.',
      'As dificuldades desaparecem quando a criança recebe o mesmo ensino eficaz que os colegas.',
      'As causas são complexas e envolvem combinações de influências genéticas, neurobiológicas e ambientais.',
      'Dificuldades no processamento fonológico e morfológico são comuns, mas não universais.',
      'Dificuldades precoces na linguagem oral nunca têm relação com desafios posteriores na alfabetização.',
    ],
    pergunta: 'É correto o que se afirma em:',
    alternativas: ['I e II', 'II, III e V', 'I, III e IV', 'III, IV e V', 'I, II, III, IV e V'],
    correta: 2,
    explicacao:
      'A ABD define dislexia como dificuldade na leitura de palavras e/ou escrita (precisão, velocidade ou ambos), com causas genéticas, neurobiológicas e ambientais e processamento fonológico/morfológico alterado de forma comum, mas não universal. II está errada: as dificuldades persistem mesmo com ensino eficaz para os colegas. V está errada: dificuldades precoces na linguagem oral frequentemente prenunciam desafios na alfabetização.' +
      f(ABD),
  },
  {
    tipo: 'multipla',
    id: 'le-m2-x04',
    enunciado:
      'De acordo com a BVS do Ministério da Saúde, a Dislexia do Desenvolvimento e a Dislexia Adquirida diferem principalmente porque:',
    alternativas: [
      'A adquirida é a forma mais frequente, correspondendo a cerca de 80% dos casos.',
      'A do desenvolvimento só aparece na vida adulta, depois da alfabetização completa.',
      'Ambas têm a mesma origem genética, diferindo só na idade do diagnóstico.',
      'A do desenvolvimento tem base genética e hereditária, enquanto a adquirida surge após trauma, lesão ou AVC.',
      'A adquirida é causada por métodos de ensino inadequados na alfabetização.',
    ],
    correta: 3,
    explicacao:
      'Segundo a BVS/MS, a dislexia do desenvolvimento tem base genética e hereditária e responde por cerca de 80% dos casos; a adquirida surge após trauma, lesão ou AVC (por exemplo, no lobo temporal), em quem já lia. Por isso a adquirida não é a mais frequente, não tem origem genética nem pedagógica, e a do desenvolvimento se manifesta já nos anos escolares.' +
      f(BVS),
  },
  // ───────── Sinais ─────────
  {
    tipo: 'multipla',
    id: 'le-m2-x05',
    enunciado: 'A ABD lista sinais de dislexia que podem ser observados já na PRÉ-ESCOLA. Qual alternativa traz apenas sinais dessa lista?',
    alternativas: [
      'Troca de am por ão, junção de palavras e omissão de “m” e “n” em final de sílaba.',
      'Leitura silenciosa rápida, vocabulário amplo e interesse por livros impressos.',
      'Erros por representações múltiplas e generalização de regras ortográficas.',
      'Dificuldade em manusear dicionários e atraso na entrega de trabalhos escritos.',
      'Atraso no desenvolvimento da fala e da linguagem, dificuldade de aprender rimas e canções e falta de interesse por livros impressos.',
    ],
    correta: 4,
    explicacao:
      'Na pré-escola, a ABD cita dispersão, fraco desenvolvimento da atenção, atraso da fala e da linguagem, dificuldade com rimas e canções, fraca coordenação motora, dificuldade com quebra-cabeças e falta de interesse por livros impressos. Erros ortográficos (A e C) só aparecem depois que a criança escreve, e manusear dicionários (D) está na lista da idade escolar. B descreve o oposto do esperado.' +
      f(ABD),
  },
  {
    tipo: 'multipla',
    id: 'le-m2-x06',
    enunciado: 'Sobre sinais de dislexia na IDADE ESCOLAR descritos pela ABD, analise:',
    afirmativas: [
      'Pobre conhecimento de rima (sons iguais no final) e aliteração (sons iguais no início das palavras).',
      'Dificuldade em copiar de livros e da lousa.',
      'Confusão para nomear esquerda e direita.',
      'Facilidade acima da média para manusear mapas e dicionários.',
      'Vocabulário pobre, com sentenças curtas e imaturas ou longas e vagas.',
    ],
    pergunta: 'São sinais citados pela ABD:',
    alternativas: ['I, II, III e V', 'I, III e IV', 'II, IV e V', 'I e IV', 'Todas.'],
    correta: 0,
    explicacao:
      'A ABD cita, na idade escolar, pobre conhecimento de rima e aliteração, dificuldade de copiar da lousa e de livros, confusão entre esquerda e direita e vocabulário pobre com sentenças curtas/imaturas ou longas/vagas. A IV inverte o sinal: a lista fala em DIFICULDADE para manusear mapas, dicionários e listas.' +
      f(ABD),
  },
  {
    tipo: 'multipla',
    id: 'le-m2-x07',
    enunciado:
      'Uma professora do 1º ano percebe que um aluno não identifica que “bebê”, “barco” e “boca” começam com o mesmo som, tem dificuldade com rimas como “gato/pato” e usa muito “coisa” e “aquele negócio”. Segundo a IDA, a conduta mais adequada é:',
    alternativas: [
      'Concluir que se trata de dislexia, pois os sinais são suficientes para o diagnóstico.',
      'Aguardar o fim do ensino fundamental, já que esses sinais sempre desaparecem sozinhos.',
      'Considerar os sinais como alerta, lembrando que nem todos os alunos com essas dificuldades têm dislexia e que só uma avaliação formal confirma o diagnóstico.',
      'Aumentar a quantidade de exercícios repetitivos de fixação para eliminar as dificuldades.',
      'Encaminhar exclusivamente ao oftalmologista, pois a causa é visual.',
    ],
    correta: 2,
    explicacao:
      'A IDA lista essas dificuldades (aliteração, rimas, recuperação de palavras) entre os sinais no Ensino Fundamental, mas ressalta que nem todos os estudantes com elas têm dislexia e que a avaliação formal com testes padronizados é o único modo de confirmar. Também afirma que quanto antes a avaliação, mais cedo vem a intervenção, o que exclui esperar. A ABD diz que exercícios de fixação repetitivos não diminuem a dificuldade.' +
      f(IDA),
  },
  // ───────── Dificuldade x transtorno / DSM-5 ─────────
  {
    tipo: 'multipla',
    id: 'le-m2-x08',
    enunciado:
      'No DSM-5, o Critério A do Transtorno Específico da Aprendizagem exige que pelo menos um dos sintomas (ex.: leitura imprecisa ou lenta, dificuldade para ortografar) tenha persistido:',
    alternativas: [
      'Por pelo menos 1 mês, independentemente de intervenção.',
      'Por pelo menos 6 meses, apesar de intervenções dirigidas a essas dificuldades.',
      'Por pelo menos 2 anos, desde que a criança não tenha frequentado a escola.',
      'Desde o nascimento, com confirmação por exame de neuroimagem.',
      'Por pelo menos 12 meses, sem necessidade de intervenção prévia.',
    ],
    correta: 1,
    explicacao:
      'O Critério A do DSM-5 pede ao menos um dos seis sintomas persistindo por pelo menos seis meses, apesar de intervenções dirigidas a essas dificuldades. Esse requisito incorpora a lógica de resposta à intervenção: é ele que separa o transtorno de uma dificuldade passageira que melhora com ensino adequado. Neuroimagem não é critério.' +
      f(DSM),
  },
  {
    tipo: 'vf',
    id: 'le-m2-x09',
    enunciado: 'Sobre o Transtorno Específico da Aprendizagem no DSM-5, julgue:',
    itens: [
      {
        texto: 'O DSM-5 reuniu em uma única categoria os antigos Transtorno da Leitura, da Expressão Escrita e da Matemática do DSM-IV-TR.',
        verdadeiro: true,
      },
      { texto: 'No especificador “com prejuízo na leitura”, os subdomínios são precisão, fluência e compreensão da leitura.', verdadeiro: true },
      { texto: 'As dificuldades de aprendizagem iniciam-se tipicamente na vida adulta.', verdadeiro: false },
      {
        texto: 'Se outro diagnóstico puder explicar as dificuldades, ainda assim deve-se diagnosticar Transtorno Específico da Aprendizagem.',
        verdadeiro: false,
      },
      { texto: 'Dislexia é usada como termo alternativo para o padrão de dificuldades em reconhecimento de palavras, decodificação e ortografia.', verdadeiro: true },
    ],
    explicacao:
      'O DSM-5 uniu as três perturbações do DSM-IV-TR em uma só categoria com especificadores; no de leitura, os subdomínios são precisão, ritmo/fluência e compreensão, e “dislexia” é termo alternativo. As dificuldades iniciam-se durante os anos escolares, e o diagnóstico não deve ser feito quando outro diagnóstico explica as dificuldades.' +
      f(DSM_PT),
  },
  {
    tipo: 'multipla',
    id: 'le-m2-x10',
    enunciado:
      'Zorzi (2006) explica que todas as crianças cometem “erros” ortográficos durante a aprendizagem. Segundo o autor, o que pode indicar um TRANSTORNO, e não apenas o processo normal?',
    alternativas: [
      'Qualquer erro por representação múltipla depois do 1º ano.',
      'A presença de erros por apoio na oralidade na fase alfabética.',
      'A ocorrência de erros em adultos experientes.',
      'O fato de a criança ter chegado à hipótese alfabética.',
      'Diversidade e frequência de alterações mais intensas e duradouras, com permanência dos erros e dificuldade de superá-los.',
    ],
    correta: 4,
    explicacao:
      'Zorzi afirma que os erros fazem parte da aprendizagem e tendem a ficar específicos e ocasionais; o sinal de alerta é a trajetória com diversidade e frequência de alterações mais intensa e duradoura e erros que permanecem. Representações múltiplas e apoio na oralidade são as categorias mais comuns em todas as crianças, e o próprio autor diz que até adultos experientes erram representações múltiplas.' +
      f(ZORZI),
  },
  // ───────── Zorzi: classificação ─────────
  {
    tipo: 'multipla',
    id: 'le-m2-x11',
    enunciado:
      'Uma criança escreveu “carrossa”, “traviceiro”, “queicho” e “macarão”. Pela classificação de Zorzi, esses erros são:',
    alternativas: [
      'Apoio na oralidade',
      'Substituições por representações múltiplas',
      'Trocas surdas/sonoras',
      'Confusão entre letras parecidas',
      'Generalização',
    ],
    correta: 1,
    explicacao:
      'Zorzi usa exatamente esses exemplos para as substituições por representações múltiplas: o mesmo som pode ser escrito por letras diferentes (ss/ç, s/ss, x/ch, r/rr). Não há troca de sonoridade nem letra de traçado parecido, e a escrita não segue a pronúncia (apoio na oralidade). É a categoria mais frequente, perto de metade dos erros.' +
      f(ZORZI),
  },
  {
    tipo: 'multipla',
    id: 'le-m2-x12',
    enunciado: 'As grafias “soutou” (soltou), “inchugar” (enxugar) e “parqui” (parque) são classificadas por Zorzi como:',
    alternativas: [
      'Omissões',
      'Inversões',
      'Acréscimo de letras',
      'Apoio na oralidade',
      'Junção-separação indevida',
    ],
    correta: 3,
    explicacao:
      'Apoio na oralidade é a tendência de escrever as palavras como são pronunciadas, como uma transcrição fonética; Zorzi usa justamente “soutou”, “inchugar” e “parqui”. Nenhuma letra foi omitida, acrescentada ou trocada de posição, e não há problema de segmentação entre palavras.' +
      f(ZORZI),
  },
  {
    tipo: 'multipla',
    id: 'le-m2-x13',
    enunciado:
      'Ao aprender que “papel” termina com “l” embora se pronuncie /u/, a criança escreve “chapel” (chapéu). Pela classificação de Zorzi, trata-se de:',
    alternativas: [
      'Generalização',
      'Apoio na oralidade',
      'Confusão am x ão',
      'Representações múltiplas',
      'Acréscimo de letras',
    ],
    correta: 0,
    explicacao:
      'É o exemplo que Zorzi dá de generalização: um conhecimento aprendido numa situação é estendido a outra parecida em que não se aplica. Não é apoio na oralidade, porque a criança justamente se afasta da pronúncia; e a troca não tem relação com am/ão.' +
      f(ZORZI),
  },
  {
    tipo: 'multipla',
    id: 'le-m2-x14',
    enunciado:
      'Em “machugado” (machucado), “chornal” (jornal), “dende” (dente) e “vasia” (fazia), a alteração ortográfica envolve:',
    alternativas: [
      'Confusão entre letras de traçado parecido',
      'Inversão da posição das letras na sílaba',
      'Acréscimo de letras por regularização silábica',
      'Junção indevida de palavras',
      'Trocas entre letras que representam fonemas surdos e sonoros',
    ],
    correta: 4,
    explicacao:
      'Zorzi descreve a troca entre consoantes sonoras (com vibração das pregas vocais) e surdas (sem vibração), usando esses exemplos: k/g, j/ch, t/d, f/v. O autor ainda destaca que essas trocas, junto com os erros atípicos, aparecem mais nos distúrbios e podem indicar problema de aprendizagem. Não envolvem forma gráfica, posição de letra nem segmentação.' +
      f(ZORZI),
  },
  {
    tipo: 'multipla',
    id: 'le-m2-x15',
    enunciado: 'Relacione o exemplo à categoria de Zorzi e marque a alternativa correta:',
    afirmativas: [
      '“gostarão” por “gostaram”',
      '“derepente” por “de repente”',
      '“taqui” por “tanque”',
      '“carata” por “carta”',
      '“bicicheta” por “bicicleta”',
    ],
    pergunta: 'A sequência correta é:',
    alternativas: [
      'I generalização; II omissão; III junção; IV inversão; V surda/sonora',
      'I am x ão; II junção-separação; III omissão; IV acréscimo; V letras parecidas',
      'I apoio na oralidade; II omissão; III acréscimo; IV letras parecidas; V inversão',
      'I am x ão; II omissão; III junção-separação; IV inversão; V acréscimo',
      'I representações múltiplas; II junção-separação; III omissão; IV acréscimo; V inversão',
    ],
    correta: 1,
    explicacao:
      'Todos são exemplos do próprio Zorzi: am x ão (gostarão), junção-separação indevida (derepente), omissão de “n” em final de sílaba (taqui, o tipo mais comum de omissão), acréscimo (carata) e confusão entre letras parecidas ch/cl, sobretudo na letra cursiva (bicicheta). Inversão seria b/d ou troca de posição, como “braco” por “barco”.' +
      f(ZORZI),
  },
  {
    tipo: 'vf',
    id: 'le-m2-x16',
    enunciado: 'Sobre a classificação e frequência das alterações ortográficas segundo Zorzi (2006), julgue:',
    itens: [
      { texto: 'Representações múltiplas, apoio na oralidade e omissões são, nessa ordem, os erros mais frequentes.', verdadeiro: true },
      { texto: 'As inversões de letras são o erro mais frequente desde o início da alfabetização.', verdadeiro: false },
      { texto: 'A maior parte das omissões corresponde à ausência de “m” e “n” no final de sílabas.', verdadeiro: true },
      { texto: 'A confusão am x ão ocorre porque as duas terminações soam iguais, diferindo pela tonicidade.', verdadeiro: true },
      { texto: 'Erros ortográficos são sempre sinal de transtorno de aprendizagem.', verdadeiro: false },
    ],
    explicacao:
      'Zorzi aponta representações múltiplas, apoio na oralidade e omissões como os erros mais frequentes, com as omissões concentradas em “m” e “n” em final de sílaba. Inversões têm baixa ocorrência desde o início para a grande maioria das crianças. A confusão am/ão vem da pronúncia igual, marcada só pela tonicidade. E os erros fazem parte da aprendizagem normal.' +
      f(ZORZI),
  },
  {
    tipo: 'multipla',
    id: 'le-m2-x17',
    enunciado:
      'Para reduzir erros por representações múltiplas, Zorzi descreve habilidades e estratégias a desenvolver. Analise:',
    afirmativas: [
      'Compreender que uma mesma letra pode escrever sons diferentes e um mesmo som pode ser escrito por letras diferentes.',
      'Conhecer regras contextuais, como o “s” entre vogais com som de /z/ (camisa).',
      'Recorrer a uma palavra conhecida (cabeça) para decidir a escrita de uma desconhecida (descabeçado).',
      'Escrever exatamente como se fala, pois o português é um sistema fonético.',
      'Diferenciar o nome da letra dos sons que ela pode representar.',
    ],
    pergunta: 'São estratégias/habilidades descritas pelo autor:',
    alternativas: ['I, II e IV', 'II, III e IV', 'I e IV', 'I, II, III e V', 'III, IV e V'],
    correta: 3,
    explicacao:
      'Zorzi cita compreender as relações múltiplas letra-som, diferenciar nome e som da letra, conhecer regras contextuais e usar estratégias gramaticais (palavra conhecida para decidir a desconhecida), além da formação de memória visual. A IV está errada: o autor afirma que o sistema é alfabético, não fonético, e escrever como se fala é justamente a origem do erro por apoio na oralidade.' +
      f(ZORZI),
  },
  {
    tipo: 'multipla',
    id: 'le-m2-x18',
    enunciado:
      'Segundo Zorzi, a diminuição dos erros por APOIO NA ORALIDADE depende principalmente de:',
    alternativas: [
      'Treino motor do traçado das letras cursivas.',
      'Compreender que fala e escrita são sistemas diferentes e formar um léxico visual-ortográfico.',
      'Exercícios de espelhamento para evitar trocas b/d.',
      'Ditados de pseudopalavras para treinar a rota fonológica.',
      'Reduzir o contato da criança com textos escritos.',
    ],
    correta: 1,
    explicacao:
      'O autor diz que o decréscimo desses erros depende de entender que fala e escrita são diferentes e de desenvolver referenciais visuais-ortográficos, um léxico escrito em que a imagem visual da palavra se sobrepõe à imagem sonora. Treino motor e espelhamento atacam outros tipos de erro, e reduzir o contato com a escrita impediria a formação desse léxico.' +
      f(ZORZI),
  },
  {
    tipo: 'multipla',
    id: 'le-m2-x19',
    enunciado:
      'Para Zorzi, escrever sem omitir letras e segmentar corretamente as palavras depende, respectivamente, de:',
    alternativas: [
      'Memória visual das letras; coordenação motora fina',
      'Conhecimento de regras de acentuação; leitura silenciosa',
      'Identificar todos os fonemas da palavra (consciência fonológica avançada); detectar no fluxo da fala onde cada palavra começa e termina',
      'Diferenciar letras parecidas; tonicidade',
      'Generalização de regras; apoio na oralidade',
    ],
    correta: 2,
    explicacao:
      'Zorzi relaciona as omissões à capacidade de identificar todos os fonemas e relacionar cada um à sua letra (consciência fonológica avançada), e a junção/separação à noção de palavra: detectar na fala encadeada o início e o fim de cada palavra. As outras alternativas não tratam dessas duas habilidades, e apoio na oralidade é um tipo de erro, não uma habilidade.' +
      f(ZORZI),
  },
  // ───────── Consciência fonológica ─────────
  {
    tipo: 'multipla',
    id: 'le-m2-x20',
    enunciado: 'Sobre consciência fonológica, segundo estudos publicados na Revista CEFAC, analise:',
    afirmativas: [
      'A consciência silábica é adquirida antes da consciência fonêmica.',
      'Rima e segmentação estão entre as tarefas menos complexas da hierarquia.',
      'Rimas e consciência de sílabas podem se desenvolver sem conhecimento da escrita; a consciência fonêmica resulta, em parte, do contato com a escrita.',
      'A consciência fonêmica precisa estar completa antes de a criança ter qualquer contato com a escrita.',
    ],
    pergunta: 'É correto o que se afirma em:',
    alternativas: ['I e IV', 'II e IV', 'I, II e IV', 'IV apenas', 'I, II e III'],
    correta: 4,
    explicacao:
      'Os artigos da Rev. CEFAC indicam que a consciência fonológica segue uma hierarquia de complexidade: a silábica vem antes da fonêmica, e rima e segmentação estão entre as tarefas menos complexas. Rimas e sílabas podem se desenvolver sem escrita, mas a consciência fonêmica depende em parte do contato com ela, o que torna a IV falsa.' +
      f(CEFAC_NIVEIS) +
      f(CEFAC_DESEMP),
  },
  {
    tipo: 'multipla',
    id: 'le-m2-x21',
    enunciado:
      'Deuschle e Cechella (Rev. CEFAC) propõem um cronograma de intervenção em consciência fonológica para dislexia, organizado por ordem de complexidade. Qual é a PRIMEIRA etapa?',
    alternativas: [
      'Recombinação fonológica: omitir, inverter ou adicionar sílabas',
      'Comparação de sílabas por posição e natureza',
      'Segmentação fonêmica de palavras longas',
      'Estrutura silábica das palavras: síntese e análise silábicas',
      'Leitura de textos com pseudopalavras',
    ],
    correta: 3,
    explicacao:
      'O cronograma começa pela estrutura silábica (síntese e análise silábicas) e segue com identificação de sílabas, comparação de sílabas e, por último, recombinação fonológica (omitir, inverter, adicionar). Os autores apontam o déficit em consciência fonológica como um dos principais indicadores no diagnóstico de dislexia.' +
      f(CEFAC_CF),
  },
  // ───────── Dupla rota e subtipos ─────────
  {
    tipo: 'multipla',
    id: 'le-m2-x22',
    enunciado:
      'No modelo de dupla rota de leitura (Coltheart), qual estímulo só pode ser lido corretamente pela ROTA FONOLÓGICA (sublexical)?',
    alternativas: [
      'Palavras irregulares, como “exame” e “táxi”',
      'Palavras frequentes já memorizadas',
      'O próprio nome da criança',
      'Siglas conhecidas',
      'Pseudopalavras, como “tafeco”',
    ],
    correta: 4,
    explicacao:
      'A rota fonológica converte grafemas em fonemas e permite ler palavras desconhecidas, regulares e pseudopalavras; como a pseudopalavra não existe no léxico mental, ela só pode ser lida por essa rota. Palavras irregulares exigem a rota lexical, e palavras familiares/memorizadas são reconhecidas diretamente pelo léxico.' +
      f(PEPSIC) +
      f(CODAS),
  },
  {
    tipo: 'multipla',
    id: 'le-m2-x23',
    enunciado:
      'Na avaliação, um escolar lê bem palavras regulares e pseudopalavras, mas erra palavras irregulares, tendendo a “regularizá-las” (lê como se seguissem a regra letra-som). O perfil é compatível com dislexia:',
    alternativas: ['Fonológica', 'De superfície', 'Mista', 'Profunda', 'Adquirida por AVC, obrigatoriamente'],
    correta: 1,
    explicacao:
      'A revisão da Psico-USF associa a dislexia de superfície (diseidética) a desempenho abaixo do esperado em palavras irregulares, melhor leitura de regulares e tendência à regularização: a rota lexical falha e a fonológica está preservada. Na fonológica o prejuízo principal é em pseudopalavras; na mista as duas rotas estão comprometidas. Nada no caso indica lesão adquirida.' +
      f(SUBTIPOS),
  },
  {
    tipo: 'vf',
    id: 'le-m2-x24',
    enunciado: 'Sobre os subtipos de dislexia do desenvolvimento descritos no português brasileiro, julgue:',
    itens: [
      { texto: 'Na dislexia fonológica, a principal marca é a dificuldade na leitura de pseudopalavras e palavras não familiares.', verdadeiro: true },
      { texto: 'Na dislexia fonológica, a rota fonológica está preservada e a lexical está prejudicada.', verdadeiro: false },
      { texto: 'A dislexia mista combina prejuízos das rotas fonológica e lexical.', verdadeiro: true },
      { texto: 'Dislexia fonológica também é chamada disfonética, e a de superfície, diseidética.', verdadeiro: true },
      { texto: 'Os estudos brasileiros revisados usaram sobretudo tarefas de leitura de palavras e pseudopalavras isoladas.', verdadeiro: true },
    ],
    explicacao:
      'Segundo a revisão, a dislexia fonológica (disfonética) envolve falha na rota fonológica, com rota lexical preservada, e aparece como dificuldade com pseudopalavras e palavras não familiares; a de superfície (diseidética) afeta a rota lexical; a mista compromete as duas. Todos os estudos que relataram instrumentos usaram leitura de palavras e pseudopalavras isoladas. O segundo item inverte as rotas.' +
      f(SUBTIPOS),
  },
  {
    tipo: 'multipla',
    id: 'le-m2-x25',
    enunciado:
      'Por que a leitura de PSEUDOPALAVRAS é tão usada na avaliação de suspeita de dislexia do desenvolvimento?',
    alternativas: [
      'Porque obriga o uso da rota fonológica (conversão grafema-fonema), já que não há representação no léxico mental, revelando falhas de decodificação.',
      'Porque avalia o vocabulário e o conhecimento de mundo da criança.',
      'Porque mede apenas a compreensão de texto.',
      'Porque pode ser resolvida pela memória visual de palavras já vistas.',
      'Porque substitui a avaliação multidisciplinar e fecha o diagnóstico sozinha.',
    ],
    correta: 0,
    explicacao:
      'Pseudopalavras não existem no léxico, então só podem ser lidas pela rota fonológica; a dificuldade nelas é a principal marca da dislexia fonológica. Elas não medem vocabulário, compreensão ou memória visual. E a própria revisão alerta que pior desempenho em pseudopalavras, sozinho, não basta: é preciso analisar os tipos de erro dentro de avaliação mais ampla.' +
      f(PEPSIC) +
      f(SUBTIPOS),
  },
  {
    tipo: 'multipla',
    id: 'le-m2-x26',
    enunciado: 'Sobre o PROLEC (Provas de Avaliação dos Processos de Leitura), adaptado ao Brasil por Capellini, Oliveira e Cuetos, analise:',
    afirmativas: [
      'Baseia-se no modelo de dupla rota de leitura.',
      'Organiza as provas em identificação de letras, processos léxicos, sintáticos e semânticos.',
      'Destina-se a escolares do 2º ao 5º ano do ensino fundamental e é aplicado individualmente.',
      'É um teste de inteligência que dispensa a análise dos processos de leitura.',
    ],
    pergunta: 'É correto o que se afirma em:',
    alternativas: ['I e IV', 'I, II e III', 'II e IV', 'III e IV', 'I, II, III e IV'],
    correta: 1,
    explicacao:
      'O PROLEC avalia os processos e subprocessos da leitura para identificar crianças com dificuldade e os processos responsáveis; é baseado na dupla rota, organizado em identificação de letras, processos léxicos, sintáticos e semânticos, para o 2º ao 5º ano, com aplicação individual. Não é teste de inteligência.' +
      f(PROLEC),
  },
  // ───────── Professor / equipe / comorbidade / disortografia ─────────
  {
    tipo: 'multipla',
    id: 'le-m2-x27',
    enunciado: 'Entre as condutas recomendadas pela ABD ao professor de um aluno disléxico, analise:',
    afirmativas: [
      'Trazer o aluno para perto da lousa e da mesa do professor.',
      'Pedir que leia em voz alta na frente da turma, para treinar a fluência.',
      'Evitar submetê-lo a pressões de tempo ou competição com os colegas.',
      'Ler a prova em voz alta e verificar se as perguntas foram compreendidas.',
      'Aplicar exercícios de fixação repetitivos e numerosos para diminuir a dificuldade.',
    ],
    pergunta: 'São condutas recomendadas:',
    alternativas: ['I, II e III', 'II, IV e V', 'I e V', 'I, III e IV', 'II, III e V'],
    correta: 3,
    explicacao:
      'A ABD recomenda aproximar o aluno da lousa e do professor, evitar pressão de tempo e competição e ler a prova em voz alta conferindo o entendimento. Também orienta a não pedir que ele faça coisas que o deixem “na berlinda”, principalmente ler em voz alta (II), e diz que exercícios de fixação repetitivos e numerosos não diminuem a dificuldade (V).' +
      f(ABD_SALA),
  },
  {
    tipo: 'vf',
    id: 'le-m2-x28',
    enunciado: 'Sobre diagnóstico, equipe e comorbidades na dislexia, julgue:',
    itens: [
      { texto: 'A ABD não recomenda que apenas um profissional feche o diagnóstico de dislexia.', verdadeiro: true },
      {
        texto: 'A equipe multi e interdisciplinar pode envolver neuropsicólogo, fonoaudiólogo, psicopedagogo, neurologista e neuropediatra.',
        verdadeiro: true,
      },
      { texto: 'Segundo a IDA, até 30% dos diagnosticados com transtorno de aprendizagem ou de leitura também recebem diagnóstico de TDAH.', verdadeiro: true },
      { texto: 'Quando dislexia e TDAH coexistem, o TDAH é a causa da dislexia.', verdadeiro: false },
      { texto: 'A avaliação dispensa exames que descartem problemas visuais ou auditivos.', verdadeiro: false },
    ],
    explicacao:
      'A ABD não recomenda diagnóstico fechado por um só profissional, e a BVS/MS descreve a equipe multi e interdisciplinar e a necessidade de descartar problemas visuais e auditivos. A IDA cita até 30% de coocorrência com TDAH, mas ressalta que, embora possam coexistir, um transtorno não é a causa do outro.' +
      f(ABD) +
      f(BVS) +
      f(IDA),
  },
  {
    tipo: 'multipla',
    id: 'le-m2-x29',
    enunciado:
      'Num estudo brasileiro com 270 crianças e adolescentes com TDAH atendidos em hospital terciário, 46,7% tinham pelo menos um transtorno de aprendizagem. Qual foi o tipo mais frequente?',
    alternativas: [
      'Transtorno da Leitura',
      'Transtorno da Matemática',
      'Transtorno da Expressão Escrita',
      'Nenhum: todos os casos eram de dislexia adquirida',
      'Transtorno do Desenvolvimento da Coordenação',
    ],
    correta: 2,
    explicacao:
      'O estudo da Psicologia: Reflexão e Crítica encontrou o Transtorno da Expressão Escrita como o mais comum (32,6%), seguido da Matemática (21,1%) e da Leitura (15,6%). Os autores citam que a literatura relata de 15% a 50% de TA em crianças com TDAH e lembram que a amostra clínica pode superestimar a comorbidade.' +
      f(DSM),
  },
  {
    tipo: 'multipla',
    id: 'le-m2-x30',
    enunciado: 'Qual alternativa diferencia corretamente DISORTOGRAFIA de DISGRAFIA?',
    alternativas: [
      'Disortografia afeta o traçado das letras; disgrafia afeta a ortografia.',
      'São sinônimos e descrevem o mesmo quadro.',
      'Disgrafia é diagnosticada apenas pela letra “feia” da criança.',
      'Disortografia nunca coexiste com disgrafia.',
      'Disortografia compromete o conteúdo ortográfico (trocas, omissões, junções), sem afetar o traçado; disgrafia compromete a forma motora da escrita (traçado, legibilidade).',
    ],
    correta: 4,
    explicacao:
      'A disortografia afeta a codificação ortográfica (trocas, omissões, junção/separação, inversões) sem comprometer o traçado; a disgrafia é dificuldade no aspecto motor e na organização gráfica da escrita, com letra pouco legível e traçado irregular. A fonte destaca que letra pouco bonita, sozinha, não define disgrafia e que os quadros podem coexistir.' +
      f(DISGRAFIA),
  },
]
