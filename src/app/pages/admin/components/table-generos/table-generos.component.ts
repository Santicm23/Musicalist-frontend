import { Component, Input, Output } from '@angular/core'
import { Subject } from 'rxjs'
import { Genero } from 'src/app/models/genero'
import { GeneroService } from 'src/app/services/genero.service'

@Component({
  selector: 'app-table-generos',
  templateUrl: './table-generos.component.html',
  styleUrls: ['./table-generos.component.css'],
})
export class TableGenerosComponent {
  @Input() eventConfirm: Subject<boolean> = new Subject()
  @Output() eventDelete: Subject<number | undefined> = new Subject()
  generos: Genero[] = []

  editingId?: number
  deletingId?: number

  constructor(private generoService: GeneroService) {}

  ngOnInit(): void {
    this.readGeneros()
    this.eventConfirm.subscribe(bool => {
      if (bool && this.deletingId) this.deleteGenero(this.deletingId)
      this.deletingId = undefined
    })
  }

  setEditable(id: number): void {
    const genero = this.generos.find(g => g.id === this.editingId)
    if (genero) this.cancelEdit(genero)

    this.editingId = id
    const inputElement = document.getElementById(`nombre-${id}`) as HTMLInputElement
    inputElement.focus()
  }

  cancelEdit(genero: Genero): void {
    if (genero.id === -1) {
      const index = this.generos.findIndex(g => g.id === genero.id)
      this.generos.splice(index, 1)
      this.editingId = undefined
      return
    }
    const inputNombre = document.getElementById(`nombre-${genero.id}`) as HTMLInputElement
    const inputDescripcion = document.getElementById(`descripcion-${genero.id}`) as HTMLInputElement

    inputNombre.value = genero.nombre
    inputDescripcion.value = genero.descripcion || ''
    this.editingId = undefined
  }

  createGenero(): void {
    if (this.editingId === -1) return
    this.generos.push(new Genero(-1, '', ''))
    this.editingId = -1
    setTimeout(() => {
      const inputElement = document.getElementById(`nombre--1`) as HTMLInputElement
      inputElement.focus()
    }, 0)
  }

  async readGeneros(): Promise<void> {
    this.generos = await this.generoService.getGeneros()
  }

  async updateGenero(genero: Genero): Promise<void> {
    const inputNombre = document.getElementById(`nombre-${genero.id}`) as HTMLInputElement
    const inputDescripcion = document.getElementById(`descripcion-${genero.id}`) as HTMLInputElement
    const inputImagen = document.getElementById(`imagen-${genero.id}`) as HTMLInputElement

    genero.nombre = inputNombre.value
    genero.descripcion = inputDescripcion.value
    genero.imagen = inputImagen.value

    if (genero.id === -1) {
      const { id } = await this.generoService.createGenero(genero)
      genero.id = id
    } else {
      await this.generoService.updateGenero(genero)
    }

    this.editingId = undefined
  }

  onDelete(id: number): void {
    this.deletingId = id
    this.eventDelete.next(id)
  }

  deleteGenero(id: number): void {
    const index = this.generos.findIndex(g => g.id === id)
    this.generos.splice(index, 1)

    this.generoService.deleteGenero(id)
    this.editingId = undefined
  }
}
