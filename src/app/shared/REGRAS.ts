
/**
Regras
	 - Todos os parâmetros de métodos devem acompanhar o indicador de opcional (Uma interrogação após o nome da variável). Ex: nome?: any;

	 - Variáveis globais só devem ser utilizadas quando a utilização de parâmetros não for viável;

	 - Não crie métodos com mais de 3 parâmetros por hora;

	 - Todos os métodos auxiliares que você criar(Métodos que não serão chamados pela 	tela) devem receber o prefixo private;

	 - NUNCA commitar mudanças em arquivos/pastas fora de src/app/services se não for previamente solicitado: 

	 - Todos os métodos devem acompanhar um ToDo(Comentário de marcação) acima de sua declaração. Ex: 
          
		  /*
		   * Recebe um nome informado em tela, e exibe no console do navegador
		   * @param nome string
		   *
           * /
		  exibirNomeInformado(nome?: any) {
			console.log(nome);
		  };
		 Para isso basta começar escrevendo /**
		 Logo na segunda vez que apertar asterísco, o vs code entregará a sugestão de completar, já listando todos seus parâmetros, escreva na frente dele seu tipo.
		 Além disso é importante descrever para que este método serve

 */