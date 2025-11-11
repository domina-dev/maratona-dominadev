import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-parametros',
  templateUrl: './editar-parametros.component.html',
  styleUrls: ['./editar-parametros.component.scss']
})
export class EditarParametrosComponent implements OnInit {

  form = this.fb.group({
    parametros: this.fb.array([])
  });

  get parametros() {
    return this.form.get('parametros') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditarParametrosComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    // Verifica se recebeu dados e se tem parâmetros
    if (this.data?.parametros && Array.isArray(this.data.parametros) && this.data.parametros.length > 0) {
      // Preenche o FormArray com os parâmetros recebidos
      this.preencherParametros(this.data.parametros);
    } else {
      // Se não recebeu parâmetros, adiciona um campo vazio
      this.adicionarParametro();
    }
  }

  /**
   * Preenche o FormArray com os parâmetros recebidos
   */
  preencherParametros(parametros: any[]): void {
    parametros.forEach(param => {
      this.parametros.push(this.fb.group({
        id: [param.id || null],
        chave: [param.chave || ''],
        valor: [param.valor || ''],
        tipo: [param.tipo || '']
      }));
    });
  }

  /**
   * Cria um novo FormGroup para parâmetro
   */
  novoFormParam(): FormGroup {
    return this.fb.group({
      id: [null],
      chave: [''],
      valor: [''],
      tipo: ['']
    });
  }

  /**
   * Adiciona um novo parâmetro ao FormArray
   */
  adicionarParametro(): void {
    this.parametros.push(this.novoFormParam());
  }

  /**
   * Remove um parâmetro do FormArray
   */
  removerParametro(index: number): void {
    this.parametros.removeAt(index);
  }

  /**
   * Confirma e fecha a modal retornando os dados
   */
  confirmar(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value.parametros);
    }
  }

  /**
   * Cancela e fecha a modal
   */
  cancelar(): void {
    this.dialogRef.close();
  }
}