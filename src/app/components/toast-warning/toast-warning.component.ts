import { Component, Input, OnChanges, OnInit } from '@angular/core'
import { Observable, Subscription, timer } from 'rxjs'

@Component({
  selector: 'app-toast-warning',
  templateUrl: './toast-warning.component.html',
  styleUrls: ['./toast-warning.component.css'],
})
export class ToastWarningComponent implements OnInit {
  @Input() eventObservable: Observable<Event> = new Observable<Event>()
  @Input() message: string = 'Something went wrong!'
  timerObservable: Observable<number> = new Observable<number>()
  timerSubscription: Subscription = new Subscription()

  ngOnInit(): void {
    this.close()
    this.eventObservable.subscribe(() => this.onOpen())
    this.timerObservable = timer(5000)
  }
  onOpen(): void {
    this.timerSubscription = this.timerObservable.subscribe(() => {
      this.close()
    })
    this.show()
  }

  onClose(): void {
    this.close()
    this.timerSubscription.unsubscribe()
  }

  show(): void {
    const toastEl: HTMLElement = document.getElementById('toast-warning')!

    toastEl.classList.remove('-translate-x-96')
  }

  close(): void {
    const toastEl: HTMLElement = document.getElementById('toast-warning')!

    toastEl.classList.add('-translate-x-96')
  }
}
