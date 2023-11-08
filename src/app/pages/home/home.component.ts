import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Genero } from 'src/app/models/genero'
import { GeneroService } from 'src/app/services/genero.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  generos: Genero[] = []

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private generoService: GeneroService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['uid']
    })

    this.getGeneros()
  }

  async getGeneros(): Promise<void> {
    try {
      this.generos = await this.generoService.getGeneros()
    } catch (err) {
      console.error(err)
    }
  }

  onClick(id: number): void {
    const url = this.router.url
    this.router.navigate([`${url}/genero/${id}`])
  }

  logout(): void {
    this.generoService.logout()
  }
}
