
import { Component } from '@angular/core';

import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import {AlunoModel  } from './model/aluno.model';
import { AlunoService } from '../cadastro-aluno/service/aluno.service';
import { Router } from 'express';
import { ActivatedRoute } from '@angular/router';
import { Console } from 'node:console';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrl: './cadastro-aluno.component.css'
})
export class CadastroAlunoComponent {
  
 
}
