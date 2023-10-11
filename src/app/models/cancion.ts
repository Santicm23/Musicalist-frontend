import { Time } from '@angular/common'

export class Cancion {
  constructor(
    public id: number,
    public nombre: string,
    public artista: string,
    public album: string,
    public duracion: Time,
    public genero: string,
    public fecha: Date,
    public imagen?: string
  ) {}
}
