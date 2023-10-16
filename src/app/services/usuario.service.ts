import { Injectable } from '@angular/core'
import axios from 'axios'
import { Usuario } from '../models/usuario'

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor() {}

  async login({ correo, contrasena }: Usuario): Promise<Usuario> {
    const res = await axios.post('http://localhost:8080/login', { correo, contrasena })
    return res.data
  }

  async registro({ nombre, correo, contrasena }: Usuario): Promise<Usuario> {
    const res = await axios.post('http://localhost:8080/usuario', {
      nombre,
      correo,
      contrasena,
    })
    return res.data
  }
}
