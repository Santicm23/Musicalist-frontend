import { Injectable } from '@angular/core'
import axios from 'axios'
import { Usuario } from '../models/usuario'
import { Cancion } from '../models/cancion'

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

  async getCancionesByUsuario(id: number): Promise<Array<Cancion>> {
    const res = await axios.get(`http://localhost:8080/usuario/${id}/canciones`)
    return res.data
  }
}
