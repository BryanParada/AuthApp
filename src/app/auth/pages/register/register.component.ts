import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  myFormRegister: FormGroup = this.fb.group({
    name    : ['Test 4', [Validators.required ]],
    email   : ['test4@test4.com', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$") ]],
    password: ['123456', [Validators.required, Validators.minLength(6) ]],
  
}); 


  constructor( private fb: FormBuilder ) { }

  register() {
    console.log(this.myFormRegister.value);
    console.log(this.myFormRegister.valid);
  }

}
