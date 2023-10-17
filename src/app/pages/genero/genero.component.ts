import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Cancion } from 'src/app/models/cancion'
import { Genero } from 'src/app/models/genero'
import { CancionService } from 'src/app/services/cancion.service'
import { GeneroService } from 'src/app/services/genero.service'
import { UsuarioService } from 'src/app/services/usuario.service'

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css'],
})
export class GeneroComponent {
  genero: Genero = new Genero()
  canciones: Cancion[] = []
  cancionesVotadas: Cancion[] = []

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private generoService: GeneroService,
    private cancionService: CancionService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getUsuario(params['uid'])
      this.getGenero(params['gid'])
      this.getCancionesByGenero(params['gid'])
    })
  }

  async getUsuario(id: number): Promise<void> {
    try {
      this.cancionesVotadas = await this.usuarioService.getCancionesByUsuario(id)
    } catch (err) {
      console.error(err)
    }
  }

  async getGenero(id: number): Promise<void> {
    try {
      this.genero = await this.generoService.getGeneroById(id)
    } catch (err) {
      console.error(err)
    }
  }

  async getCancionesByGenero(id: number): Promise<void> {
    try {
      this.canciones = await this.cancionService.getCancionesByGenero(id)
    } catch (err) {
      console.error(err)
    }
  }

  cancionVotada(id: number): boolean {
    return this.cancionesVotadas.some(c => c.id === id)
  }

  goBack(): void {
    window.history.back()
  }
}
