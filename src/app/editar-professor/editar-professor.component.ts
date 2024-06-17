// editar-professor.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ProfessorService } from '../professor-cadastro/service/professor.service';
import { ProfessorModel } from '../professor-cadastro/model/professor.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-editar-professor',
  templateUrl: './editar-professor.component.html',
  styleUrls: ['./editar-professor.component.css']
  
})
export class EditarProfessorComponent implements OnInit {
  constructor(private professorService: ProfessorService,
    private router: ActivatedRoute,
     public afAuth: AngularFireAuth,
    
    
  ) { }

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

  atualizarProfessor(): void {
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
  }}

  click(){
   
    
  
  }
 
}