import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core"
import { FormBuilder, FormGroup } from "@angular/forms"




@Component( {
	selector:        "app-dynamic-form",
	template:        `
        <form [formGroup]="form">
        Hello
		</form>
  `,
	styles:          [],
	changeDetection: ChangeDetectionStrategy.OnPush,
} )
export class DynamicFormComponent implements OnInit
{
	@Input()
	config: Array<any> = []
	
	form: FormGroup
	
	
	constructor( private __fb: FormBuilder )
	{
	}
	
	
	ngOnInit()
	{
		this.form = this.createGroup()
	}
	
	
	createGroup = () => {
		
		const group = this.__fb.group( {} )
		
		this.config.forEach( control =>
			group.addControl( control.name, this.__fb.control( null ) ) )
		
		return group
	}
}
