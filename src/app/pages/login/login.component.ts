import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Usuario } from 'src/app/models/usuario'
import { UsuarioService } from 'src/app/services/usuario.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title = 'Musicalist!'

  submitEvent: Event | null = null

  loginForm = this.fb.group({
    password: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  })

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) {}

  onSubmit(event: Event) {
    if (this.loginForm.valid) {
      const correo = this.loginForm.value.email!
      const password = this.loginForm.value.password!
      this.usuarioService
        .login(correo, password)
        .then(({ id }) => {
          this.router.navigate([`/home/${id}`])
        })
        .catch(err => {
          console.log(err)
          this.submitEvent = event
        })
    } else {
      this.submitEvent = event
    }
  }
}
