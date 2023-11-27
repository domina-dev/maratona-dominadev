import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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

  dadosAlunos = DadosAlunos;
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
  dataSource!: MatTableDataSource<Exercicio>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  usuarioAtual = Alunos.BRUNO;

  exercicios: Compilacao[] = [];
  tarefasBruno = TarefasBruno;
  tarefasGeanderson = TarefasGeanderson;
  tarefasGuilherme = TarefasGuilherme;
  tarefasJoao = TarefasJoao;
  tarefasJonatas = TarefasJonatas;
  tarefasVictor = TarefasVictor;

  alunos = AlunosList;

  constructor(private commomService: CommomService, private brunoService: BrunoService,
    private geandersonService: GeandersonService, private guilhermeService: GuilhermeService,
    private joaoService: JoaoService, private jonatasService: JonatasService,
    private victorService: VictorService) {
    this.listaExercicios();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  listaExercicios() {
    this.obterFuncoesPorAluno();
    switch (this.usuarioAtual) {
      case Alunos.BRUNO: this.exercicios = TarefasBruno; break;
      case Alunos.GEANDERSON: this.exercicios = TarefasGeanderson; break;
      case Alunos.GUILHERME: this.exercicios = TarefasGuilherme; break;
      case Alunos.JOAO: this.exercicios = TarefasJoao; break;
      case Alunos.JONATAS: this.exercicios = TarefasJonatas; break;
      case Alunos.VICTOR: this.exercicios = TarefasVictor; break;
      default: this.falhaExecucao(); break;
    }

    this.dataSource = new MatTableDataSource<Exercicio>(this.exercicios);
  }

  execucaoDinamica(nomeFuncao: string) {
    try {
      switch (this.usuarioAtual) {
        case Alunos.BRUNO: this.brunoService[nomeFuncao as keyof BrunoService](); break;
        case Alunos.GEANDERSON: this.geandersonService[nomeFuncao as keyof GeandersonService](); break;
        case Alunos.GUILHERME: this.guilhermeService[nomeFuncao as keyof GuilhermeService](); break;
        case Alunos.JOAO: this.joaoService[nomeFuncao as keyof JoaoService](); break;
        case Alunos.JONATAS: this.jonatasService[nomeFuncao as keyof JonatasService](); break;
        case Alunos.VICTOR: this.victorService[nomeFuncao as keyof VictorService](); break;
        default: this.falhaExecucao(); break;
      }
    } catch (error) {
      this.falhaExecucao();
    }

  }

  obterFuncoesPorAluno(){
    DadosAlunos.forEach(aluno => {
      aluno.value = this['tarefas'+ aluno.name as keyof PainelCompilacaoComponent]?.length || 0;
    });
    this.dadosAlunos = DadosAlunos;
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
}
