import { Injectable } from '@angular/core'
import axios from 'axios'
import { Cancion } from '../models/cancion'

@Injectable({
  providedIn: 'root',
})
export class CancionService {
  constructor() {}

  async getCanciones(): Promise<Array<Cancion>> {
    const response = await axios.get('http://localhost:8080/canciones')
    return response.data
  }

  async createCancion(cancion: Cancion): Promise<Cancion> {
    const response = await axios.post('http://localhost:8080/cancion', cancion)
    return response.data
  }

  async updateCancion(cancion: Cancion): Promise<Cancion> {
    const response = await axios.put(`http://localhost:8080/cancion/${cancion.id}`, cancion)
    return response.data
  }

  async deleteCancion(id: number): Promise<void> {
    await axios.delete(`http://localhost:8080/cancion/${id}`)
  }

  async getCancionesByGenero(id: number): Promise<Array<Cancion>> {
    const response = await axios.get(`http://localhost:8080/genero/${id}/canciones`)
    return response.data
  }

  async buscarCanciones(filtro: string): Promise<Array<Cancion>> {
    const response = await axios.get(`http://localhost:8080/buscar/canciones/${filtro}`)
    return response.data
  }
}
