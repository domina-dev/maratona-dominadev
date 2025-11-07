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
import { CommomService } from 'src/app/services/commom.service';
import { DylanService } from 'src/app/services/dylan/dylan.service';
import { GauchoService } from 'src/app/services/gaucho/gaucho.service';
import { MatheusService } from 'src/app/services/matheus/matheus.service';
import { PabloService } from 'src/app/services/pablo/pablo.service';
import { VictorService } from 'src/app/services/victor/victor.service';
import { Alunos, AlunosList, DadosAlunos, Status } from './data';

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
	displayedColumns: string[] = ['funcao', 'status', 'acoes'];
	dataSource = new MatTableDataSource<Exercicio>();

	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;

	usuarioAtual = window.localStorage.getItem('atual') || Alunos.ERICK;

	exercicios: Compilacao[] = [];

	tarefasAluno: Compilacao[] = [];

	alunos = AlunosList;
	status = Status;

	constructor(private commomService: CommomService, private erickService: ErickService,
		private dylanService: DylanService, private gauchoService: GauchoService,
		private matheusService: MatheusService, private pabloService: PabloService,
		private victorService: VictorService, private dialog: MatDialog,
		private snackbar: MatSnackBar) {
		this.obterFuncoesPorAluno();
	}

	ngOnInit(): void {
	}

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	listaExercicios() {
		this.tarefasAluno = this.exercicios?.filter(r => r.autor === this.usuarioAtual);
		this.dataSource = new MatTableDataSource<Exercicio>(this.tarefasAluno);
		this.dataSource.paginator = this.paginator;
	}

	obterFuncoesPorAluno() {
		this.exercicios = []
		this.dadosAlunos = []
		window.localStorage.setItem('atual', this.usuarioAtual);

		this.commomService.listar().subscribe(response => {

			this.atualizaGrafico(response);
			this.exercicios = response?.filter(r => r.autor === this.usuarioAtual);

			this.dataSource = new MatTableDataSource<Exercicio>(this.exercicios);
			this.dataSource.paginator = this.paginator;

			this.tarefasAluno = this.exercicios;
		}, error => {
			console.log(error);
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

	falhaExecucao() {
		alert("Problema na execução!!!")
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

	abrirDeletar(compilacao: Compilacao) {
		const dialogRef = this.dialog.open(ConfirmacaoComponent);

		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.deletarCompilacao(compilacao);
			}
		});
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
			console.log(error);
		})
	}

	abrirCadastrar() {
		const dialogRef = this.dialog.open(CompilacaoModalComponent);

		dialogRef.afterClosed().subscribe(result => {
			console.log("teste result::: ", result?.compilacao);
			this.obterFuncoesPorAluno();
		});
	}

	execucaoDinamica(compilacao: Compilacao) {
		compilacao.parametros?.length ? this.executarComParametros(compilacao) : this.executarSemParametros(compilacao)
	}

	executarComParametros(compilacao: Compilacao) {
		try {
			compilacao?.parametros?.forEach(param => {
				if (param.tipo === "number") {
					param.valor = +param.valor
				}
				else if (param.tipo !== "string") {
					param.valor = JSON.parse(param.valor);
				}
			});
			let param1: any = compilacao?.parametros[0]?.valor;
			let param2: any = compilacao?.parametros[1]?.valor;
			let param3: any = compilacao?.parametros[2]?.valor;

			switch (this.usuarioAtual) {
				case Alunos.ERICK: this.erickService[compilacao.funcao as keyof ErickService](param1, param2, param3); break;
				case Alunos.DYLAN: this.dylanService[compilacao.funcao as keyof DylanService](param1, param2, param3); break;
				case Alunos.GAUCHO: this.gauchoService[compilacao.funcao as keyof GauchoService](param1, param2, param3); break;
				case Alunos.MATHEUS: this.matheusService[compilacao.funcao as keyof MatheusService](param1, param2, param3); break;
				case Alunos.PABLO: this.pabloService[compilacao.funcao as keyof PabloService](param1, param2, param3); break;
				case Alunos.VICTOR: this.victorService[compilacao.funcao as keyof VictorService](param1, param2, param3); break;
				default: this.falhaExecucao(); break;
			}
		} catch (error) {
			console.log(error);
			this.falhaExecucao();
		}
	}

	testeLikert(){
		// let now = new Date();
		let mes
		window.localStorage.setItem("dtLikertWithBtnSheet", new Date().getFullYear() + "-" + "01" + "-" + "17");
		window.localStorage.setItem("dtLikertWithIds", new Date().getFullYear() + "-" + "01" + "-" + "18");
		// let showLikert = this.victorService.descansoLikert("dtLikertWithBtnSheet");
		// if(showLikert){
		// 	console.log("Mostra");
		// }else {
		// 	console.log("Espera completar 21 dias");			
		// }
		
	}
	executarSemParametros(compilacao: Compilacao) {
		try {
			switch (this.usuarioAtual) {
				case Alunos.ERICK: this.erickService[compilacao.funcao as keyof ErickService](); break;
				case Alunos.DYLAN: this.dylanService[compilacao.funcao as keyof DylanService](); break;
				case Alunos.GAUCHO: this.gauchoService[compilacao.funcao as keyof GauchoService](); break;
				case Alunos.MATHEUS: this.matheusService[compilacao.funcao as keyof MatheusService](); break;
				case Alunos.PABLO: this.pabloService[compilacao.funcao as keyof PabloService](); break;
				case Alunos.VICTOR: this.victorService[compilacao.funcao as keyof VictorService](); break;
				default: this.falhaExecucao(); break;
			}
		} catch (error) {
			console.log(error);
			this.falhaExecucao();
		}
	}
}
