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
  AGUARDANDO_CORRECAO = "Aguardando correção",
  CORRIGIDA = "Corrigida",
  AGUARDANDO_PONTUACAO = "Aguardando pontuação",
  CONCLUIDA = "Concluída",
  ARQUIVADA = "Arquivada"
}

export const AlunosList = [
  { nome: Alunos.DYLAN },
  { nome: Alunos.ERICK, nomeLista: '' },
  { nome: Alunos.GAUCHO },
  { nome: Alunos.MATHEUS },
  { nome: Alunos.PABLO },
  { nome: Alunos.VICTOR },
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

