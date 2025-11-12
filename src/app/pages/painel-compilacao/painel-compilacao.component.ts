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

@Component({
	selector: 'app-painel-compilacao',
	templateUrl: './painel-compilacao.component.html',
	styleUrls: ['./painel-compilacao.component.scss']
})
export class PainelCompilacaoComponent implements OnInit {

	dadosAlunos: any = [];

	fitContainer: boolean = false;

	view: any = [380, 238];
	// options for the chart
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
	//pie
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
			aluno.value = response?.filter((r: any) => r.autor === aluno.name)?.length || 0;
		});

		this.dadosAlunos = DadosAlunos;
	}

	defineStatusCompilacao(compilacao: Compilacao) {
		switch (compilacao.status) {
			case Status.EM_ANDAMENTO:
				compilacao.icone = "access_time"
				return Status.EM_ANDAMENTO

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
				compilacao.icone = "access_time"
				return Status.EM_ANDAMENTO
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
		console.log(funcao.parametros);
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

			if (typeof valor === 'string' && valor.toLowerCase() === 'true') {
				return true;
			}
			if (typeof valor === 'string' && valor.toLowerCase() === 'false') {
				return false;
			}

			if (!isNaN(parseFloat(valor)) && isFinite(valor)) {
				return Number(valor);
			}

			return valor;
		});
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
		// let now = new Date();
		let mes
		window.localStorage.setItem("dtLikertWithBtnSheet", new Date().getFullYear() + "-" + "01" + "-" + "17");
		window.localStorage.setItem("dtLikertWithIds", new Date().getFullYear() + "-" + "01" + "-" + "18");
	}
}
