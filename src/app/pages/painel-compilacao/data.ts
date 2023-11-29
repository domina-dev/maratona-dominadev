export enum Alunos {
  BRUNO = 'Bruno',
  GEANDERSON = 'Geanderson',
  GUILHERME = 'Guilherme',
  JOAO = 'Joao',
  JONATAS = 'Jonatas',
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
  { nome: Alunos.BRUNO, nomeLista: '' },
  { nome: Alunos.GEANDERSON },
  { nome: Alunos.GUILHERME },
  { nome: Alunos.JOAO },
  { nome: Alunos.JONATAS },
  { nome: Alunos.VICTOR },
]

export const DadosAlunos = [
  {
    "name": Alunos.BRUNO,
    "value": 1
  },
  {
    "name": Alunos.GEANDERSON,
    "value": 1
  },
  {
    "name": Alunos.GUILHERME,
    "value": 1
  },
  {
    "name": Alunos.JOAO,
    "value": 1
  },
  {
    "name": Alunos.JONATAS,
    "value": 1
  },
  {
    "name": Alunos.VICTOR,
    "value": 1
  }
];

