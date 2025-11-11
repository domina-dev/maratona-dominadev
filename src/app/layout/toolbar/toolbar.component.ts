import { Component, OnInit } from '@angular/core';
import { ALUNOS_LIST, Cargos, ImgCargos } from 'src/app/pages/painel-compilacao/data';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  
  nomeUsuario: any = '';
  usuarioLogado = localStorage.getItem('atual');
  pontuacao: number = 0;
  imgCargo: string = "";

  constructor() { }

  ngOnInit(): void {
    this.carregarDadosUsuario();
  }

  carregarDadosUsuario(): void {
    const usuario = localStorage.getItem('nomeProprietario');
    this.nomeUsuario = usuario;
    this.pontuacao = 0;
    this.defineImagemCargo();
  }

  defineImagemCargo(){
    let cargo = ALUNOS_LIST.find(aluno => {return aluno.nome == this.usuarioLogado})?.cargo
    switch (cargo) {
      case Cargos.DOMINADOR:
        this.imgCargo = ImgCargos.DOMINADOR
        break;
      case Cargos.LORD:
        this.imgCargo = ImgCargos.LORD
        break;
      case Cargos.KING:
        this.imgCargo = ImgCargos.KING
        break;
    
      default:
        this.imgCargo = ImgCargos.ADMIN
        break;
    }
  }

  atualizarPontuacao(novaPontuacao: number): void {
    this.pontuacao = novaPontuacao;
  }

}
