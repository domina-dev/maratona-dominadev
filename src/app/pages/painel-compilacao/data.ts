export enum ImgCargos {
  DOMINADOR = 'assets/DOMINADOR.png',
  LORD = 'assets/DOMINDOR-LORD-LADY.png',
  KING = 'assets/DOMINADOR-KING-QUEEN.png',
  ADMIN = 'assets/SÍMBOLO-1.svg'
}

export enum Cargos {
  DOMINADOR = 'Dominador',
  LORD = 'Lord',
  KING = 'King',
}

export enum Alunos {
  DYLAN = 'Dylan',
  ERICK = 'Erick',
  GAUCHO = 'Gaucho',
  MATHEUS = 'Matheus',
  PABLO = 'Pablo',
  VICTOR = 'Victor',
}

export enum Status {
  EM_ANDAMENTO = "Em andamento",
  EM_APROVACAO = "Em Aprovação",
  EM_TESTES = "Em Testes",
  VALIDADO = "Validado",
  DEVOLVIDA = "Devolvida",
  AGUARDANDO_CORRECAO = "Aguardando correção",
  CORRIGIDA = "Corrigida",
  AGUARDANDO_PONTUACAO = "Aguardando pontuação",
  CONCLUIDA = "Concluída",
  ARQUIVADA = "Arquivada"
}

export const ALUNOS_LIST = [
  { nome: Alunos.DYLAN, cargo: "Lord"},
  { nome: Alunos.ERICK, cargo: "King"},
  { nome: Alunos.GAUCHO, cargo: "Lord" },
  { nome: Alunos.MATHEUS, cargo: "Dominador" },
  { nome: Alunos.PABLO, cargo: "Dominador" },
  { nome: Alunos.VICTOR, cargo: "Dominador" },
]

export const DadosAlunos = [
  {
    "name": Alunos.DYLAN,
    "value": 1
  },
  {
    "name": Alunos.ERICK,
    "value": 1
  },
  {
    "name": Alunos.GAUCHO,
    "value": 1
  },
  {
    "name": Alunos.MATHEUS,
    "value": 1
  },
  {
    "name": Alunos.PABLO,
    "value": 1
  },
  {
    "name": Alunos.VICTOR,
    "value": 1
  }
];
