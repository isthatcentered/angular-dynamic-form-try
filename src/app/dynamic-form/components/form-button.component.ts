import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-form-button',
  template: `
    <p>
      form-button works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
