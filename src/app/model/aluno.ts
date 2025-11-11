export class Aluno {
    id!: number;
    username!: string;
    password!: string

    constructor( nome: string, senha: string){
        this.username = nome;
        this.password = senha;
    }
}