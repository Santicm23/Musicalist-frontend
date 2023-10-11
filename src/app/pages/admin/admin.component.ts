import { Component, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  selected: 'generos' | 'canciones' = 'generos'

  setSelected(selected: 'generos' | 'canciones') {
    this.selected = selected
  }
}
