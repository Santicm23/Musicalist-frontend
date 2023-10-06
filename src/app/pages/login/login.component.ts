import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Musicalist!'

  user: Usuario = new Usuario(0, '', '', '', '');
  

  constructor(
    private router: Router,
  ) { }

  onSubmit() {
    // redirect to home page
    this.router.navigate(['/home/1']);
    
  }

}
