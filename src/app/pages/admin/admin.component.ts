import { Component } from '@angular/core'
import { Subject } from 'rxjs'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  selected: 'generos' | 'canciones' = 'generos'
  eventDelete: Subject<number | undefined> = new Subject()
  eventConfirm: Subject<boolean> = new Subject()

  constructor() {}

  setSelected(selected: 'generos' | 'canciones'): void {
    this.selected = selected
  }

  openModal(id?: number) {
    this.eventDelete.next(id)
  }

  closeModal(bool: boolean) {
    this.eventConfirm.next(bool)
  }
}
