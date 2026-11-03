import type { Flashcard } from '@/core/types'

/* Flashcards gerados a partir do resumo da Profª Elisa (linguagem-escrita-m2-resumo.ts). */
const A = 'Avaliação'
const Z = 'Zorzi'
const D = 'Dislexia'
const O = 'Disortografia e cia'

const cards: [string, string, string][] = [
  // ───── Avaliação (15)
  [A, 'Quais as etapas da avaliação da linguagem escrita?', 'Entrevista/anamnese · provas e testes · análise dos dados · hipóteses diagnósticas fonoaudiológicas · encaminhamento/devolutiva/relatório.'],
  [A, 'O que a avaliação fonoaudiológica deve englobar (Lima, Salgado e Ciasca, 2009)?', 'Linguagem oral · linguagem escrita · avaliação audiológica completa.'],
  [A, 'O que a anamnese inclui (Weiss, 2000)?', 'Dados gerais e queixa · primeiras aprendizagens e evolução geral · história clínica · família nuclear e ampliada · história escolar (alfabetização, trocas de escola, relações sociais).'],
  [A, 'Quais os três componentes da escrita (psicologia cognitiva/neuropsicologia)?', 'Ortografia · grafia · produção textual.'],
  [A, 'Quais as três estratégias da ortografia?', 'Logográfica: “desenha” a palavra (primeira e última letra) · Alfabética: correspondência grafema-fonema, escreve palavras novas · Ortográfica: palavra como unidade, acesso ao léxico mental ortográfico.'],
  [A, 'O que envolve a grafia?', 'Elementos motores: coordenação motora fina, planejamento, fluência, praxia fina (preensão do lápis), orientação das letras, firmeza, velocidade, tamanho · lateralização · estruturas espacial e temporal.'],
  [A, 'Quais os três processos cognitivos da produção textual?', 'Planejamento (ideias prévias) · construção de frases (tradução na memória de trabalho) · revisão. Influenciada pela linguagem oral e pelas funções executivas.'],
  [A, 'O que o ditado de pseudopalavras avalia?', 'Relação fonema-grafema · concentração · discriminação auditiva.'],
  [A, 'O que o ditado de frases avalia, além do ditado de palavras?', 'Pontuação · estrutura da frase · parágrafo · letras maiúsculas.'],
  [A, 'O que a cópia avalia?', 'Concentração · memória lexical · ortografia · pontuação · coordenação motora fina e visomotora.'],
  [A, 'Leitura de palavras x leitura de pseudopalavras: que rota cada uma avalia?', 'Palavras (com significado) → rota lexical · Pseudopalavras (pronunciáveis, sem significado) → rota fonológica.'],
  [A, 'Critérios de análise ortográfica (Ciboto e Cárnio, 2006)?', 'Acréscimo · omissão · troca na ordem das letras · formato da letra · trocas auditivas e visuais · transcrição da fala · junção/segmentação · maiúsculas/minúsculas · acentuação · pontuação.'],
  [A, 'Testes mais usados (Maia et al., 2021): qual é NÃO padronizado?', 'Prova ABC (ortografia, grafia e produção textual). TLE, EAVE, TAE e TDE são padronizados.'],
  [A, 'Quais testes avaliam ortografia, grafia E produção textual?', 'Prova ABC (não padronizada) e TAE (padronizado). TLE: ortografia e grafia · EAVE e TDE: só ortografia.'],
  [A, 'Quais os 7 pontos-chave do relatório fonoaudiológico?', 'Identificação · comportamento e sociabilização · linguagem oral · linguagem escrita · conclusão com hipóteses · conduta e encaminhamentos · orientação à família e à escola.'],

  // ───── Zorzi (25)
  [Z, 'Quais alterações a professora indicou como foco da prova?', 'Segmentação (junção/separação) e representações múltiplas (um som representado por várias letras: s, z, ch, j).'],
  [Z, 'Como Zorzi vê os erros ortográficos?', 'Fazem parte da aprendizagem: são hipóteses da criança até dominar o sistema. Analisa-se o erro para entender por que a criança erra.'],
  [Z, 'Quem deve ser encaminhado para tratamento, segundo Zorzi?', 'Quem não responde a uma boa proposta pedagógica por dificuldades próprias, e não por falha da proposta.'],
  [Z, 'Como é feita a coleta para análise dos erros?', 'Ditado de palavras e ditado de frases.'],
  [Z, 'Correspondência estável x instável?', 'Estável: um som, uma letra (/p/ sempre “p”) · Instável: um som por várias letras (/s/ = s, ss, sc, sç, c, ç, x, xc, z) ou uma letra com vários sons (c = /s/ ou /k/).'],
  [Z, '“carrossa, visinho, xurasco” → qual alteração?', 'Representações múltiplas (correspondências instáveis: ss/ç, s/z, x/ch).'],
  [Z, '“traveceiro, queicho, girasou, açaltou, enchugar, sosegada, fasia” → qual alteração?', 'Representações múltiplas.'],
  [Z, 'Representações múltiplas: erro não consciente x situação de conflito?', 'Não consciente (escrita ingênua): escreve certo de que está certo · Conflito: percebe alternativas e testa formas, consulta dicionário, pergunta ou usa regra gramatical (derivação).'],
  [Z, 'Exemplo “fucícola”: o que ensina?', 'Das 9 formas do /s/, exclui-se pelo contexto as que não cabem; restam fussícola, fucícola, fuscícola, e só o dicionário resolve (fucícola = habita entre as algas).'],
  [Z, '“derepente, em bora, maismagra, quees tava” → qual alteração?', 'Junção/separação indevida de palavras (segmentação).'],
  [Z, 'Qual a causa da junção/separação indevida?', 'Influência da oralidade: a fala é fluxo sonoro contínuo. É difícil entender que “a”, “e”, “o”, “de” também são palavras.'],
  [Z, 'O que trabalhar na junção/separação (segmentação)?', 'Identificar frases e ponto final · identificar e contar palavras · número de sílabas · elaborar e completar frases · escrever frases juntas de propósito para segmentar · ordenar palavras desordenadas.'],
  [Z, '“gostarão (gostaram), ficarão, falarão” → qual alteração?', 'Confusão am x ão: soam iguais, a diferença está na tonicidade.'],
  [Z, 'O que trabalhar na confusão am x ão?', 'O que é palavra · divisão silábica · sílaba tônica (oxítonas, paroxítonas, proparoxítonas) · variar a tônica · agrupar pela tônica · ler palavras com am e ão.'],
  [Z, '“machugado, chornal, dende, querra, voi (foi)” → qual alteração?', 'Trocas surdas/sonoras (p-b, t-d, k-g, s-z, f-v, ch-j).'],
  [Z, 'Trocas surdas/sonoras: o problema é discriminação auditiva?', 'Não: a maioria vai bem em pares mínimos. O problema é consciência fonológica: imagem acústico-articulatória pouco definida ou valor sonoro das letras mal conhecido (Zorzi, 1998).'],
  [Z, 'O que trabalhar nas trocas surdas/sonoras?', 'Diferenciar surdo/sonoro na própria fala · acentuar o traço de sonoridade (auditivo e tátil-cinestésico) · correspondência som-letra · controle consciente (ler o que escreveu) · estabilizar as palavras.'],
  [Z, '“taque (tanque), fizes (felizes), cobinar, mã” → qual alteração?', 'Omissões (maioria: m e n em final de sílaba).'],
  [Z, 'Causas e trabalho nas omissões?', 'Causas: falta de segmentação fonêmica, insegurança na letra, nome x som (tlefone), sílabas fora do CV · Trabalho: segmentar, letra-som, som x nome da letra, estruturas CCV, CVC, CCVC, CCVCC.'],
  [Z, '“inxugar, parqui, muinto, minina, durmi, fejão” → qual alteração?', 'Apoio na oralidade (escreve como fala, transcrição fonética). Mais comum nas séries iniciais, diminui gradualmente.'],
  [Z, 'O que trabalhar no apoio na oralidade?', 'Mostrar que falar e escrever são distintos · nomear figuras · gravar e analisar · comparar fala e escrita · soletrar fonema a fonema e letra a letra · identificar risco e perguntar “como se escreve?”.'],
  [Z, '“setava (estava), perto (preto), tradalhar” → qual alteração? E o trabalho?', 'Inversões (no eixo: p/q, d/b; ou na ordem). Trabalho: posição da letra define o som; ordem escrita segue a ordem dos fonemas (segmentação sonora).'],
  [Z, '“vece (vez), carata, prerto” → qual alteração?', 'Acréscimos: falha letra-som ou pouca autocorreção/atenção. Trabalho semelhante ao das omissões.'],
  [Z, '“chapel” (chapéu), “aneu” → qual alteração?', 'Generalização (hipercorreção): regra estendida onde não se aplica. Sinal de aprendizagem em curso; orientar onde a regra vale (diferenciação e confirmação).'],
  [Z, 'Quais alterações são pouco frequentes, segundo o resumo?', 'Inversões (pouco frequentes) · acréscimos (baixa frequência) · outros erros (isolados, ex.: sangue → jange). Apoio na oralidade é mais comum nas séries iniciais.'],

  // ───── Dislexia (17)
  [D, 'Conceito clássico de dislexia (Lyon, Shaywitz e Shaywitz, 2003)?', 'Transtorno específico de aprendizagem da leitura, neurobiológico: dificuldade em decodificação, soletração, fluência e interpretação, por déficit fonológico, inesperado frente a outras habilidades e à instrução.'],
  [D, 'O que a dislexia NÃO é?', 'Não resulta de má alfabetização, desatenção, desmotivação, condição socioeconômica ou baixa inteligência. Audição, visão e inteligência normais.'],
  [D, 'Novo conceito da IDA (2025): pontos-chave?', 'Dificuldade na leitura de palavras e/ou escrita (precisão, velocidade ou ambos) · varia conforme a ortografia da língua · continuum de gravidade · persiste com ensino eficaz · causas genéticas, neurobiológicas e ambientais.'],
  [D, 'IDA 2025: processamento fonológico é universal na dislexia?', 'Não: dificuldades fonológicas e morfológicas são comuns, mas não universais. Atraso precoce na linguagem oral frequentemente antecipa problemas de alfabetização.'],
  [D, 'Neuroimagem na dislexia?', 'Hipoativação do córtex temporoparietal esquerdo (Wernicke), com aumento compensatório em Broca bilateralmente. Já existe antes da alfabetização.'],
  [D, 'Código da dislexia na CID-10 e no DSM-5?', 'CID-10 (OMS, 2008): F81.0, transtorno específico de leitura · DSM-5 (APA, 2014): 315.00, transtorno específico de aprendizagem com prejuízo na leitura.'],
  [D, 'DSM-5 critério A?', 'Dificuldade nas habilidades acadêmicas, pelo menos um sintoma por 6 meses ou mais apesar de intervenções: precisão na leitura, velocidade/fluência, compreensão.'],
  [D, 'DSM-5 critério B?', 'Habilidades substancial e qualitativamente abaixo do esperado para a idade, com prejuízo acadêmico/profissional, confirmado por medidas padronizadas individuais e avaliação abrangente.'],
  [D, 'DSM-5 critério C?', 'Começa nos anos escolares, mas pode só aparecer quando as exigências superam a capacidade do indivíduo.'],
  [D, 'DSM-5 critério D?', 'Não explicado por deficiência intelectual, acuidade visual/auditiva não corrigida, outros transtornos mentais/neurológicos, adversidade psicossocial, falta de proficiência na língua ou instrução inadequada.'],
  [D, 'O diagnóstico de dislexia exige teste de QI?', 'Não (segundo a professora). O QI é usado quando necessário para excluir deficiência intelectual (critério D).'],
  [D, 'Gravidade no DSM-5 x CID-10?', 'DSM-5: leve, moderada ou grave (domínios alterados e resposta à intervenção, percepção clínica) · CID-10 não prevê subtipos nem graus.'],
  [D, 'Equipe do diagnóstico (ABENEPI)?', 'Neuropediatra/psiquiatra infantil (diferencial) · neuropsicólogo (cognição, descartar DI) · fonoaudiólogo (consciência fonológica, rotas, escrita, oral, audição) · psicopedagogo (histórico escolar, método). Diagnóstico clínico, sem exame.'],
  [D, 'Subtipos de Boder (1973)?', 'Fonológica/disfonética: rota fonológica falha, lexical preservada, erra pseudopalavras, ~67% · Visual/diseidética: falha no reconhecimento global, inversões, espelhamento, soletra cada letra · Mista: soma das duas.'],
  [D, 'Método fônico x multissensorial?', 'Fônico: crianças mais novas, início da alfabetização (metafonologia, grafo-fonêmica) · Multissensorial: mais velhas, com fracasso escolar; soletração oral simultânea (vê, repete, escreve nomeando letras, relê).'],
  [D, 'Na intervenção, por quais fonemas começa a associação fonema-grafema?', 'Pelos de representação única (p, b, m, t, d, n, l, f, v), depois os de várias representações (/k/, /g/, /R/, /s/, /z/, /ʃ/, /ʒ/).'],
  [D, 'Amparo legal: Lei 14.254/2021 e LDB?', '14.254/2021: acompanhamento integral a dislexia, TDAH e outros transtornos (identificação precoce, diagnóstico, apoio educacional e terapêutico, formação de professores) · LDB 9.394/96: recuperação, avaliação contínua, qualitativo sobre quantitativo.'],

  // ───── Disortografia e cia (3)
  [O, 'Disortografia?', 'Dificuldade persistente na escrita correta das palavras, com erros dos tipos de Zorzi. No DSM-5: prejuízo na expressão escrita. (Termo fora dos slides; conferir com a professora.)'],
  [O, 'Disgrafia?', 'Dificuldade na grafia (componente motor): letra ilegível ou lenta, preensão inadequada, tamanho e espaçamento irregulares; ligada à praxia fina e coordenação visomotora.'],
  [O, 'Discalculia?', 'Dificuldade específica em matemática (senso numérico, fatos aritméticos, cálculo, raciocínio). É o “prejuízo na matemática” do DSM-5.'],
  [Z, 'Ordem de frequência dos erros ortográficos (Zorzi, 1998): quais os 4 primeiros?', 'Representações múltiplas (47,5%) · Apoio na oralidade (16,8%) · Omissões (9,6%) · Junção/separação (7,8%) · A mais rara: inversões (0,6%)'],
]

export const flashcards: Flashcard[] = cards.map(([tema, frente, verso], i) => ({
  id: `le-m2-f${String(i + 1).padStart(2, '0')}`,
  tema,
  frente,
  verso,
}))
