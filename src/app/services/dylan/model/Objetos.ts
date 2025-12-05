import { Signo } from "../enum/signo";
/**
 * Tipando um objeto periodoSigno
 */
export type periodoSigno = {
  inicio: Date;
  fim: Date;
  signo: Signo;
};
/**
 * O array que em conjunto do enum signo, tem objeto signo, tendo inicio e final de periodo utilizando a função date
 */
export const periodoSigno: periodoSigno[] = [
  { inicio: new Date(2000, 2, 21), fim: new Date(2000, 3, 20), signo: Signo.ARIES },
  { inicio: new Date(2000, 3, 21), fim: new Date(2000, 4, 20), signo: Signo.TOURO },
  { inicio: new Date(2000, 4, 21), fim: new Date(2000, 5, 20), signo: Signo.GEMEOS },
  { inicio: new Date(2000, 5, 21), fim: new Date(2000, 6, 22), signo: Signo.CANCER },
  { inicio: new Date(2000, 6, 23), fim: new Date(2000, 7, 22), signo: Signo.LEAO },
  { inicio: new Date(2000, 7, 23), fim: new Date(2000, 8, 22), signo: Signo.VIRGEM },
  { inicio: new Date(2000, 8, 23), fim: new Date(2000, 9, 22), signo: Signo.LIBRE },
  { inicio: new Date(2000, 9, 23), fim: new Date(2000, 10, 21), signo: Signo.ESCORPIAO },
  { inicio: new Date(2000, 10, 22), fim: new Date(2000, 11, 21), signo: Signo.SAGITARIO },
  { inicio: new Date(2000, 11, 22), fim: new Date(2000, 0, 19), signo: Signo.CAPRICORNIO },
  { inicio: new Date(2000, 0, 20), fim: new Date(2000, 1, 18), signo: Signo.AQUARIO },
  { inicio: new Date(2000, 1, 19), fim: new Date(2000, 2, 20), signo: Signo.PEIXES },
];
/**
 * Tipando um objeto signoUmaLinha
 */
interface signoUmaLinha {
  nome: String;
  dtInicial: { dia: number, mes: number };
  dtFinal: { dia: number, mes: number };
}
/**
 * O array possui objeto signos, tendo a data inicial do período e a data final do período
 */
export const signos1linha: signoUmaLinha[] = [

  { nome: "Áries", dtInicial: { dia: 21, mes: 3 }, dtFinal: { dia: 20, mes: 4 } },
  { nome: "Touro", dtInicial: { dia: 21, mes: 4 }, dtFinal: { dia: 20, mes: 5 } },
  { nome: "Gêmeos", dtInicial: { dia: 21, mes: 5 }, dtFinal: { dia: 20, mes: 6 } },
  { nome: "Câncer", dtInicial: { dia: 21, mes: 6 }, dtFinal: { dia: 22, mes: 7 } },
  { nome: "Leão", dtInicial: { dia: 23, mes: 7 }, dtFinal: { dia: 22, mes: 8 } },
  { nome: "Virgem", dtInicial: { dia: 23, mes: 8 }, dtFinal: { dia: 22, mes: 9 } },
  { nome: "Libra", dtInicial: { dia: 23, mes: 9 }, dtFinal: { dia: 22, mes: 10 } },
  { nome: "Escorpião", dtInicial: { dia: 23, mes: 10 }, dtFinal: { dia: 21, mes: 11 } },
  { nome: "Sagitário", dtInicial: { dia: 22, mes: 11 }, dtFinal: { dia: 21, mes: 12 } },
  { nome: "Capricórnio", dtInicial: { dia: 22, mes: 12 }, dtFinal: { dia: 20, mes: 1 } },
  { nome: "Aquário", dtInicial: { dia: 21, mes: 1 }, dtFinal: { dia: 18, mes: 2 } },
  { nome: "Peixes", dtInicial: { dia: 19, mes: 2 }, dtFinal: { dia: 20, mes: 3 } },
]