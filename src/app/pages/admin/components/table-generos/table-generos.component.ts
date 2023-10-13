import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Genero } from 'src/app/models/genero'

@Component({
  selector: 'app-table-generos',
  templateUrl: './table-generos.component.html',
  styleUrls: ['./table-generos.component.css'],
})
export class TableGenerosComponent {
  @Output() eventDelete: EventEmitter<number | undefined> = new EventEmitter()
  generos: Genero[] = [
    new Genero(1, 'Rock', 'Música de los 80'),
    new Genero(2, 'Salsa', 'Del Caribe'),
    new Genero(3, 'Cumbia', 'De Colombia'),
    new Genero(4, 'Reguetón'),
    new Genero(5, 'Bachata', 'De República Dominicana'),
  ]

  editingId?: number
  deletingId?: number

  constructor() {}

  setEditable(id: number): void {
    this.editingId = id
    const inputElement = document.getElementById(`nombre-${id}`) as HTMLInputElement
    inputElement.focus()
  }

  cancelEdit(genero: Genero): void {
    if (genero.id === -1) {
      this.deleteGenero(genero.id)
      return
    }
    const inputNombre = document.getElementById(`nombre-${genero.id}`) as HTMLInputElement
    const inputDescripcion = document.getElementById(`descripcion-${genero.id}`) as HTMLInputElement

    inputNombre.value = genero.nombre
    inputDescripcion.value = genero.descripcion || ''
    this.editingId = undefined
  }

  createGenero(): void {
    this.generos.push(new Genero(-1, '', ''))
    this.editingId = -1
    setTimeout(() => {
      const inputElement = document.getElementById(`nombre--1`) as HTMLInputElement
      inputElement.focus()
    }, 0)
  }

  readGeneros(): void {}

  updateGenero(genero: Genero): void {
    if (genero.id === -1) genero.id = this.generos.length + 1

    const inputNombre = document.getElementById(`nombre-${genero.id}`) as HTMLInputElement
    const inputDescripcion = document.getElementById(`descripcion-${genero.id}`) as HTMLInputElement

    genero.nombre = inputNombre.value
    genero.descripcion = inputDescripcion.value
    this.editingId = undefined
  }

  onDelete(id: number): void {
    this.deletingId = id
    this.eventDelete.emit(id)
  }

  deleteGenero(id: number): void {
    const index = this.generos.findIndex(g => g.id === id)
    this.generos.splice(index, 1)
    this.editingId = undefined
  }
}
