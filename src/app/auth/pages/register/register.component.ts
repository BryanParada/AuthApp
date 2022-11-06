import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from "sweetalert2";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  myFormRegister: FormGroup = this.fb.group({
    name    : ['Test 4', [Validators.required ]],
    email   : ['test4@test.com', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$") ]],
    password: ['123456', [Validators.required, Validators.minLength(6) ]],
  
}); 


  constructor( private fb: FormBuilder,
               private router: Router,
               private authService: AuthService ) { }

  register() {
    console.log(this.myFormRegister.value);
    console.log(this.myFormRegister.valid);

    const {name, email, password} = this.myFormRegister.value;

    this.authService.registerServ(name, email, password)
    .subscribe( ok =>{ 
      console.log(ok);
     if ( ok === true ) {
      this.router.navigateByUrl('/dashboard')
     }else{
       Swal.fire('Error', ok, 'error')
     }
    
   })

    
  }



}
