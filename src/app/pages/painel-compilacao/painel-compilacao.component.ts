import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Compilacao } from 'src/app/model/compilacao';
import { Exercicio } from 'src/app/model/exercicio';
import { single } from './data';

@Component({
  selector: 'app-painel-compilacao',
  templateUrl: './painel-compilacao.component.html',
  styleUrls: ['./painel-compilacao.component.scss']
})
export class PainelCompilacaoComponent implements OnInit {

  single = single;
  name = 'Angular';

  fitContainer: boolean = false;

  view: any = [380, 238];
  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Dev';
  showYAxisLabel = true;
  yAxisLabel = 'Compilações';
  timeline = true;
  doughnut = true;
  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };
  //pie
  showLabels = true;
  displayedColumns: string[] = ['autor', 'status', 'funcao'];
  dataSource: MatTableDataSource<Exercicio>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  exercicios: Compilacao[] = [
    { id: 1, autor: "teste", status: "teste", funcao: "teste" }
  ];

  constructor() {
    this.dataSource = new MatTableDataSource<Exercicio>(this.exercicios);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
  }

}
