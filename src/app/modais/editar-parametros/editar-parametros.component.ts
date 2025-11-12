import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommomService } from 'src/app/core/services/commom.service';

@Component({
  selector: 'app-editar-parametros',
  templateUrl: './editar-parametros.component.html',
  styleUrls: ['./editar-parametros.component.scss']
})
export class EditarParametrosComponent implements OnInit {

  form = this.fb.group({
    funcao: ['', Validators.required],
    parametros: this.fb.array([])
  });

  get parametros() {
    return this.form.get('parametros') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditarParametrosComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private commomService: CommomService
  ) {
    this.preencherFuncao();
  }

  ngOnInit(): void {
    if (this.data && Array.isArray(this.data.parametros) && this.data.parametros.length > 0) {
      this.data.parametros.sort((a: any, b: any) => b.id - a.id);
      this.preencherParametros(this.data.parametros);
    } else {
      this.adicionarParametro();
    }
  }

  preencherFuncao() {
    this.form = this.fb.group({
      funcao: [this.data.nomeFuncao, Validators.required],
      parametros: this.fb.array([])
    });
  }

  preencherParametros(parametros: any[]): void {
    parametros.forEach(param => {
      this.parametros.push(this.fb.group({
        id: [param.id],
        chave: [param.chave || ''],
        valor: [param.valor || ''],
        tipo: [param.tipo || '']
      }));
    });
  }

  novoFormParam(): FormGroup {
    return this.fb.group({
      id: [null],
      chave: [''],
      valor: [''],
      tipo: ['']
    });
  }

  adicionarParametro(): void {
    this.parametros.push(this.novoFormParam());
  }

  removerParametro(parametro: any, index: number): void {
    this.parametros.removeAt(index);
    this.deletarParamBackend(parametro.value);
  }

  deletarParamBackend(parametro: any) {
    if (parametro && parametro.id) {
      this.commomService.deletarParam(parametro.id).subscribe(response => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
    }
  }

  confirmar(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  cancelar(): void {
    this.dialogRef.close();
  }
}
