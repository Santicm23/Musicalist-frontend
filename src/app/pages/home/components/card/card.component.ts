import { Component, Input, Output } from '@angular/core'
import { Subject } from 'rxjs'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() id: number = 0
  @Input() title: string = ''
  @Input() img: string = ''
  @Input() description: string = ''
  @Output() clickEvent: Subject<number> = new Subject()

  constructor() {}

  ngOnInit(): void {
    if (this.img === '') this.img = '../../assets/imgs/placeholder.png'
  }

  onClick(): void {
    this.clickEvent.next(this.id)
  }
}
