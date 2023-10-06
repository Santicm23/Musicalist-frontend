import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
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
