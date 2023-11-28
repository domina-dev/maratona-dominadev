
import { Compilacao } from "src/app/model/compilacao";
import { Alunos, Status } from "src/app/pages/painel-compilacao/data";

export const TarefasGuilherme: Compilacao[]  = [
    { autor: Alunos.GUILHERME, status: Status.OK, funcao: "mostraNome"},
    { autor: Alunos.GUILHERME, status: Status.OK, funcao: "calculaMedia"}
]