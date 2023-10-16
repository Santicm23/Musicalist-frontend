import { Component, Input } from '@angular/core'
import { Cancion } from 'src/app/models/cancion'

@Component({
  selector: 'app-cancion-item',
  templateUrl: './cancion-item.component.html',
  styleUrls: ['./cancion-item.component.css'],
})
export class CancionItemComponent {
  @Input() cancion?: Cancion
  @Input() starred: boolean = false

  ngOnInit(): void {
    if (this.cancion) {
      this.cancion.fechaLanzamiento = new Date(this.cancion?.fechaLanzamiento)
    }
  }
}
