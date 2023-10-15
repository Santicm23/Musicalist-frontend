import { Injectable } from '@angular/core'
import axios from 'axios'
import { Usuario } from '../models/usuario'

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor() {}

  async login({ email, password }: Usuario): Promise<Usuario> {
    const res = await axios.post('http://localhost:8080/login', { correo: email, password })
    return res.data
  }

  async registro({ nombre, email, password }: Usuario): Promise<Usuario> {
    const res = await axios.post('http://localhost:8080/usuario', {
      nombre,
      correo: email,
      password,
    })
    return res.data
  }
}
