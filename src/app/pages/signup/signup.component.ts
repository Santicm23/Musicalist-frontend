import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Usuario } from 'src/app/models/usuario'
import { UsuarioService } from 'src/app/services/usuario.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  title = 'Musicalist!'

  user: Usuario = new Usuario(0, '', '', '')

  submitEvent: Event | null = null

  registerForm = this.fb.group({
    nombre: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  })

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) {}

  async onSubmit(event: Event) {
    if (this.registerForm.valid) {
      const nombre = this.registerForm.value.nombre!
      const email = this.registerForm.value.email!
      const password = this.registerForm.value.password!

      this.user = await this.usuarioService.registro(nombre, email, password)
      this.router.navigate([`/home/${this.user.id}`])
    } else {
      this.submitEvent = event
    }
  }
}
