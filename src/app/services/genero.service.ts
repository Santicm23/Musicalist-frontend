import { Injectable } from '@angular/core'
import axios from 'axios'
import { Genero } from '../models/genero'

@Injectable({
  providedIn: 'root',
})
export class GeneroService {
  constructor() {}

  async getGeneros(): Promise<Array<Genero>> {
    const res = await axios.get('http://localhost:8080/generos')
    return res.data
  }

  async createGenero(genero: Genero): Promise<Genero> {
    const res = await axios.post('http://localhost:8080/genero', genero)
    return res.data
  }

  async updateGenero(genero: Genero): Promise<Genero> {
    const res = await axios.put(`http://localhost:8080/genero/${genero.id}`, genero)
    return res.data
  }

  async deleteGenero(id: number): Promise<void> {
    await axios.delete(`http://localhost:8080/genero/${id}`)
  }
}
