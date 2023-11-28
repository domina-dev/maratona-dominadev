
import { Compilacao } from "src/app/model/compilacao";
import { Alunos, Status } from "src/app/pages/painel-compilacao/data";

export const TarefasVictor: Compilacao[]  = [
  { autor: Alunos.VICTOR, status: Status.OK, funcao: "nomeInformado" },
  { autor: Alunos.VICTOR, status: Status.OK, funcao: "calcularMedia" },
]
