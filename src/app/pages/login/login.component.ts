import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Subject } from 'rxjs'
import { Usuario } from 'src/app/models/usuario'
import { UsuarioService } from 'src/app/services/usuario.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  errorSubject: Subject<string> = new Subject<string>()

  private user: Usuario = new Usuario()

  loginForm = this.fb.group({
    password: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  })
  error: string = 'Could not login user'

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) {}

  async onSubmit() {
    if (this.loginForm.valid) {
      this.user.correo = this.loginForm.value.email!
      this.user.contrasena = this.loginForm.value.password!

      try {
        this.user = await this.usuarioService.login(this.user)

        if (this.user.admin) {
          this.router.navigate([`/admin/${this.user.id}`])
        } else {
          this.router.navigate([`/home/${this.user.id}`])
        }
      } catch (error) {
        this.errorSubject.next(this.error)
      }
    } else {
      this.errorSubject.next(this.error)
    }
  }
}
