import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Alunos, ALUNOS_LIST, Status } from 'src/app/pages/painel-compilacao/data';
import { CommomService } from 'src/app/core/services/commom.service';
import { LoginService } from 'src/app/core/services/login.service';
import { Aluno } from 'src/app/model/aluno';

@Component({
	selector: 'app-login-modal',
	templateUrl: './login-modal.component.html',
	styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

	usuarioAtual = window.localStorage.getItem('atual') || Alunos.ERICK;

	form = this.fb.group({
		usuario: [''],
		senha: [''],
	})

	constructor(private fb: FormBuilder, private loginService: LoginService,
		private readonly dialogRef: MatDialogRef<LoginModalComponent>,
		private snackbar: MatSnackBar) {

	}

	ngOnInit(): void {
	}

	login() {
		const aluno: Aluno = new Aluno(
			this.form.get('usuario')?.value,
			this.form.get('senha')?.value
		);

		this.loginService.login(aluno).subscribe(response => {
			localStorage.setItem("nomeProprietario", response.nomeProprietario)
			localStorage.setItem("atual", response.email)
			localStorage.setItem("token", response.token);
			this.dialogRef.close(response.email);
			window.location.reload();
		}, (error) => {
			this.snackbar.open(
				"Falha na identidicação, verifique os dados digitados!",
				"Fechar",
				{
					duration: 5000
				}
			)
			console.log(error);
		})
	}

}
