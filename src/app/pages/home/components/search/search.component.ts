import { Component } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchForm = this.fb.group({
    search: ['', []],
  })

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {}

  onSubmit() {
    const value = this.searchForm.value.search || ''

    const url = this.router.url
    this.router.navigate([`${url}/search/${value}`])
  }
}
