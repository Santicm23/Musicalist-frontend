import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Usuario } from 'src/app/models/usuario'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title = 'Musicalist!'

  user: Usuario = new Usuario(0, '', '', '', '')

  submitted = false

  loginForm = this.fb.group({
    password: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  })

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {}

  onSubmit() {
    // redirect to home page
    this.submitted = true
    if (this.loginForm.valid) {
      this.router.navigate(['/home/1'])
    }
  }
}
