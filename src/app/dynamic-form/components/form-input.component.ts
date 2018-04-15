import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core"
import { FormGroup } from "@angular/forms"




@Component( {
	selector:        "app-form-input",
	template:        `
	<div [formGroup]="group" >
    
        <label>
        <div class="_push-small">{{ config.label }}</div>
        
        <input type="text"
	        [attr.placeholder]="config.placeholder"
	        [formControlName]="config.name">
        </label>
	</div>
  `,
	styles:          [
		`
		input[disabled] {
			border: 2px solid gray;
			background: lightgray;
		}
	`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
} )
export class FormInputComponent implements OnInit
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
