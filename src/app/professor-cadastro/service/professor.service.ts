import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProfessorModel } from '../model/professor.module';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {


  atualizar(key: string, professor: ProfessorModel) {
    throw new Error('Method not implemented.');
  }
  getProfessor(key: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private db: AngularFireDatabase,
    private storage: AngularFireStorage) { }



  salvar(professor: ProfessorModel) { 
    return this.db.list('professor').push(professor);   
  }

  excluir(key: any) {
    return this.db.object('professor/'+key).remove();
  }

  carregar(key: any) : Observable<any> {
    return this.db.object('professor/'+key).valueChanges();
  }

  alterar(key: any, professor: ProfessorModel) {
    return this.db.object('professor/' + key).update(professor);
  }

  listar() {
    return this.db.list('professor').snapshotChanges()
    .pipe(
      map(changes => {
        console.log(changes);
        return changes.map(c => ({ key: c.key, 
          ...c.payload.val() as ProfessorModel}));
      })
    );
  }

  uploadImagem(file: any) {
    const path = 'imagens/'+file.name;
    const ref = this.storage.ref(path);
    return ref.put(file);
  }
}