import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core'

@Component({
  selector: 'app-toast-warning',
  templateUrl: './toast-warning.component.html',
  styleUrls: ['./toast-warning.component.css'],
})
export class ToastWarningComponent implements OnChanges {
  @Input() event: Event | null = null
  showing = false
  canceled = false

  onClick(): void {
    this.close()
    this.canceled = true
  }

  ngOnInit(): void {
    this.close()
  }

  ngOnChanges(): void {
    if (!this.showing && this.event) {
      setTimeout(() => {
        if (this.canceled) {
          this.canceled = false
          return
        }

        this.close()
      }, 5000)

      this.show()
      console.log('a')
    }
  }

  show(): void {
    this.showing = true
    const toastEl: HTMLElement = document.getElementById('toast-warning')!

    toastEl.classList.remove('-translate-x-96')
  }

  close(): void {
    this.showing = false
    const toastEl: HTMLElement = document.getElementById('toast-warning')!

    toastEl.classList.add('-translate-x-96')
  }
}
