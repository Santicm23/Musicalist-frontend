import { Injectable } from '@angular/core'
import axios from 'axios'
import { Cancion } from '../models/cancion'
import { Router } from '@angular/router'
import { LocalStorageService } from './local-storage.service'

@Injectable({
  providedIn: 'root',
})
export class CancionService {
  private axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
  })

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  async getCanciones(): Promise<Array<Cancion>> {
    const token = this.localStorageService.getToken()

    if (!token) this.logout()

    const response = await this.axiosInstance.get('http://localhost:8080/canciones', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  }

  async createCancion(cancion: Cancion): Promise<Cancion> {
    const token = this.localStorageService.getToken()

    if (!token) this.logout()

    const response = await this.axiosInstance.post('http://localhost:8080/cancion', cancion, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  }

  async updateCancion(cancion: Cancion): Promise<Cancion> {
    const token = this.localStorageService.getToken()

    if (!token) this.logout()

    const response = await this.axiosInstance.put(
      `http://localhost:8080/cancion/${cancion.id}`,
      cancion,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return response.data
  }

  async deleteCancion(id: number): Promise<void> {
    const token = this.localStorageService.getToken()

    if (!token) this.logout()

    await this.axiosInstance.delete(`http://localhost:8080/cancion/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  }

  async getCancionesByGenero(id: number): Promise<Array<Cancion>> {
    const token = this.localStorageService.getToken()

    if (!token) this.logout()

    const response = await this.axiosInstance.get(`http://localhost:8080/genero/${id}/canciones`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  }

  async buscarCanciones(filtro: string): Promise<Array<Cancion>> {
    const token = this.localStorageService.getToken()

    if (!token) this.logout()

    const response = await this.axiosInstance.get(
      `http://localhost:8080/buscar/canciones/${filtro}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return response.data
  }

  async logout(): Promise<void> {
    this.localStorageService.deleteToken()

    this.router.navigate(['/'])
  }
}
