import { Injectable } from '@angular/core'
import axios, { AxiosInstance } from 'axios'
import { Usuario } from '../models/usuario'
import { Cancion } from '../models/cancion'
import { LocalStorageService } from './local-storage.service'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private axiosAuthPublicInstance = axios.create({
    baseURL: 'http://localhost:8081/public',
  })

  private axiosAuthInstance = axios.create({
    baseURL: 'http://localhost:8081',
  })

  private axiosInstance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
  })

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  async getInfoUsuario(token: String): Promise<Usuario> {
    const res = await this.axiosAuthInstance.post('/info', null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return res.data
  }

  async login({ correo, contrasena }: Usuario): Promise<Usuario> {
    const res = await this.axiosAuthPublicInstance.post('/login', { correo, contrasena })

    const { token } = res.data

    this.localStorageService.saveToken(token)

    return await this.getInfoUsuario(token)
  }

  async registro({ nombre, correo, contrasena }: Usuario): Promise<Usuario> {
    const res = await this.axiosAuthPublicInstance.post('/usuario', {
      nombre,
      correo,
      contrasena,
    })

    const { token } = res.data

    this.localStorageService.saveToken(token)

    return await this.getInfoUsuario(token)
  }

  async renovarToken(): Promise<void> {
    const token = this.localStorageService.getToken()

    if (!token) this.logout()

    try {
      const res = await this.axiosAuthInstance.post('/reniew', null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const { token: newToken } = res.data

      this.localStorageService.saveToken(newToken)
    } catch (error) {
      this.logout()
    }
  }

  async getCancionesByUsuario(id: number): Promise<Array<Cancion>> {
    this.renovarToken()

    const token = this.localStorageService.getToken()

    const res = await this.axiosInstance.get(`/usuario/${id}/canciones`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  }

  async votarCancion(uid: number, cid: number): Promise<void> {
    this.renovarToken()

    const token = this.localStorageService.getToken()

    const res = await this.axiosInstance.post(`/usuario/${uid}/cancion/${cid}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  }

  async desvotarCancion(uid: number, cid: number): Promise<void> {
    this.renovarToken()

    const token = this.localStorageService.getToken()

    const res = await this.axiosInstance.delete(`/usuario/${uid}/cancion/${cid}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  }

  async logout(): Promise<void> {
    this.localStorageService.deleteToken()

    this.router.navigate(['/'])
  }
}
