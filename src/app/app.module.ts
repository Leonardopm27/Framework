import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

import { CadastroComponent } from './cadastro/cadastro.component';
import { ProfessorCadastroComponent } from './professor-cadastro/professor-cadastro.component';
import { AreaProfessorComponent } from './area-professor/area-professor.component';
import { AreAlunoComponent } from './are-aluno/are-aluno.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../enviroment/enviroment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { RouterModule } from '@angular/router';
import { ListaProfessorComponent } from './lista-professor/lista-professor.component';
import { EditarProfessorComponent } from './editar-professor/editar-professor.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { ListaAlunoComponent } from './lista-aluno/lista-aluno.component';
import { EditarAlunoComponent } from './editar-aluno/editar-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    CadastroComponent,
    ProfessorCadastroComponent,
    AreaProfessorComponent,
    AreAlunoComponent,
    ListaProfessorComponent,
    EditarProfessorComponent,
    CadastroAlunoComponent,
    ListaAlunoComponent,
    EditarAlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    //imports para adicionar
    //import { AngularFireModule } from '@angular/fire/compat';
    AngularFireModule.initializeApp(environment.firebase),
    //import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
