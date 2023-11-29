import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Compilacao } from 'src/app/model/compilacao';
import { Alunos, AlunosList } from 'src/app/pages/painel-compilacao/data';
import { CommomService } from 'src/app/services/commom.service';

@Component({
	selector: 'app-compilacao-modal',
	templateUrl: './compilacao-modal.component.html',
	styleUrls: ['./compilacao-modal.component.scss']
})
export class CompilacaoModalComponent implements OnInit {

	usuarioAtual = window.localStorage.getItem('atual') || Alunos.BRUNO;

	alunos = AlunosList;
	tipos = ["string", "number", "boolean"]

	form = this.fb.group({
		funcao: [''],
		autor: [''],
		status: ['OK'],
		parametros: this.fb.array([])
	})
	// parametrosForm!: FormArray;

	get parametros() {
		return this.form.get('parametros') as FormArray;
		// return this.form.controls["parametros"] as FormArray;
	}

	constructor(private fb: FormBuilder, private commomService: CommomService,
		private readonly dialogRef: MatDialogRef<CompilacaoModalComponent>,
		private snackbar: MatSnackBar) {

	}

	ngOnInit(): void {
	}

	novoFormParam(tipoSelecionado: string): FormGroup {
		return this.fb.group({
			id: [null],
			chave: [''],
			valor: [''],
			tipo: [tipoSelecionado]
		})
	}
	adicionarParametro(tipoSelecionado: string) {

		if (this.parametros.length >= 3) {
			this.snackbar.open(
				"Você já adicionou o máximo de parâmetros permitidos, para adicionar mais contate o admin!",
				"Fechar",
				{
					duration: 6000
				}
			)
			return;
		}
		this.parametros.push(this.novoFormParam(tipoSelecionado));
		console.log(this.parametros.value);
	}

	removerParametro(index: number) {
		this.parametros.removeAt(index);
		console.log(this.parametros.value);
	}

	adicionarCompilacao() {
		let compilacao: Compilacao = this.form.value;
		compilacao.autor = this.usuarioAtual;
		this.commomService.adicionar(compilacao).subscribe(response => {
			this.dialogRef.close({ compilacao: response })
		}, error => {
			console.log(error);
		})
	}
}
