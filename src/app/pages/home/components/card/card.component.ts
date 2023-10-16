import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() title: string = ''
  @Input() img: string = '../../assets/imgs/genero-placeholder.png'
  @Input() description: string = ''
}
