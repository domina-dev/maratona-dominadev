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
    funcao: ['', Validators.required, Validators.max(15)],
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
    // Verifica se recebeu dados e se tem parâmetros
    if (this.data && Array.isArray(this.data.parametros) && this.data.parametros.length > 0) {
      // Preenche o FormArray com os parâmetros recebidos
      this.preencherParametros(this.data.parametros);
    } else {
      // Se não recebeu parâmetros, adiciona um campo vazio
      this.adicionarParametro();
    }
  }
  
  preencherFuncao(){
    console.log("DATAAAAAAAAAAAAAA"); 
    console.log(this.data.nomeFuncao);
    this.form = this.fb.group({
      funcao: [this.data.nomeFuncao, Validators.required, Validators.max(15)],
      parametros: this.fb.array([])
    });
  }

  /**
   * Preenche o FormArray com os parâmetros recebidos
   */
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
  removerParametro(parametro: any, index: number): void {
    this.parametros.removeAt(index);
    this.deletarParamBackend(parametro.value);
  }

  /**
   * Remove Parâmetros do banckend e não só da lista
   */
  deletarParamBackend(parametro: any) {
    this.commomService.deletarParam(parametro.id).subscribe(response => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  /**
   * Confirma e fecha a modal retornando os dados
   */
  confirmar(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  /**
   * Cancela e fecha a modal
   */
  cancelar(): void {
    this.dialogRef.close();
  }
}