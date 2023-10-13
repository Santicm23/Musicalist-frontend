import { Component } from '@angular/core'
import { Subject } from 'rxjs'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  selected: 'generos' | 'canciones' = 'generos'
  idSubject: Subject<number | undefined> = new Subject<number | undefined>()

  constructor() {}

  setSelected(selected: 'generos' | 'canciones'): void {
    this.selected = selected
  }

  openModal(id?: number) {
    this.idSubject.next(id)
  }
}
