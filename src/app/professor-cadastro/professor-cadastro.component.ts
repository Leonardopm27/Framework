import { Component } from '@angular/core';

import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import {ProfessorModel  } from './model/professor.module';
import { ProfessorService } from './service/professor.service';
import { Router } from 'express';
import { ActivatedRoute } from '@angular/router';
import { Console } from 'node:console';

@Component({
  selector: 'app-professor-cadastro',
  templateUrl: './professor-cadastro.component.html',
  styleUrl: './professor-cadastro.component.css'
})
export class ProfessorCadastroComponent {

  showSuccessMessages = false;
  showErrorMessages = false;

  key?: string;
  formGroup = new FormGroup({
    nome: new FormControl('',
      [Validators.required]),
    email: new FormControl('',
      [ Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
        
      ]),
    ocupacao: new FormControl('',
      [Validators.required]),
  });

  constructor(private professorService: ProfessorService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(paramMap => {
      this.key = paramMap.get('key')?.toString();
      if (this.key) {
        this.professorService.carregar(this.key).subscribe(professor => {
          this.formGroup.controls.nome.patchValue(professor.nome);
          this.formGroup.controls.email.patchValue(professor.email);
          this.formGroup.controls.ocupacao.patchValue(professor.ocupacao);
        });
      }
    })
  }

  salvar(): void {
    if (this.formGroup.invalid) {
      console.log('Formulário inválido');
      this.formGroup.markAllAsTouched();
      this.showErrorMessages = true;
      return;
    }

    var professor = new ProfessorModel();
    professor.nome = this.formGroup.controls.nome.value?.toString();
    professor.email = this.formGroup.controls.email?.value?.toString();
    professor.ocupacao = this.formGroup.controls.ocupacao?.value?.toString();
    //produto.preco = this.formGroup.controls.preco?.value;

    if (this.key) {
      //codigo para alterar o produto
      this.professorService.alterar(this.key, professor).then(result => {
        this.showSuccessMessages = true;
        console.log(result);
      });
    } else {
      //codigo para salvar o produto
      this.professorService.salvar(professor).then(result => {
        this.showSuccessMessages = true;
        console.log(result);
      });
    }
  }

  selectFile(event: any) {
    //captura o evento de seleção de arquivo
    console.log(event);

    //captura o arquivo selecionado
    console.log(event.target.files[0]);

    const file = event.target.files[0];
    
    this.professorService.uploadImagem(file).then(result => {
      console.log(result);
      result.ref.getDownloadURL().then(url => {
        this.formGroup.controls.email.patchValue(url);
      })      
    });
  }
  teste(){}
}


