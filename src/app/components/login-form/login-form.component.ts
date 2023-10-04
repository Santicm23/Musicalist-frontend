import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  user: {'email': string, 'password': string} = {
    'email': '',
    'password': ''
  };

  constructor(
    private router: Router,
  ) { }

  onSubmit() {
    // redirect to home page
    this.router.navigate(['/home/1']);
    
  }
}
