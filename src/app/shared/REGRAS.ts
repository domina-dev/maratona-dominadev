
/**
Regras
	1 - Todos os parâmetros de métodos devem acompanhar o indicador de opcional (Uma interrogação após o nome da variável). Ex: nome?: any;
	
	2 - Todos os parâmetros devem SEMPRE ser tipados com o tipo any;
	
	3 - Variáveis globais só devem ser utilizadas quando a utilização de parâmetros não for viável;
	
	4 - Não crie métodos com mais de 3 parâmetros, não irá funcionar;
	
	5 - Todos os métodos auxiliares que você criar(Métodos que não serão chamados pela 	tela) devem receber o prefixo private;
	
	6 - NUNCA commitar mudanças nos arquivos/pastas: 
			ARQUIVOS: 
				- angular.json 
				- package-lock.json
				- package.json
				- commom.service.ts
			PASTAS: 
				- painel-compilacao
				- modais

	7 - Todos os métodos que possuem parâmetro devem acompanhar um ToDo(Comentário de marcação) acima de sua declaração. Ex: 
          
		  /*
		   * 
		   * @param nome string
		   *
           * /
		  exibirNomeInformado(nome?: any) {
			console.log(nome);
		  };
		 Para isso basta começar escrevendo /**
		 Logo na segunda vez que apertar asterísco, o vs code entregará a sugestão de completar, já listando todos seus parâmetros, escreva na frente dele seu tipo.

 */