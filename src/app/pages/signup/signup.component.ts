import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  registerForm = this.fb.group({
    nombre: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  onSubmit() {
    // redirect to home page
    if (this.registerForm.valid) {
      this.user.nombre = this.registerForm.value.nombre!;
      this.user.email = this.registerForm.value.email!;
      this.user.password = this.registerForm.value.password!;
      this.router.navigate(['/home/1']);
    } else {
      alert("Formulario inválido");
    }
  }

}
