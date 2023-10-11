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
  clickObservable: Observable<Event> = new Observable<Event>()

  private user: Usuario = new Usuario()

  registerForm = this.fb.group({
    nombre: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  })
  error: string = 'Could not register user'

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
      this.user.nombre = this.registerForm.value.nombre!
      this.user.email = this.registerForm.value.email!
      this.user.password = this.registerForm.value.password!

      this.user = await this.usuarioService.registro(this.user)

      if (this.user.id) {
        this.router.navigate([`/home/${this.user.id}`])
      }
    }
  }
}
