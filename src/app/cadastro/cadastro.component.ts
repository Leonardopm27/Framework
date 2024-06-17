import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  showErrorMessages: any;

  login = new FormControl('',
    [Validators.required]);

  password = new FormControl('',
    [Validators.required]);
  constructor(private router: Router,
    public afAuth: AngularFireAuth,) { }

    cadastrar() {
      
      
      
      console.log('Nome: ' + this.login.value);
      console.log('Senha  ' + this.password.value);
      
     
  
      this.afAuth
       
        .createUserWithEmailAndPassword(this.login.value!, this.password.value!)
        .then((result) => {          
          console.log(result.user);
          localStorage.setItem('user', JSON.stringify(result.user));
          this.router.navigate(['/login']);
          
         
        })
        .catch((error) => {
          this.showErrorMessages = true;
          console.log(error);
        });
  
  
      //this.router.navigate(['/layout/produto']);
    }

    voltarLogin(){
      this.router.navigate(['/login']);
    }


  

}
