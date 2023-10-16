import { Genero } from './genero'

export class Cancion {
  constructor(
    public id: number,
    public nombre: string,
    public artista: string,
    public album: string,
    public duracion: string,
    public genero: Genero,
    public fechaLanzamiento: Date,
    public imagen?: string
  ) {}
}
