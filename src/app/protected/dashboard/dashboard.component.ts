import { Component  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
    * {
      margin: 15px;
    }
    `
  ]
})
export class DashboardComponent {

  get user(){
    return this.AuthService.userServ;
  }

  constructor(private router: Router,
              private AuthService: AuthService) { }
 
  logout(){

      this.router.navigateByUrl('/auth');

  }

}
