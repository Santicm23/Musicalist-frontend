import { Component, Input, Output } from '@angular/core'
import { Subject } from 'rxjs'

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css'],
})
export class ModalConfirmComponent {
  @Input() eventDelete: Subject<number | undefined> = new Subject()
  @Output() eventConfirm: Subject<boolean> = new Subject()
  deleteId?: number

  constructor() {}

  ngOnInit(): void {
    this.eventDelete.subscribe(id => {
      this.deleteId = id
    })
  }

  close() {
    this.eventConfirm.next(false)
    this.deleteId = undefined
  }

  confirm() {
    this.eventConfirm.next(true)
    this.deleteId = undefined
  }
}
