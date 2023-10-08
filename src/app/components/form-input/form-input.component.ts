import { Component, Input, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css'],
})
export class FormInputComponent {
  @Input() inputId: string = ''
  @Input() label: string = ''
  @Input() control = new FormControl()
  @Input() type: string = 'text'
}
