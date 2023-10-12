import { Component } from '@angular/core'
import { Genero } from 'src/app/models/genero'

@Component({
  selector: 'app-table-generos',
  templateUrl: './table-generos.component.html',
  styleUrls: ['./table-generos.component.css'],
})
export class TableGenerosComponent {
  generos: Genero[] = [
    new Genero(1, 'Rock', 'Música de los 80'),
    new Genero(2, 'Salsa', 'Del Caribe'),
    new Genero(3, 'Cumbia', 'De Colombia'),
    new Genero(4, 'Reguetón', 'De Puerto Rico'),
    new Genero(5, 'Bachata', 'De República Dominicana'),
  ]

  editId: number = -1

  constructor() {}

  setEditable(genero: Genero): void {
    this.editId = genero.id
  }

  createGenero(): void {}

  readGeneros(): void {}

  updateGenero(genero: Genero): void {
    console.log(genero)
  }

  deleteGenero(genero: Genero): void {
    console.log(genero)
  }
}
