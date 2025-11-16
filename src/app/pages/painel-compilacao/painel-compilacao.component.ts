import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CompilacaoModalComponent } from 'src/app/modais/compilacao-modal/compilacao-modal.component';
import { ConfirmacaoComponent } from 'src/app/modais/confirmacao/confirmacao.component';
import { Compilacao } from 'src/app/model/compilacao';
import { Exercicio } from 'src/app/model/exercicio';
import { ErickService } from 'src/app/services/erick/erick.service';
import { CommomService } from 'src/app/core/services/commom.service';
import { DylanService } from 'src/app/services/dylan/dylan.service';
import { GauchoService } from 'src/app/services/gaucho/gaucho.service';
import { MatheusService } from 'src/app/services/matheus/matheus.service';
import { PabloService } from 'src/app/services/pablo/pablo.service';
import { VictorService } from 'src/app/services/victor/victor.service';
import { Alunos, ALUNOS_LIST, DadosAlunos, Status } from './data';
import { LoginModalComponent } from 'src/app/modais/login/login-modal.component';
import { ConsoleService } from 'src/app/core/services/console.service';
import { EditarParametrosComponent } from 'src/app/modais/editar-parametros/editar-parametros.component';
import { MudarStatusComponent } from 'src/app/modais/mudar-status/mudar-status.component';

@Component({
	selector: 'app-painel-compilacao',
	templateUrl: './painel-compilacao.component.html',
	styleUrls: ['./painel-compilacao.component.scss']
})
export class PainelCompilacaoComponent implements OnInit {

	dadosAlunos: any = [];

	fitContainer: boolean = false;

	view: any = [380, 238];
	showXAxis = true;
	showYAxis = true;
	gradient = true;
	showLegend = false;
	showXAxisLabel = true;
	xAxisLabel = 'Devs';
	showYAxisLabel = true;
	yAxisLabel = 'Funções criadas';
	timeline = true;
	doughnut = true;
	colorScheme = {
		domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
	};
	showLabels = true;
	displayedColumns: string[] = ['funcao', 'status', 'executar', 'parametros', 'deletar'];
	dataSource = new MatTableDataSource<Exercicio>();

	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;

	usuarioAtual = window.localStorage.getItem('atual');
	usuarioSelecionado: any = this.usuarioAtual !== 'vitorfiler' ? this.usuarioAtual : Alunos.DYLAN;

	exercicios: Compilacao[] = [];

	tarefasAluno: Compilacao[] = [];

	alunos = ALUNOS_LIST;
	status = Status;

	constructor(private commomService: CommomService, private erickService: ErickService,
		private dylanService: DylanService, private gauchoService: GauchoService,
		private matheusService: MatheusService, private pabloService: PabloService,
		private victorService: VictorService, private dialog: MatDialog,
		private snackbar: MatSnackBar, private consoleService: ConsoleService) {
		this.obterFuncoesPorAluno();
	}

	ngOnInit(): void {
		if (!this.usuarioAtual) {
			this.abrirLogin();
		}
	}

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	abrirLogin() {
		const dialogRef = this.dialog.open(LoginModalComponent, {
			width: '400px',
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result) {
			}
		});
	}

	listaExercicios() {
		this.tarefasAluno = this.exercicios?.filter(r => r.autor === this.usuarioAtual);
		this.dataSource = new MatTableDataSource<Exercicio>(this.tarefasAluno);
		this.dataSource.paginator = this.paginator;
	}

	obterFuncoesPorAluno() {
		this.exercicios = []
		this.dadosAlunos = []

		this.commomService.listar().subscribe(response => {
			this.atualizaGrafico(response);
			this.exercicios = response?.filter(r => r.autor === this.usuarioSelecionado);
			this.exercicios.sort((a: any, b: any) => b.id - a.id);

			this.exercicios.forEach(ex => this.defineStatusCompilacao(ex));

			this.dataSource = new MatTableDataSource<Exercicio>(this.exercicios);
			this.dataSource.paginator = this.paginator;

			this.tarefasAluno = this.exercicios;
		}, error => {
			this.snackbar.open(
				"Falha ao carregar dados contate o Admin !!!",
				"Fechar",
				{
					duration: 3000
				}
			)
			this.consoleService.error(error);
		})

	}

	atualizaGrafico(response: any) {
		DadosAlunos.forEach(aluno => {
			aluno.value = response?.filter((r: any) => r.autor === aluno.name && r.status === Status.VALIDADO)?.length || 0;
		});

		this.dadosAlunos = DadosAlunos;
	}

	defineStatusCompilacao(compilacao: Compilacao) {
		switch (compilacao.status) {
			case Status.EM_ANDAMENTO:
				compilacao.icone = "schedule"
				return Status.EM_ANDAMENTO

			case Status.EM_APROVACAO:
				compilacao.icone = "pending"
				return Status.EM_APROVACAO

			case Status.EM_TESTES:
				compilacao.icone = "science"
				return Status.EM_TESTES

			case Status.VALIDADO:
				compilacao.icone = "check_circle"
				return Status.VALIDADO

			case Status.DEVOLVIDA:
				compilacao.icone = "cancel"
				return Status.DEVOLVIDA

			case Status.AGUARDANDO_CORRECAO:
				compilacao.icone = "pending"
				return Status.AGUARDANDO_CORRECAO

			case Status.CORRIGIDA:
				compilacao.icone = "done"
				return Status.CORRIGIDA

			case Status.AGUARDANDO_PONTUACAO:
				compilacao.icone = "pending_actions"
				return Status.AGUARDANDO_PONTUACAO

			case Status.CONCLUIDA:
				compilacao.icone = "done_all"
				return Status.CONCLUIDA

			case Status.ARQUIVADA:
				compilacao.icone = "folder"
				return Status.ARQUIVADA

			default:
				compilacao.icone = "schedule"
				return Status.EM_ANDAMENTO
		}
	}

	podeAlterarStatus(compilacao: Compilacao): boolean {
		if (this.usuarioAtual === 'vitorfiler') {
			return true;
		}

		if (compilacao.status === Status.EM_ANDAMENTO || compilacao.status === Status.DEVOLVIDA) {
			return compilacao.autor === this.usuarioAtual;
		}

		return false;
	}

	abrirMudarStatus(compilacao: Compilacao) {
		const dialogRef = this.dialog.open(MudarStatusComponent, {
			width: '500px',
			data: {
				usuarioAtual: this.usuarioAtual,
				statusAtual: compilacao.status,
				compilacao: compilacao
			}
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				compilacao.status = result.novoStatus;
				this.commomService.atualizar(compilacao).subscribe(() => {
					this.snackbar.open(
						"Status alterado com sucesso!",
						"Fechar",
						{
							duration: 3000
						}
					)
					this.obterFuncoesPorAluno();
				}, error => {
					this.consoleService.error(error);
					this.snackbar.open(
						"Falha ao alterar status!",
						"Fechar",
						{
							duration: 3000
						}
					)
				});
			}
		});
	}

	getStatusColor(status: string): string {
		switch (status) {
			case Status.EM_ANDAMENTO: return '#2196F3';
			case Status.EM_APROVACAO: return '#FF9800';
			case Status.EM_TESTES: return '#9C27B0';
			case Status.VALIDADO: return '#4CAF50';
			case Status.DEVOLVIDA: return '#F44336';
			default: return '#757575';
		}
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

	deletarCompilacao(compilacao: Compilacao) {
		this.commomService.deletar(compilacao?.id).subscribe(() => {
			this.snackbar.open(
				"Compilação deletada com sucesso!",
				"Fechar",
				{
					duration: 3000
				}
			)
			this.obterFuncoesPorAluno();
		}, error => {
			this.consoleService.error(error);
		})
	}

	abrirCadastrar() {
		window.localStorage.setItem('usuarioSelecionado', this.usuarioSelecionado);
		const dialogRef = this.dialog.open(CompilacaoModalComponent, {
			width: '600px'
		});


		dialogRef.afterClosed().subscribe(result => {
			this.obterFuncoesPorAluno();
		});
	}

	abrirEditar(funcao: any) {
		const dialogRef = this.dialog.open(EditarParametrosComponent, {
			width: '600px',
			data: {
				nomeFuncao: funcao.funcao,
				parametros: funcao.parametros
			}
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				funcao.funcao = result.funcao;
				funcao.parametros = result.parametros;
				this.commomService.atualizar(funcao).subscribe(response => {
					funcao.parametros = response.parametros
					this.snackbar.open(
						"Parâmetros alterados com sucesso!",
						"Fechar",
						{
							duration: 3000
						}
					)
				}, (error) => {
					this.consoleService.error(error);
					this.snackbar.open(
						"Falha ao alterar parâmetros!",
						"Fechar",
						{
							duration: 3000
						}
					)
				})
			}
		});
	}

	abrirDeletar(compilacao: Compilacao) {
		const dialogRef = this.dialog.open(ConfirmacaoComponent);

		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.deletarCompilacao(compilacao);
			}
		});
	}

	execucaoDinamica(compilacao: Compilacao) {
		try {
			const parametrosProcessados = this.processarParametros(compilacao.parametros);

			this.executarFuncao(compilacao.funcao, parametrosProcessados);
		} catch (error) {
			this.consoleService.error(error)
		}
	}

	private processarParametros(parametros?: any[]): any[] {
		if (!parametros || parametros.length === 0) {
			return [];
		}

		return parametros.map(param => {
			const valor = param.valor;

			// Se não for string, retorna o valor original
			if (typeof valor !== 'string') {
				return valor;
			}

			// 1. Tentar converter para Boolean
			if (valor.toLowerCase() === 'true') {
				return true;
			}
			if (valor.toLowerCase() === 'false') {
				return false;
			}

			// 2. Tentar converter para Date
			const dataConvertida = this.tentarConverterParaData(valor);
			if (dataConvertida) {
				return dataConvertida;
			}

			// 3. Tentar converter para Number
			if (!isNaN(parseFloat(valor)) && isFinite(valor as any)) {
				return Number(valor);
			}

			// 4. Retornar como String
			return valor;
		});
	}

	/**
	 * Tenta converter uma string para Date
	 * Suporta os formatos:
	 * - DD/MM/AAAA (ex: 15/10/2000)
	 * - DD-MM-AAAA (ex: 15-10-2000)
	 * - AAAA-MM-DD (ex: 2000-10-15) - formato ISO
	 * - DD/MM/AAAA HH:mm:ss (ex: 15/10/2000 14:30:00)
	 * 
	 * @param valor String a ser convertida
	 * @returns Date se for uma data válida, null caso contrário
	 */
	private tentarConverterParaData(valor: string): Date | null {
		// Remover espaços extras
		valor = valor.trim();

		// Regex para DD/MM/AAAA ou DD-MM-AAAA (com ou sem hora)
		const regexDataBR = /^(\d{2})[\/\-](\d{2})[\/\-](\d{4})(\s+\d{2}:\d{2}(:\d{2})?)?$/;

		// Regex para AAAA-MM-DD (formato ISO)
		const regexDataISO = /^(\d{4})-(\d{2})-(\d{2})(T\d{2}:\d{2}:\d{2})?$/;

		// Tentar formato brasileiro: DD/MM/AAAA
		const matchBR = valor.match(regexDataBR);
		if (matchBR) {
			const dia = parseInt(matchBR[1], 10);
			const mes = parseInt(matchBR[2], 10);
			const ano = parseInt(matchBR[3], 10);
			const hora = matchBR[4] ? matchBR[4].trim() : null;

			// Validar se é uma data válida
			if (this.isDataValida(dia, mes, ano)) {
				if (hora) {
					// Se tiver hora, incluir na data
					const [hh, mm, ss = '00'] = hora.split(':');
					return new Date(ano, mes - 1, dia, parseInt(hh), parseInt(mm), parseInt(ss));
				}
				return new Date(ano, mes - 1, dia);
			}
		}

		// Tentar formato ISO: AAAA-MM-DD
		const matchISO = valor.match(regexDataISO);
		if (matchISO) {
			const ano = parseInt(matchISO[1], 10);
			const mes = parseInt(matchISO[2], 10);
			const dia = parseInt(matchISO[3], 10);

			if (this.isDataValida(dia, mes, ano)) {
				return new Date(ano, mes - 1, dia);
			}
		}

		return null;
	}

	/**
	 * Valida se dia, mês e ano formam uma data válida
	 */
	private isDataValida(dia: number, mes: number, ano: number): boolean {
		// Validações básicas
		if (mes < 1 || mes > 12) return false;
		if (dia < 1 || dia > 31) return false;
		if (ano < 1900 || ano > 2100) return false; // Range razoável

		// Validar dias por mês
		const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

		// Verificar ano bissexto
		if (this.isAnoBissexto(ano)) {
			diasPorMes[1] = 29;
		}

		return dia <= diasPorMes[mes - 1];
	}

	/**
	 * Verifica se o ano é bissexto
	 */
	private isAnoBissexto(ano: number): boolean {
		return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
	}

	private executarFuncao(nomeFuncao: string, parametros: any[]) {
		const service = this.obterService();

		if (!service) {
			alert("Seu Service não foi encontrado, contate o Admin !!!")
			return;
		}

		(service[nomeFuncao as keyof typeof service] as Function)(...parametros);
	}

	private obterService() {
		switch (this.usuarioSelecionado) {
			case Alunos.ERICK: return this.erickService;
			case Alunos.DYLAN: return this.dylanService;
			case Alunos.GAUCHO: return this.gauchoService;
			case Alunos.MATHEUS: return this.matheusService;
			case Alunos.PABLO: return this.pabloService;
			case Alunos.VICTOR: return this.victorService;
			default: return null;
		}
	}

	testeLikert() {
		let mes
		window.localStorage.setItem("dtLikertWithBtnSheet", new Date().getFullYear() + "-" + "01" + "-" + "17");
		window.localStorage.setItem("dtLikertWithIds", new Date().getFullYear() + "-" + "01" + "-" + "18");
	}
}
