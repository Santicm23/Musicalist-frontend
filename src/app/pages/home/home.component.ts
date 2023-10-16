import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Subject } from 'rxjs'
import { Genero } from 'src/app/models/genero'
import { GeneroService } from 'src/app/services/genero.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  generos: Genero[] = [
    new Genero(1, 'Rock en español'),
    new Genero(2, 'Pop'),
    new Genero(3, 'Funk'),
    new Genero(4, 'Salsa'),
  ]

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private generoService: GeneroService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['uid']
    })
  }

  onClick(id: number): void {
    const url = this.router.url
    this.router.navigate([`${url}/genero/${id}`])
  }
}
