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
    const inputElement = document.getElementById('input-' + genero.id)
    inputElement?.focus()
  }

  createGenero(): void {
    const nextId = this.generos[this.generos.length - 1].id + 1
    this.generos.push(new Genero(nextId, '', ''))
    this.editId = nextId
  }

  readGeneros(): void {}

  updateGenero(genero: Genero): void {}

  deleteGenero(genero: Genero): void {
    const index = this.generos.findIndex(g => g.id === genero.id)
    this.generos.splice(index, 1)
    this.editId = -1
  }
}
