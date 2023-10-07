import { Injectable } from '@angular/core'
import axios from 'axios'

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor() {}

  async login(correo: string, password: string) {
    const res = await axios.post('http://localhost:8080/login', { correo, password })
    return res.data
  }
}
