import { Component, Input, Output } from '@angular/core'
import { Subject } from 'rxjs'
import { Cancion } from 'src/app/models/cancion'
import { Genero } from 'src/app/models/genero'
import { CancionService } from 'src/app/services/cancion.service'

@Component({
  selector: 'app-table-canciones',
  templateUrl: './table-canciones.component.html',
  styleUrls: ['./table-canciones.component.css'],
})
export class TableCancionesComponent {
  @Input() eventConfirm: Subject<boolean> = new Subject()
  @Output() eventDelete: Subject<number | undefined> = new Subject()
  canciones: Cancion[] = []

  editingId?: number
  deletingId?: number

  constructor(private cancionService: CancionService) {}

  ngOnInit(): void {
    this.readCanciones()
    this.eventConfirm.subscribe(bool => {
      if (bool && this.deletingId) this.deleteCancion(this.deletingId)
      this.deletingId = undefined
    })
  }

  setEditable(id: number): void {
    const cancion = this.canciones.find(g => g.id === this.editingId)
    if (cancion) this.cancelEdit(cancion)

    this.editingId = id
    const inputElement = document.getElementById(`nombre-${id}`) as HTMLInputElement
    inputElement.focus()
  }

  cancelEdit(cancion: Cancion): void {
    if (cancion.id === -1) {
      const index = this.canciones.findIndex(g => g.id === cancion.id)
      this.canciones.splice(index, 1)
      this.editingId = undefined
      return
    }
    const inputNombre = document.getElementById(`nombre-${cancion.id}`) as HTMLInputElement
    const inputArtista = document.getElementById(`artista-${cancion.id}`) as HTMLInputElement
    const inputAlbum = document.getElementById(`album-${cancion.id}`) as HTMLInputElement
    const inputDuracion = document.getElementById(`duracion-${cancion.id}`) as HTMLInputElement
    const inputGenero = document.getElementById(`genero-${cancion.id}`) as HTMLInputElement
    const inputFecha = document.getElementById(`fecha-${cancion.id}`) as HTMLInputElement
    const inputImagen = document.getElementById(`imagen-${cancion.id}`) as HTMLInputElement

    inputNombre.value = cancion.nombre
    inputArtista.value = cancion.artista
    inputAlbum.value = cancion.album
    inputDuracion.value = cancion.duracion
    inputGenero.value = cancion.genero.nombre
    inputFecha.value = this.formatDate(cancion.fechaLanzamiento)
    inputImagen.value = cancion.imagen || ''
    this.editingId = undefined
  }

  createCancion(): void {
    if (this.editingId === -1) return
    this.canciones.push(new Cancion(-1, '', '', '', '', new Genero(-1, ''), new Date()))
    this.editingId = -1
    setTimeout(() => {
      const inputElement = document.getElementById(`nombre--1`) as HTMLInputElement
      inputElement.focus()
    }, 0)
  }

  async readCanciones(): Promise<void> {
    this.canciones = (await this.cancionService.getCanciones()).map(c => {
      c.fechaLanzamiento = new Date(c.fechaLanzamiento)
      return c
    })
  }

  async updateCancion(cancion: Cancion): Promise<void> {
    const inputNombre = document.getElementById(`nombre-${cancion.id}`) as HTMLInputElement
    const inputArtista = document.getElementById(`artista-${cancion.id}`) as HTMLInputElement
    const inputAlbum = document.getElementById(`album-${cancion.id}`) as HTMLInputElement
    const inputDuracion = document.getElementById(`duracion-${cancion.id}`) as HTMLInputElement
    const inputGenero = document.getElementById(`genero-${cancion.id}`) as HTMLInputElement
    const inputFecha = document.getElementById(`fecha-${cancion.id}`) as HTMLInputElement
    const inputImagen = document.getElementById(`imagen-${cancion.id}`) as HTMLInputElement

    cancion.nombre = inputNombre.value
    cancion.artista = inputArtista.value
    cancion.album = inputAlbum.value
    cancion.duracion = inputDuracion.value
    cancion.genero.id = Number(inputGenero.value)
    cancion.fechaLanzamiento = new Date(inputFecha.value)
    cancion.imagen = inputImagen.value

    if (cancion.id === -1) {
      const cancionTemp = await this.cancionService.createCancion(cancion)
      cancion.id = cancionTemp.id
    } else {
      await this.cancionService.updateCancion(cancion)
    }

    this.editingId = undefined
  }

  onDelete(id: number): void {
    this.deletingId = id
    this.eventDelete.next(id)
  }

  deleteCancion(id: number): void {
    const index = this.canciones.findIndex(g => g.id === id)
    this.canciones.splice(index, 1)

    this.cancionService.deleteCancion(id)
    this.editingId = undefined
  }

  formatDate(date: Date) {
    return date.toISOString().split('T')[0]
  }
}
