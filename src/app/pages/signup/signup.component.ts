import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Observable, fromEvent } from 'rxjs'
import { Usuario } from 'src/app/models/usuario'
import { UsuarioService } from 'src/app/services/usuario.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  title = 'Musicalist!'

  user: Usuario = new Usuario(0, '', '', '')

  clickObservable: Observable<Event> = new Observable<Event>()

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

  ngOnInit(): void {
    this.clickObservable = fromEvent(document.getElementById('btn-signup')!, 'click')
  }

  async onSubmit() {
    if (this.registerForm.valid) {
      const nombre = this.registerForm.value.nombre!
      const email = this.registerForm.value.email!
      const password = this.registerForm.value.password!

      this.user = await this.usuarioService.registro(nombre, email, password)
      this.router.navigate([`/home/${this.user.id}`])
    }
  }
}
