/*
Faça um método que receba a data de nascimento de uma pessoa. retorne o signo dela. (Faça como quiser desde que funcione)

    Áries: de 21 de março a 20 de abril;
    Touro: de 21 de abril a 20 de maio;
    Gêmeos: de 21 de maio a 20 de junho;  jan fev marc abr mai jun jul agos set out nov dez
    Câncer: de 21 de junho a 22 de julho;
    Leão: de 23 de julho a 22 de agosto;
    Virgem: de 23 de agosto a 22 de setembro;
    Libra: de 23 de setembro a 22 de outubro;
    Escorpião: de 23 de outubro a 21 de novembro;
    Sagitário: de 22 de novembro a 21 de dezembro;
    Capricórnio: de 22 de dezembro a 20 de janeiro;
    Aquário: de 21 de janeiro a 18 de fevereiro;
    Peixes: de 19 de fevereiro a 20 de março;

    Em seguida se necessário, o escopo da sua função principal deve ter apeas uma linha, consegue fazer isso?
*/

export interface Signo {
    nome: string;      // Abreviações//
    dtIn: Date;       //dtIn - data inicial//
    dtF: Date;        //dtF - data final//
}

export const anNs = 2024   // anNs - ano nascimento//

export const signos: Signo[] = [
    { nome: "Aries", dtIn: new Date(anNs, 2, 21), dtF: new Date(anNs, 3, 20) },
    { nome: "Touro", dtIn: new Date(anNs, 3, 21), dtF: new Date(anNs, 4, 20) },
    { nome: "Gemeos", dtIn: new Date(anNs, 4, 21), dtF: new Date(anNs, 5, 20) },
    { nome: "Cancer", dtIn: new Date(anNs, 5, 21), dtF: new Date(anNs, 6, 22) },
    { nome: "Leao", dtIn: new Date(anNs, 6, 23), dtF: new Date(anNs, 7, 22) },
    { nome: "Virgem", dtIn: new Date(anNs, 7, 23), dtF: new Date(anNs, 8, 22) },
    { nome: "Libra", dtIn: new Date(anNs, 8, 23), dtF: new Date(anNs, 9, 22) },
    { nome: "Escopiao", dtIn: new Date(anNs, 9, 23), dtF: new Date(anNs, 10, 21) },
    { nome: "Sagitario", dtIn: new Date(anNs, 10, 22), dtF: new Date(anNs, 11, 21) },
    { nome: "Capricornio", dtIn: new Date(anNs, 11, 22), dtF: new Date(anNs, 0, 21) },
    { nome: "Aquario", dtIn: new Date(anNs, 0, 21), dtF: new Date(anNs, 1, 18) },
    { nome: "Peixes", dtIn: new Date(anNs, 1, 19), dtF: new Date(anNs, 2, 20) },
]