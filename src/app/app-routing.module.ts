import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ProfessorCadastroComponent } from './professor-cadastro/professor-cadastro.component';
import { AreaProfessorComponent } from './area-professor/area-professor.component';
import { AreAlunoComponent } from './are-aluno/are-aluno.component';
import { ListaProfessorComponent } from './lista-professor/lista-professor.component';
import { EditarProfessorComponent } from './editar-professor/editar-professor.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { ListaAlunoComponent } from './lista-aluno/lista-aluno.component';
import { EditarAlunoComponent } from './editar-aluno/editar-aluno.component';


const routes: Routes = [
  {path:"", component: LoginComponent},
  {path:"login", component: LoginComponent},
  {path:"cadastro", component:CadastroComponent},
  {path:"criarprofessor", component:ProfessorCadastroComponent},
  {path:"Menu", component:AreaProfessorComponent},
  {path:"aluno", component:AreAlunoComponent},
  {path:"listaProfessor", component:ListaProfessorComponent},
  {path: 'editarProfessor/:key', component:EditarProfessorComponent},
  {path:"editaProfessor", component:EditarProfessorComponent},
  {path:"criarAluno", component:CadastroAlunoComponent},
  {path:"listarAluno", component:ListaAlunoComponent},
  {path:"editarAluno", component:EditarAlunoComponent}


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
