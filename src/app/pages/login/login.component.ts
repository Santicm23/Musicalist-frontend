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

  submitEvent: Event | null = null

  loginForm = this.fb.group({
    password: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  })

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {}

  onSubmit(event: Event) {
    if (this.loginForm.valid) {
      this.router.navigate(['/home/1'])
    } else {
      this.submitEvent = event
    }
  }
}
