import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core"
import { FormGroup } from "@angular/forms"




@Component( {
	selector:        "app-form-button",
	template:        `
    <div
      class="dynamic-field form-button"
      [formGroup]="group">
      <button type="submit">
        {{ config.label }}
      </button>
    </div>
  `,
	styles:          [],
	changeDetection: ChangeDetectionStrategy.OnPush,
} )
export class FormButtonComponent implements OnInit
{
	
	config
	group: FormGroup
	
	
	constructor()
	{
	}
	
	
	ngOnInit()
	{
	}
	
}
