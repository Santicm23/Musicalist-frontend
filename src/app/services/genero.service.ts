import { Injectable } from '@angular/core'
import axios from 'axios'
import { Genero } from '../models/genero'
import { LocalStorageService } from './local-storage.service'
import { UsuarioService } from './usuario.service'

@Injectable({
  providedIn: 'root',
})
export class GeneroService {
  private axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
  })

  constructor(
    private localStorageService: LocalStorageService,
    private usuarioService: UsuarioService
  ) {}

  async getGeneros(): Promise<Array<Genero>> {
    this.usuarioService.renovarToken()

    const token = this.localStorageService.getToken()

    const res = await this.axiosInstance.get('http://localhost:8080/generos', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  }

  async getGeneroById(id: number): Promise<Genero> {
    this.usuarioService.renovarToken()

    const token = this.localStorageService.getToken()

    const res = await this.axiosInstance.get(`http://localhost:8080/genero/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  }

  async createGenero(genero: Genero): Promise<Genero> {
    this.usuarioService.renovarToken()

    const token = this.localStorageService.getToken()

    const res = await this.axiosInstance.post('http://localhost:8080/genero', genero, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  }

  async updateGenero(genero: Genero): Promise<Genero> {
    this.usuarioService.renovarToken()

    const token = this.localStorageService.getToken()

    const res = await this.axiosInstance.put(`http://localhost:8080/genero/${genero.id}`, genero, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  }

  async deleteGenero(id: number): Promise<void> {
    this.usuarioService.renovarToken()

    const token = this.localStorageService.getToken()

    await this.axiosInstance.delete(`http://localhost:8080/genero/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  }
}
