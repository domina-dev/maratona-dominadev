import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Compilacao } from 'src/app/model/compilacao';
import { Alunos, ALUNOS_LIST, Status } from 'src/app/pages/painel-compilacao/data';
import { CommomService } from 'src/app/core/services/commom.service';

@Component({
	selector: 'app-compilacao-modal',
	templateUrl: './compilacao-modal.component.html',
	styleUrls: ['./compilacao-modal.component.scss']
})
export class CompilacaoModalComponent implements OnInit {

	usuarioAtual = window.localStorage.getItem('atual') || Alunos.ERICK;

	alunos = ALUNOS_LIST;
	tipos = ["string", "number", "boolean"]

	form = this.fb.group({
		funcao: ['', Validators.required],
		autor: [''],
		status: [Status.EM_ANDAMENTO],
		parametros: this.fb.array([])
	})

	get parametros() {
		return this.form.get('parametros') as FormArray;
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
		this.validaObrigatoriedadeParametros();
	}

	removerParametro(index: number) {
		this.parametros.removeAt(index);
		this.validaObrigatoriedadeParametros();
	}

	adicionarCompilacao() {
		window.localStorage.getItem('usuarioSelecionado');
		let compilacao: Compilacao = this.form.value;
		compilacao.autor = this.usuarioAtual;
		if (this.usuarioAtual === 'vitorfiler') {
			compilacao.autor = window.localStorage.getItem('usuarioSelecionado') || 'BUG';
		}
		this.commomService.adicionar(compilacao).subscribe(response => {
			this.dialogRef.close({ compilacao: response })
		}, error => {
			console.log(error);
		})
	}

	validaObrigatoriedadeParametros() {
		if (this.parametros.length) {
			this.fb.group({
				id: [null],
				chave: ['', Validators.required],
				valor: ['', Validators.required],
				tipo: ['']
			})
		}
	}
}
