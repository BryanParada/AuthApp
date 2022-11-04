import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  myFormLogin: FormGroup = this.fb.group({
      email   : ['test1@test.com', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$") ]],
      password: ['123456', [Validators.required, Validators.minLength(6) ]],
    
  }); 

  constructor( private fb: FormBuilder,
               private router: Router,
               private authService: AuthService) { }
 
  login(){
    console.log(this.myFormLogin.value);
    console.log(this.myFormLogin.valid);

    const {email, password} = this.myFormLogin.value;

    this.authService.login(email, password)
        .subscribe( ok =>{ 
           console.log(ok);
          if ( ok === true ) {
            this.router.navigateByUrl('/dashboard');
          }else{
            Swal.fire('Error', ok, 'error')
          }
         
        })

    //this.router.navigateByUrl('/dashboard')
  }

}
