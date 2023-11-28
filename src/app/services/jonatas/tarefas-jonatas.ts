import { Compilacao } from 'src/app/model/compilacao';
import { Alunos, Status } from 'src/app/pages/painel-compilacao/data';

export const TarefasJonatas: Compilacao[] = [
  { autor: Alunos.JONATAS, status: Status.OK, funcao: 'mostrarNome' },
  { autor: Alunos.JONATAS, status: Status.OK, funcao: 'mostrarMedia' }
];