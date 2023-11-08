import { Injectable } from '@angular/core'
import axios from 'axios'
import { Genero } from '../models/genero'
import { Router } from '@angular/router'
import { LocalStorageService } from './local-storage.service'

@Injectable({
  providedIn: 'root',
})
export class GeneroService {
  private axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
  })

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  async getGeneros(): Promise<Array<Genero>> {
    const token = this.localStorageService.getToken()

    if (!token) this.logout()

    const res = await this.axiosInstance.get('http://localhost:8080/generos', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  }

  async getGeneroById(id: number): Promise<Genero> {
    const token = this.localStorageService.getToken()

    if (!token) this.logout()

    const res = await this.axiosInstance.get(`http://localhost:8080/genero/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  }

  async createGenero(genero: Genero): Promise<Genero> {
    const token = this.localStorageService.getToken()

    if (!token) this.logout()

    const res = await this.axiosInstance.post('http://localhost:8080/genero', genero, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  }

  async updateGenero(genero: Genero): Promise<Genero> {
    const token = this.localStorageService.getToken()

    if (!token) this.logout()

    const res = await this.axiosInstance.put(`http://localhost:8080/genero/${genero.id}`, genero, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  }

  async deleteGenero(id: number): Promise<void> {
    const token = this.localStorageService.getToken()

    if (!token) this.logout()

    await this.axiosInstance.delete(`http://localhost:8080/genero/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  }

  async logout(): Promise<void> {
    this.localStorageService.deleteToken()

    this.router.navigate(['/'])
  }
}
