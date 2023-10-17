import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Cancion } from 'src/app/models/cancion'
import { CancionService } from 'src/app/services/cancion.service'
import { UsuarioService } from 'src/app/services/usuario.service'

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent {
  canciones: Cancion[] = []
  cancionesVotadas: Cancion[] = []

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private cancionService: CancionService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getUsuario(params['uid'])
      this.getCancionesByFiltro(params['filtro'] || '')
    })
  }

  async getUsuario(id: number): Promise<void> {
    try {
      this.cancionesVotadas = await this.usuarioService.getCancionesByUsuario(id)
    } catch (err) {
      console.error(err)
    }
  }

  async getCancionesByFiltro(filtro: string): Promise<void> {
    try {
      if (filtro === '') {
        this.canciones = await this.cancionService.getCanciones()
      } else {
        this.canciones = await this.cancionService.buscarCanciones(filtro)
      }
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
