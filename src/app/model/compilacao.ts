export class Compilacao {
    id!: number;
    autor?: string;
    status?: string;
    funcao!: string;
    parametros!: Parametro[];
    icone?: string;
}

export class Parametro {
    id?: number;
    chave?: string;
    valor?: any;
    tipo?: string;
}