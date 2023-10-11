import { Component } from '@angular/core'
import { Cancion } from 'src/app/models/cancion'

@Component({
  selector: 'app-table-canciones',
  templateUrl: './table-canciones.component.html',
  styleUrls: ['./table-canciones.component.css'],
})
export class TableCancionesComponent {
  canciones: Cancion[] = [
    new Cancion(
      1,
      'Bohemia Rapsody',
      'Queen',
      'Exitos',
      '6:30',
      'Rock',
      new Date(),
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.culturagenial.com%2Fes%2Fimagenes%2Fcancion-bohemian-rhapsody-og.jpg&tbnid=i2lhlXITIHu5lM&vet=12ahUKEwj405_bg--BAxXaE1kFHU0lBqMQMygPegUIARCRAQ..i&imgrefurl=https%3A%2F%2Fwww.culturagenial.com%2Fes%2Fcancion-bohemian-rhapsody-de-queen%2F&docid=fossVSt12nyi1M&w=533&h=315&q=bohemian%20rhapsody%20images&ved=2ahUKEwj405_bg--BAxXaE1kFHU0lBqMQMygPegUIARCRAQ'
    ),
    new Cancion(2, 'Believer', 'Imagine Dragons', 'Evolve', '3:20', 'pop', new Date()),
    new Cancion(3, 'El triste', 'Jose Jose', 'Exitos', '4:30', 'Balada', new Date()),
  ]
}
