import { Component, OnInit } from '@angular/core';
import { ProfessorModel } from '../professor-cadastro/model/professor.module';
import { ProfessorService } from '../professor-cadastro/service/professor.service';
import { map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-professor',
  templateUrl: './lista-professor.component.html',
  styleUrl: './lista-professor.component.css'
})
export class ListaProfessorComponent {
  public professores: any;
  showDeleteMessages = false;

  constructor(private professorService: ProfessorService,
    private router: Router) { }

  ngOnInit(): void {
    this.professorService.listar().subscribe(professores => {
      console.log(professores)
      this.professores = professores;
    });
  }

  excluir(key: any) {
    console.log(key);
    this.professorService.excluir(key).then(retorno => {
      this.showDeleteMessages = true;;
    });
  }

  editar(key: any) {
    this.router.navigate(['/editarProfessor/'+ key]);
  }


  click(){

    this.router.navigate(["/Menu"]); 
  
  }
  click2(){

   

  }

}