import { Component, Input } from '@angular/core'
import { Observable, Subject } from 'rxjs'

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css'],
})
export class ModalConfirmComponent {
  @Input() idSubject: Subject<number | undefined> = new Subject<number | undefined>()
  deleteId?: number

  constructor() {}

  ngOnInit(): void {
    this.idSubject.subscribe(id => {
      this.deleteId = id
      console.log(id)
    })
  }
}
