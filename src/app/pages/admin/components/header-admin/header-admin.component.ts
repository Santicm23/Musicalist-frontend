import { Component, EventEmitter, Output } from '@angular/core'
import { UsuarioService } from 'src/app/services/usuario.service'

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css'],
})
export class HeaderAdminComponent {
  activeStyles =
    'inline-block rounded-t-lg border-b-2 border-blue-600 p-4 text-blue-600 dark:border-blue-500 dark:text-blue-500'
  inactiveStyles =
    'inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300'
  @Output() eventSelected: EventEmitter<'generos' | 'canciones'> = new EventEmitter()
  selected: 'generos' | 'canciones' = 'generos'

  constructor(private usuarioService: UsuarioService) {}

  setSelected(selected: 'generos' | 'canciones') {
    this.selected = selected
    this.eventSelected.emit(selected)
  }

  logout() {
    this.usuarioService.logout()
  }
}
