import { Component, Input } from '@angular/core'
import { ActivatedRoute, Route } from '@angular/router'
import { Cancion } from 'src/app/models/cancion'
import { CancionService } from 'src/app/services/cancion.service'
import { UsuarioService } from 'src/app/services/usuario.service'

@Component({
  selector: 'app-cancion-item',
  templateUrl: './cancion-item.component.html',
  styleUrls: ['./cancion-item.component.css'],
})
export class CancionItemComponent {
  @Input() cancion?: Cancion
  @Input() starred: boolean = false

  uid: number = 0

  constructor(
    private cancionService: CancionService,
    private usuarioService: UsuarioService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.uid = params['uid']
    })

    if (this.cancion) {
      this.cancion.fechaLanzamiento = new Date(this.cancion?.fechaLanzamiento)
    }
  }

  toggleStarCancion(): void {
    this.starred = !this.starred

    if (this.starred) {
      this.voteUp()
    } else {
      this.voteDown()
    }
  }

  voteUp(): void {
    if (this.cancion) {
      this.cancion.numLikes++
      this.cancionService.updateCancion(this.cancion)
      this.usuarioService.votarCancion(this.uid, this.cancion.id)
    }
  }

  voteDown(): void {
    if (this.cancion) {
      this.cancion.numLikes--
      this.cancionService.updateCancion(this.cancion)
      this.usuarioService.desvotarCancion(this.uid, this.cancion.id)
    }
  }
}
