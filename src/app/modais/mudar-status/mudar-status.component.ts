import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Status } from 'src/app/pages/painel-compilacao/data';

@Component({
  selector: 'app-mudar-status',
  templateUrl: './mudar-status.component.html',
  styleUrls: ['./mudar-status.component.scss']
})
export class MudarStatusComponent implements OnInit {

  statusDisponiveis: Status[] = [];
  statusSelecionado: Status | null = null;

  constructor(
    public dialogRef: MatDialogRef<MudarStatusComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if (this.data) {
      this.statusDisponiveis = this.getProximosStatus(
        this.data.usuarioAtual,
        this.data.statusAtual
      );
    }
  }

  getProximosStatus(usuarioAtual: string, statusAtual: Status): Status[] {
    if (usuarioAtual === 'vitorfiler') {
      return this.getProximosStatusAdmin(statusAtual);
    }

    return this.getProximosStatusDev(statusAtual);
  }

  private getProximosStatusAdmin(statusAtual: Status): Status[] {
    switch (statusAtual) {
      case Status.EM_ANDAMENTO:
        return [Status.EM_APROVACAO, Status.DEVOLVIDA];
      case Status.EM_APROVACAO:
        return [Status.EM_TESTES, Status.DEVOLVIDA];
      case Status.EM_TESTES:
        return [Status.VALIDADO, Status.DEVOLVIDA];
      case Status.VALIDADO:
        return [];
      case Status.DEVOLVIDA:
        return [Status.EM_APROVACAO];
      default:
        return [];
    }
  }

  private getProximosStatusDev(statusAtual: Status): Status[] {
    switch (statusAtual) {
      case Status.EM_ANDAMENTO:
        return [Status.EM_APROVACAO];
      case Status.DEVOLVIDA:
        return [Status.EM_APROVACAO];
      default:
        return [];
    }
  }

  getStatusIcon(status: Status): string {
    switch (status) {
      case Status.EM_ANDAMENTO: return 'schedule';
      case Status.EM_APROVACAO: return 'pending';
      case Status.EM_TESTES: return 'science';
      case Status.VALIDADO: return 'check_circle';
      case Status.DEVOLVIDA: return 'cancel';
      default: return 'schedule';
    }
  }

  getStatusColor(status: Status): string {
    switch (status) {
      case Status.EM_ANDAMENTO: return '#2196F3';
      case Status.EM_APROVACAO: return '#FF9800';
      case Status.EM_TESTES: return '#9C27B0';
      case Status.VALIDADO: return '#4CAF50';
      case Status.DEVOLVIDA: return '#F44336';
      default: return '#2196F3';
    }
  }

  getStatusBgColor(status: Status): string {
    switch (status) {
      case Status.EM_ANDAMENTO: return '#E3F2FD';
      case Status.EM_APROVACAO: return '#FFF3E0';
      case Status.EM_TESTES: return '#F3E5F5';
      case Status.VALIDADO: return '#E8F5E9';
      case Status.DEVOLVIDA: return '#FFEBEE';
      default: return '#E3F2FD';
    }
  }

  confirmar(): void {
    if (this.statusSelecionado) {
      this.dialogRef.close({
        novoStatus: this.statusSelecionado
      });
    }
  }

  cancelar(): void {
    this.dialogRef.close();
  }
}
