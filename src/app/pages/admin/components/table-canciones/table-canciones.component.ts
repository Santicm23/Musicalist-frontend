import { Component, Input, Output } from '@angular/core'
import { Subject } from 'rxjs'
import { Cancion } from 'src/app/models/cancion'

@Component({
  selector: 'app-table-canciones',
  templateUrl: './table-canciones.component.html',
  styleUrls: ['./table-canciones.component.css'],
})
export class TableCancionesComponent {
  @Input() eventConfirm: Subject<boolean> = new Subject()
  @Output() eventDelete: Subject<number | undefined> = new Subject()
  canciones: Cancion[] = [
    new Cancion(
      1,
      'Bohemia Rapsody',
      'Queen',
      'Exitos',
      '6:30',
      'Rock',
      new Date(),
      'data:image/jpeg;base64,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'
    ),
    new Cancion(
      2,
      'Believer',
      'Imagine Dragons',
      'Evolve',
      '3:20',
      'pop',
      new Date(),
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAY1BMVEX///8AAACdnZ2rq6v4+Pj09PTu7u7i4uJRUVGwsLD7+/tcXFza2tqZmZmjo6MVFRU7OzsiIiKTk5NDQ0PS0tLBwcEbGxstLS15eXljY2Nvb29ISEi4uLhpaWk1NTWBgYGJiYnaHN4CAAAChElEQVRoge3a23aqMBAGYJCjiLQoYFq12/d/yl2qQEgmgYQMrNXOf1lYfEWGnIjnUSgUCoVCAVKkPmrSAmSTN1y2zVsiuzE+2yaW4MM68GGjG5Zveb8WvBfg3VrwTgWXpwAhp2YKvoKvmoOcJ+AcC64mYCzXiwj+VXAWhuEGcM3Ssrncd+PGER2+Db3rJ09jw+NO7rYWHJ79cYKV4LsvploFBvrWcg04epfhvv/FhGvA9d9XgD8huBvrYMJiST9TPw+GeHD0BcLF74VDqKj7NgQR9uCpV4UPw0PkDB9OIJd5+DD4InfzQ1QYuOV/3bGlcFLrRt5So5n2h5bBVfvGNOK8Sy2nkRu4u+xRfUrOv8wP7sASOO+HU/Bixk+y4PU6X9jooWT2cMzdjObXbusgCPa5MANfAI/GcbVOhmIPs3HdmE4rreHCFwKsHGHAleiaypYw1Axf5DUr53AM9vFnE9kO/oDc74ZJnBNmifJ/sYIfsCut09VXv2TSBPUVCzhQud8TQv684/MBKGRzGCjoIWw4r+uNpQdgCU+scnYdRjSMqj+cwFmph1/y6H27u4CnV+1ZHsbCOI9JlzGGlQXNp2zEvzyWwtaryfJYwQjWFrQ+Uo9tAsdLvo+IPbYBHF4XuNzyhzEMT7Rt5fnwrILWJreCNS303JSJBbygoIfwY4WZcKS6llm+QkM4gxdSzHM1hJnqQsY5GMEuP38xAxhcorPOYzbspKC5nGbC8VTXb5zdPHhZCw2mmAO7K2gut2n4iOG2naQeblwXVp9u74PqjtG2RnQVq/xwjR2CCSaYYIKt4c22VW22kWyzrXPbbRb0EmkFxX2g7ZHeZhtCKRQKhUL58/kPp/4mp3GMhcsAAAAASUVORK5CYII='
    ),
    new Cancion(3, 'El triste', 'Jose Jose', 'Exitos', '4:30', 'Balada', new Date()),
  ]

  editingId?: number
  deletingId?: number

  ngOnInit(): void {
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
      this.deleteCancion(cancion.id)
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
    inputGenero.value = cancion.genero
    inputFecha.value = this.formatDate(cancion.fecha)
    inputImagen.value = cancion.imagen || ''
    this.editingId = undefined
  }

  createCancion(): void {
    if (this.editingId === -1) return
    this.canciones.push(new Cancion(-1, '', '', '', '', '', new Date()))
    this.editingId = -1
    setTimeout(() => {
      const inputElement = document.getElementById(`nombre--1`) as HTMLInputElement
      inputElement.focus()
    }, 0)
  }

  readCanciones(): void {}

  updateCancion(cancion: Cancion): void {
    const inputNombre = document.getElementById(`nombre-${cancion.id}`) as HTMLInputElement
    const inputArtista = document.getElementById(`artista-${cancion.id}`) as HTMLInputElement
    const inputAlbum = document.getElementById(`album-${cancion.id}`) as HTMLInputElement
    const inputDuracion = document.getElementById(`duracion-${cancion.id}`) as HTMLInputElement
    const inputGenero = document.getElementById(`genero-${cancion.id}`) as HTMLInputElement
    const inputFecha = document.getElementById(`fecha-${cancion.id}`) as HTMLInputElement
    const inputImagen = document.getElementById(`imagen-${cancion.id}`) as HTMLInputElement

    if (cancion.id === -1) cancion.id = this.canciones.length + 1

    cancion.nombre = inputNombre.value
    cancion.artista = inputArtista.value
    cancion.album = inputAlbum.value
    cancion.duracion = inputDuracion.value
    cancion.genero = inputGenero.value
    cancion.fecha = new Date(inputFecha.value)
    cancion.imagen = inputImagen.value
    this.editingId = undefined
  }

  onDelete(id: number): void {
    this.deletingId = id
    this.eventDelete.next(id)
  }

  deleteCancion(id: number): void {
    const index = this.canciones.findIndex(g => g.id === id)
    this.canciones.splice(index, 1)
    this.editingId = undefined
  }

  formatDate(date: Date) {
    return date.toISOString().split('T')[0]
  }
}
