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
  clickObservable: Observable<Event> = new Observable<Event>()

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

  ngOnInit(): void {
    this.clickObservable = fromEvent(document.getElementById('btn-login')!, 'click')
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      this.user.email = this.loginForm.value.email!
      this.user.password = this.loginForm.value.password!

      this.user = await this.usuarioService.login(this.user)

      if (this.user.id) {
        if (this.user.admin) {
          this.router.navigate([`/admin/${this.user.id}`])
        } else {
          this.router.navigate([`/home/${this.user.id}`])
        }
      }
    }
  }
}
