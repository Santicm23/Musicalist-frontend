export class Cancion {
  constructor(
    public id: number,
    public nombre: string,
    public artista: string,
    public album: string,
    public duracion: number,
    public genero: string,
    public fecha: Date,
    public imagen: string,
    public usuario: number
  ) { }
}
