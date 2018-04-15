import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-form-input',
  template: `
    <p>
      form-input works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
