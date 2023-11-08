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
  private axiosPublicInstance = axios.create({
    baseURL: 'http://localhost:8081/public',
  })

  private axiosInstance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
  })

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  async getInfoUsuario(token: String): Promise<Usuario> {
    const axiosTemp = axios.create({
      baseURL: 'http://localhost:8081',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const res = await axiosTemp.post('/info')

    return res.data
  }

  async login({ correo, contrasena }: Usuario): Promise<Usuario> {
    const res = await this.axiosPublicInstance.post('/login', { correo, contrasena })

    const { token } = res.data

    this.localStorageService.saveToken(token)

    return await this.getInfoUsuario(token)
  }

  async registro({ nombre, correo, contrasena }: Usuario): Promise<Usuario> {
    const res = await this.axiosPublicInstance.post('/usuario', {
      nombre,
      correo,
      contrasena,
    })

    const { token } = res.data

    this.localStorageService.saveToken(token)

    return await this.getInfoUsuario(token)
  }

  async getCancionesByUsuario(id: number): Promise<Array<Cancion>> {
    const token = this.localStorageService.getToken()

    if (!token) this.logout()

    const res = await this.axiosInstance.get(`/usuario/${id}/canciones`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  }

  async votarCancion(uid: number, cid: number): Promise<void> {
    const token = this.localStorageService.getToken()

    if (!token) this.logout()

    const res = await this.axiosInstance.post(`/usuario/${uid}/cancion/${cid}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  }

  async desvotarCancion(uid: number, cid: number): Promise<void> {
    const token = this.localStorageService.getToken()

    if (!token) this.logout()

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
