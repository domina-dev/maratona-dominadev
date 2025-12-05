/**
 * Crie Funções para: 
 * 
===============================================================================================================================================
    1 - Retornar a soma de dois números recebidos
===============================================================================================================================================
    2 - Receber uma hora qualquer do dia em formato 24h e informar se é manhã, tarde, noite
===============================================================================================================================================
    3 - Percorrer a lista de produtos que se encontra neste arquivo e informar qual o produto mais caro e o mais barato
===============================================================================================================================================
	4 - fazer o exercício 4 utilizando o .find() do TS
===============================================================================================================================================
*/

interface Produto{
	id?: number;
	nome:String;
	valor: number;
}

export const listaProdutos: Produto[] = [
	{ nome: "Metralhadora Ak-45 Pente alongado", valor: 20000},
	{ nome: "Iphone 13", valor: 4300},
	{ nome: "Carrinho de rolimã ", valor: 200},
	{ nome: "Sabugo de milho semi novo Único dono", valor: 1},
	{ nome: "Retrovisor Marea 98", valor: 86},
]	