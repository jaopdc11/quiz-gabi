import type { Questao } from '@/core/types'

/*
 * Prova real transcrita das fotos: UNIVALI · Fonoaudiologia 6º período ·
 * Linguagem Escrita · Verificação da Aprendizagem M2 · 2023 (nota 10).
 * Gabarito = a correção da professora na própria prova.
 */
export const prova: Questao[] = [
  {
    tipo: 'multipla',
    id: 'le-m2-p01',
    enunciado:
      'Sobre a Dislexia do Desenvolvimento – DD, leia as sentenças abaixo e responda ao que segue:',
    afirmativas: [
      'A dislexia pode ser o resultado de má alfabetização, desatenção, desmotivação, condição socioeconômica ou baixa inteligência.',
      'A dislexia pode ser mais evidenciada na raça branca e nos asiáticos.',
      'Para as crianças com dislexias, a leitura se torna um grande esforço, pois toda palavra que lê aparenta ser nova e desconhecida.',
      'O problema é externo à criança e pode ter sua origem em fatores socioeconômicos, familiares e, principalmente, pedagógicos.',
      'A criança disléxica geralmente apresenta o rendimento escolar abaixo do esperado para a idade cronológica, apesar do potencial intelectual e escolaridade adequada para a idade.',
      'É um transtorno específico de aprendizagem da leitura de origem neurobiológica, caracterizado pela dificuldade na habilidade de decodificação e soletração, fluência e interpretação.',
    ],
    pergunta: 'É correto o que se afirma em:',
    alternativas: [
      'I, II, III, IV e VI',
      'I, III e V',
      'III, V e VI',
      'II, IV e VI',
      'Todas as alternativas são corretas.',
    ],
    correta: 2,
    explicacao:
      'A dislexia é de origem neurobiológica (VI), a leitura vira esforço porque cada palavra parece nova (III) e o rendimento fica abaixo do esperado apesar de inteligência e escolaridade adequadas (V). I e IV estão erradas: dislexia NÃO é causada por má alfabetização, desmotivação, nível socioeconômico ou fatores pedagógicos — isso descreve dificuldade de aprendizagem. II está errada: não há relação com raça.',
  },
  {
    tipo: 'multipla',
    id: 'le-m2-p02',
    enunciado:
      'Podemos encontrar alguns sinais de dislexia no início do Ensino Fundamental, período da alfabetização. Segue abaixo alguns destes sinais:',
    afirmativas: [
      'Dificuldades em discriminar fonemas de sons semelhantes: t/d; k/g; p/b.',
      'Dificuldades na diferenciação de letras com orientação espacial: d/b; d/p; n/u; m/u; pequenas diferenças gráficas: e/a; j/i; n/m; u/v.',
      'Dificuldade em gravar o nome da professora e dos colegas, mesmo em atividades que a professora pede para se apresentarem oralmente.',
      'Dificuldades na orientação temporal (ontem – hoje – amanhã, dias da semana, meses do ano) e de orientação espacial (lateralidade difusa: confunde a direita e esquerda, embaixo, em cima).',
      'Dificuldade na compreensão de histórias lidas pela professora. A criança não consegue responder perguntas orais sobre a história.',
    ],
    pergunta: 'É correto o que se afirma em:',
    alternativas: [
      'I, II e III',
      'I, II, III e V',
      'I e II',
      'I, II e IV',
      'Todas as alternativas são verdadeiras.',
    ],
    correta: 3,
    explicacao:
      'São sinais de dislexia: discriminação de fonemas parecidos (I), confusão de letras espelhadas ou graficamente parecidas (II) e dificuldades de orientação temporal e espacial (IV). O item V está errado porque o disléxico costuma COMPREENDER bem quando OUVE a história — o problema é decodificar, não compreender. Pela correção da prova, o item III também não entra.',
  },
  {
    tipo: 'multipla',
    id: 'le-m2-p03',
    enunciado:
      'Catarina, com 9 anos de idade, está no 4º ano do ensino fundamental, de uma escola pública. Segundo a professora, tem muitos erros na escrita. Dessa forma, foi solicitado à mãe que consultasse um fonoaudiólogo para avaliação e conduta, pois a professora acredita que Catarina seja disléxica. O sonho da menina é ser confeiteira, e assiste na TV aos programas da série "os confeiteiros". Na escola, mostra-se sem interesse para fazer as atividades propostas e sempre diz que não quer ler, pois sua leitura é muito lenta. O pai de Catarina sempre apresentou dificuldades escolares, por isso parou de estudar no 5º ano do EF e atualmente trabalha como vendedor numa loja de pneus. A mãe refere que o grande desafio é nas tarefas escolares, pois a filha apresenta dificuldade para ler e compreender o que deve fazer. Assim a mãe sempre tem que auxiliar nas tarefas, lendo as questões para que a filha compreenda o que está sendo solicitado.\n\nSegue um trecho da escrita da criança:\n\n"Eraumafes um castelo muintovelio e um tia treissmmininuspopres que tinhão pasado por la. Comesarão a reeformar o castelo e a notisia se espahol e os mininoscreseram e final mente o castello ficólpornto os nimenos foram em trando e ladentrô tinha sincocuartos."',
    afirmativas: [
      'Catarina apresenta uma Dificuldade de Aprendizagem, a qual será superada no decorrer do processo escolar, pois a menina conseguiu se alfabetizar, e não há indícios de um Transtorno Específico de Aprendizagem.',
      'Tem sinais de Transtorno Específico de Aprendizagem, pois alguns indícios podem ser evidenciados: o pai apresenta dificuldades na aprendizagem e a menina consegue ter compreensão do texto quando leem para ela.',
      'Há sinais de um Transtorno Específico de Aprendizagem, pois as alterações ortográficas encontradas podem caracterizar um Transtorno Específico de Aprendizagem.',
      'Pela história clínica é possível verificar que Catarina apresenta Transtorno Específico de Aprendizagem com prejuízo na matemática.',
      'A partir das dificuldades na leitura e nos erros ortográficos apresentados pela criança, é possível classificar as Alterações Específicas de Aprendizagem com prejuízo na leitura, assim como com prejuízo na escrita.',
    ],
    pergunta: 'Diante da história e da escrita de Catarina, é correto o que se afirma em:',
    alternativas: [
      'I, II e III',
      'II, III e V',
      'I e II',
      'I, II e IV',
      'Todas as alternativas são verdadeiras.',
    ],
    correta: 1,
    explicacao:
      'Há sinais de Transtorno Específico de Aprendizagem: histórico familiar (pai com dificuldade escolar) e compreensão preservada quando leem para ela (II); muitas alterações ortográficas (III); prejuízo na leitura e na escrita (V). I está errada porque os indícios apontam para transtorno, não para dificuldade passageira. IV está errada porque nada no caso fala de matemática.',
  },
  {
    tipo: 'multipla',
    id: 'le-m2-p04',
    enunciado:
      'Observe as alterações ortográficas encontradas pela professora de João em sua escrita: baco (banco); encima (em cima); dendista (dentista); proficional (profissional); miliu (milho); danana (banana); chegão (chegam).',
    pergunta: 'O item que corresponde, respectivamente, à análise das alterações encontradas é:',
    alternativas: [
      'omissão de letras; junção indevida de palavras; apoio na oralidade; inversão de letras; representações múltiplas; troca surdo/sonoro; confusão "am" x "ão"',
      'omissão de letras; junção indevida de palavras; apoio na oralidade; representações múltiplas; inversão de letras; troca surdo/sonoro; confusão "am" x "ão"',
      'omissão de letras; junção indevida de palavras; troca surdo/sonoro; representações múltiplas; apoio na oralidade; inversão de letra; confusão "am" x "ão"',
      'apoio na oralidade; junção indevida de palavras; troca surdo/sonoro; apoio na oralidade; representações múltiplas; inversão de letras; confusão "am" x "ão"',
      'apoio na oralidade; inversão; troca surdo/sonoro; representações múltiplas; junção indevida de palavras; troca surdo/sonoro; confusão "am" x "ão"',
    ],
    correta: 2,
    explicacao:
      'baco → omissão (falta o N); encima → junção indevida; dendista → troca surdo/sonoro (t→d); proficional → representações múltiplas (o som /s/ tem várias grafias: ss, c, ç…); miliu → apoio na oralidade (escreve como fala); danana → inversão/troca de letra (b→d, letra espelhada); chegão → confusão am x ão.',
  },
  {
    tipo: 'multipla',
    id: 'le-m2-p05',
    enunciado:
      'As dislexias podem ser Adquiridas ou do Desenvolvimento. Com relação às Dislexias Adquiridas é correto o que se afirma em:',
    alternativas: [
      'Nas Dislexias Adquiridas, há uma perda da habilidade de leitura, devido a uma lesão cerebral específica que acontece após o domínio da leitura pelo indivíduo.',
      'Nas Dislexias Adquiridas, há uma perda da habilidade de leitura, devido a uma lesão cerebral específica que acontece antes do domínio da leitura pelo indivíduo.',
      'Não há uma lesão cerebral evidente e a dificuldade já surge durante a aquisição da leitura pela criança.',
      'Não há diferença entre a Dislexia Adquirida e a Dislexia do Desenvolvimento, pois ambas acontecem na infância.',
    ],
    correta: 0,
    explicacao:
      'Adquirida = a pessoa JÁ sabia ler e perdeu a habilidade por uma lesão cerebral (AVC, trauma…). A alternativa C descreve a Dislexia do Desenvolvimento: sem lesão evidente, a dificuldade aparece na aquisição da leitura.',
  },
  {
    tipo: 'multipla',
    id: 'le-m2-p06',
    enunciado: 'Sobre DISLEXIA é INCORRETO afirmar:',
    alternativas: [
      'Aquisição tardia da linguagem oral bem como gramática, vocabulário e narrativa abaixo do esperado na idade de 5 anos podem ser sinais indicativos quando há suspeita de dislexia.',
      'Presença de histórico familiar, como pais e/ou irmãos com dificuldades na aprendizagem da leitura e escrita, pode ser indicativo de quadro de dislexia.',
      'Crianças que passaram por processos tumultuados no período de alfabetização, como trocas de professor, professor sem experiência em alfabetização e mudanças de escola, bem como dificuldades na aquisição de linguagem, são indicativos para o quadro de dislexia.',
      'Para a avaliação da leitura e escrita de crianças com suspeita de dislexia é fundamental a aplicação de provas em que a criança faça a leitura de palavras não existentes na língua. Crianças com dislexia terão dificuldades para realizar a decodificação de palavras desconhecidas.',
      'Crianças com dislexia poderão ter mais facilidade para a interpretação de texto do que para a decodificação de palavras não existentes na língua.',
    ],
    correta: 2,
    explicacao:
      'Atenção ao INCORRETO! Alfabetização tumultuada (troca de professor, escola, professor inexperiente) é causa EXTERNA, pedagógica: aponta para dificuldade de aprendizagem, e não para dislexia. As outras estão certas: atraso de linguagem e histórico familiar são sinais, pseudopalavras são essenciais na avaliação e a interpretação costuma ser melhor que a decodificação.',
  },
  {
    tipo: 'multipla',
    id: 'le-m2-p07',
    enunciado:
      'É um transtorno específico de aprendizagem, com prejuízo na leitura, que acomete escolares, apesar da presença de inteligência normal, da ausência de problemas sensoriais, de instrução escolar adequada e de oportunidades socioculturais suficientes.',
    pergunta: 'Corresponde ao conceito apresentado:',
    alternativas: [
      'Disfunção cerebral mínima',
      'Distúrbio de linguagem',
      'Dislexia',
      'Dificuldade de aprendizagem',
      'Distúrbio viso espacial',
    ],
    correta: 2,
    explicacao:
      'É a definição clássica de dislexia: dificuldade na leitura APESAR de inteligência normal, sem déficit sensorial, com escola adequada e boas oportunidades. Se a causa fosse a escola ou o ambiente, seria dificuldade de aprendizagem.',
  },
  {
    tipo: 'multipla',
    id: 'le-m2-p08',
    enunciado:
      'Para trabalharmos com as Alterações Ortográficas, Zorzi (2003) mostra algumas estratégias. Para um tipo específico de alteração ortográfica o autor cita que devemos: "Levar a criança a detectar e a diferenciar, na própria fala, os fonemas, através de um processo de segmentação fonêmica"; "Estabelecer um padrão de articulação de consoantes sonoras, acentuando o traço de sonoridade (ponto de vista auditivo e tátil-cinestésico, para tornar melhor definidas as imagens mentais sonoras que servem de referência para a escrita)".',
    pergunta: 'Assinale em qual Alteração Ortográfica devem ser usadas estas estratégias:',
    alternativas: [
      'Representações Múltiplas',
      'Uso Indevido de Acentos Gráficos',
      'Acréscimo de Letras/Sílabas',
      'Inversão de Letras/Sílabas',
      'Trocas Surda/Sonora',
    ],
    correta: 4,
    explicacao:
      'A pista é "traço de sonoridade" e "consoantes sonoras": é o que diferencia p/b, t/d, f/v, k/g. Trabalhar a vibração da voz (tátil-cinestésico, a mão na garganta) é a estratégia de Zorzi para as trocas surda/sonora.',
  },
  {
    tipo: 'vf',
    id: 'le-m2-p09',
    enunciado:
      'Algumas atitudes podem ajudar o disléxico no processo de aprendizagem. Abaixo seguem algumas atitudes que devem ser adotadas pelo professor. Analise cada sentença e responda se é Verdadeira ou Falsa:',
    itens: [
      {
        texto:
          'O terapeuta e/ou professor deve possibilitar à criança o uso de letras com diferentes texturas.',
        verdadeiro: true,
      },
      {
        texto:
          'Quando a criança for muito lenta para escrever, o professor deve promover competições em sala de aula, mostrando o exemplo dos bons alunos que conseguem ser rápidos na execução das atividades.',
        verdadeiro: false,
      },
      {
        texto:
          'O professor deve ensinar a criança com dislexia que, quando for ler palavras longas, deve separá-las com uma linha, a lápis.',
        verdadeiro: true,
      },
      {
        texto:
          'Para incentivar a criança disléxica no processo de escolarização, o professor deve corrigir as atividades com caneta vermelha, ou outra cor que destaque o erro da criança, riscando o erro, e deve colocar lembretes como "você precisa estudar mais para melhorar".',
        verdadeiro: false,
      },
      {
        texto:
          'O professor deve orientar a criança a usar folhas quadriculadas, assim possibilitará a melhor visualização no formato das letras.',
        verdadeiro: true,
      },
    ],
    explicacao:
      'Tudo que ajuda a perceber e organizar as letras é VERDADEIRO: texturas (estímulo multissensorial), separar palavras longas a lápis e folha quadriculada. Tudo que expõe ou pune é FALSO: competição e comparação com colegas, caneta vermelha e recados como "precisa estudar mais" baixam a autoestima.',
  },
  {
    tipo: 'multipla',
    id: 'le-m2-p10',
    enunciado:
      'Abaixo seguem as principais especialidades para o diagnóstico da Dislexia do Desenvolvimento. Verifique qual é o papel de cada profissional e faça a correspondência.\n\n1 – Psicologia / Neuropsicologia\n2 – Fonoaudiologia\n3 – Psicopedagogia\n4 – Neurologia infantil\n5 – Psiquiatria da infância e adolescência\n\nA. Determinar nível intelectual, avaliar funções cognitivas, aspectos emocionais, familiares e psicossociais.\nB. Investigação de comorbidades psiquiátricas e diagnóstico diferencial.\nC. Exame neurológico evolutivo (ENE), identificar sinais menores (soft signs) e diagnóstico diferencial.\nD. Avaliar a linguagem oral e escrita, além de avaliação audiológica e processamento auditivo.\nE. Avaliar aspectos escolares, materiais, método pedagógico, processo de ensino-aprendizagem.',
    pergunta: 'A sequência correta é:',
    alternativas: [
      'A(1), B(3), C(4), D(5), E(2)',
      'A(3), B(4), C(5), D(1), E(2)',
      'A(3), B(4), C(2), D(1), E(5)',
      'A(1), B(5), C(4), D(2), E(3)',
    ],
    correta: 3,
    explicacao:
      'Psicologia → nível intelectual e aspectos emocionais (A1); Psiquiatria → comorbidades psiquiátricas (B5); Neurologia → ENE e soft signs (C4); Fono → linguagem oral e escrita, audição e processamento auditivo (D2); Psicopedagogia → aspectos escolares e pedagógicos (E3).',
  },
]
