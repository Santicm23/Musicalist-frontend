import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Observable, fromEvent } from 'rxjs'
import { Usuario } from 'src/app/models/usuario'
import { UsuarioService } from 'src/app/services/usuario.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  title = 'Musicalist!'

  user: Usuario = new Usuario(0, '', '', '')

  clickObservable: Observable<Event> = new Observable<Event>()

  loginForm = this.fb.group({
    password: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  })

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.clickObservable = fromEvent(document.getElementById('btn-login')!, 'click')
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      const correo = this.loginForm.value.email!
      const password = this.loginForm.value.password!

      this.user = await this.usuarioService.login(correo, password)
      if (this.user.id) {
        this.router.navigate([`/home/${this.user.id}`])
      }
    }
  }
}
