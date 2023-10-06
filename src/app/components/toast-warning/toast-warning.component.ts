import { Component, DoCheck, Input, SimpleChanges } from '@angular/core'

@Component({
  selector: 'app-toast-warning',
  templateUrl: './toast-warning.component.html',
  styleUrls: ['./toast-warning.component.css'],
})
export class ToastWarningComponent implements DoCheck {
  @Input() active = false

  onClick(): void {
    this.active = false
  }

  ngDoCheck(): void {
    if (this.active) {
      setTimeout(() => {
        this.active = false
      }, 5000)

      const toastEl: HTMLElement = document.getElementById('toast-warning')!

      toastEl.classList.remove('-translate-x-96')
    } else {
      const toastEl: HTMLElement = document.getElementById('toast-warning')!

      toastEl.classList.add('-translate-x-96')
    }
  }
}
