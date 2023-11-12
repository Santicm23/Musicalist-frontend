import { Injectable } from '@angular/core'
import axios from 'axios'
import { Cancion } from '../models/cancion'
import { Router } from '@angular/router'
import { LocalStorageService } from './local-storage.service'
import { UsuarioService } from './usuario.service'

@Injectable({
  providedIn: 'root',
})
export class CancionService {
  private axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
  })

  constructor(
    private localStorageService: LocalStorageService,
    private usuarioService: UsuarioService
  ) {}

  async getCanciones(): Promise<Array<Cancion>> {
    this.usuarioService.renovarToken()

    const token = this.localStorageService.getToken()

    const response = await this.axiosInstance.get('http://localhost:8080/canciones', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  }

  async createCancion(cancion: Cancion): Promise<Cancion> {
    this.usuarioService.renovarToken()

    const token = this.localStorageService.getToken()

    const response = await this.axiosInstance.post('http://localhost:8080/cancion', cancion, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  }

  async updateCancion(cancion: Cancion): Promise<Cancion> {
    this.usuarioService.renovarToken()

    const token = this.localStorageService.getToken()

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
    this.usuarioService.renovarToken()

    const token = this.localStorageService.getToken()

    await this.axiosInstance.delete(`http://localhost:8080/cancion/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  }

  async getCancionesByGenero(id: number): Promise<Array<Cancion>> {
    this.usuarioService.renovarToken()

    const token = this.localStorageService.getToken()

    const response = await this.axiosInstance.get(`http://localhost:8080/genero/${id}/canciones`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  }

  async buscarCanciones(filtro: string): Promise<Array<Cancion>> {
    this.usuarioService.renovarToken()

    const token = this.localStorageService.getToken()

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
}
