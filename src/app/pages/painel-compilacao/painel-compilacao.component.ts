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
import { BrunoService } from 'src/app/services/bruno/bruno.service';
import { TarefasBruno } from 'src/app/services/bruno/tarefas-bruno';
import { CommomService } from 'src/app/services/commom.service';
import { GeandersonService } from 'src/app/services/geanderson/geanderson.service';
import { TarefasGeanderson } from 'src/app/services/geanderson/tarefas-geanderson';
import { GuilhermeService } from 'src/app/services/guilherme/guilherme.service';
import { TarefasGuilherme } from 'src/app/services/guilherme/tarefas-guilherme';
import { JoaoService } from 'src/app/services/joao/joao.service';
import { TarefasJoao } from 'src/app/services/joao/tarefas-joao';
import { JonatasService } from 'src/app/services/jonatas/jonatas.service';
import { TarefasJonatas } from 'src/app/services/jonatas/tarefas-jonatas';
import { TarefasVictor } from 'src/app/services/victor/tarefas-victor';
import { VictorService } from 'src/app/services/victor/victor.service';
import { Alunos, AlunosList, DadosAlunos } from './data';

@Component({
	selector: 'app-painel-compilacao',
	templateUrl: './painel-compilacao.component.html',
	styleUrls: ['./painel-compilacao.component.scss']
})
export class PainelCompilacaoComponent implements OnInit {

	dadosAlunos: any = [];
	name = 'Angular';

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
	yAxisLabel = 'Compilações';
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

	usuarioAtual = window.localStorage.getItem('atual') || Alunos.BRUNO;

	exercicios: Compilacao[] = [];

	tarefasAluno: Compilacao[] = [];

	alunos = AlunosList;

	constructor(private commomService: CommomService, private brunoService: BrunoService,
		private geandersonService: GeandersonService, private guilhermeService: GuilhermeService,
		private joaoService: JoaoService, private jonatasService: JonatasService,
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

	atualizaGrafico(response: any){
		DadosAlunos.forEach(aluno => {
			aluno.value = response?.filter((r: any) => r.autor === aluno.name)?.length || 0;
		});
		
		this.dadosAlunos = DadosAlunos;
	}

	contadorFuncoesPorAluno(){

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
			if(result){
				this.deletarCompilacao(compilacao);
			}
		});
	}

	deletarCompilacao(compilacao: Compilacao){
		this.commomService.deletar(compilacao?.id).subscribe(()=>{
			this.snackbar.open(
				"Compilação deletada com sucesso!",
				"Fechar",
				{
				  duration: 3000
				}
			  )
			  this.obterFuncoesPorAluno();
		}, error=>{
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
				if(param.tipo === "number") {
					param.valor = +param.valor
				}
				else if(param.tipo !== "string"){
					param.valor = JSON.parse(param.valor);
				}
			});
			let param1: any = compilacao?.parametros[0]?.valor;
			let param2: any = compilacao?.parametros[1]?.valor;
			let param3: any = compilacao?.parametros[2]?.valor;

			switch (this.usuarioAtual) {
				case Alunos.BRUNO: this.brunoService[compilacao.funcao as keyof BrunoService](param1, param2, param3); break;
				case Alunos.GEANDERSON: this.geandersonService[compilacao.funcao as keyof GeandersonService](param1, param2, param3); break;
				case Alunos.GUILHERME: this.guilhermeService[compilacao.funcao as keyof GuilhermeService](param1, param2, param3); break;
				case Alunos.JOAO: this.joaoService[compilacao.funcao as keyof JoaoService](param1, param2, param3); break;
				case Alunos.JONATAS: this.jonatasService[compilacao.funcao as keyof JonatasService](param1, param2, param3); break;
				case Alunos.VICTOR: this.victorService[compilacao.funcao as keyof VictorService](param1, param2, param3); break;
				default: this.falhaExecucao(); break;
			}
		} catch (error) {
			this.falhaExecucao();
		}
	}

	executarSemParametros(compilacao: Compilacao) {
		try {
			switch (this.usuarioAtual) {
				case Alunos.BRUNO: this.brunoService[compilacao.funcao as keyof BrunoService](); break;
				case Alunos.GEANDERSON: this.geandersonService[compilacao.funcao as keyof GeandersonService](); break;
				case Alunos.GUILHERME: this.guilhermeService[compilacao.funcao as keyof GuilhermeService](); break;
				case Alunos.JOAO: this.joaoService[compilacao.funcao as keyof JoaoService](); break;
				case Alunos.JONATAS: this.jonatasService[compilacao.funcao as keyof JonatasService](); break;
				case Alunos.VICTOR: this.victorService[compilacao.funcao as keyof VictorService](); break;
				default: this.falhaExecucao(); break;
			}
		} catch (error) {
			this.falhaExecucao();
		}
	}
}
