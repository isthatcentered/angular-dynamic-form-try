import {
	ComponentFactoryResolver,
	ComponentRef,
	Directive,
	Input,
	OnChanges,
	OnInit,
	SimpleChanges,
	Type,
	ViewContainerRef,
} from "@angular/core"
import { FormGroup } from "@angular/forms"
import { FormInputComponent } from "../components/form-input.component"
import { FormButtonComponent } from "../components/form-button.component"
import { FormSelectComponent } from "../components/form-select.component"
import { IField, IFieldConfig } from "../models/models"




const components: { [ type: string ]: Type<IField> } = {
	button: FormButtonComponent,
	input:  FormInputComponent,
	select: FormSelectComponent,
}


@Directive( {
	selector: "[appDynamicField]",
} )
export class DynamicFieldDirective implements OnInit, OnChanges
{
	
	@Input()
	config: IFieldConfig
	
	@Input()
	group: FormGroup
	
	component: ComponentRef<IField>
	
	
	constructor(
		private __resolver: ComponentFactoryResolver,
		private __container: ViewContainerRef,
	)
	{
	}
	
	
	ngOnInit(): void
	{
		if ( !components[ this.config.type ] )
			throw new Error(
				`Type must be one of "${Object.keys( components ).join( ", " )}".\n Trying to use type "${this.config.type}" for input "${this.config.name}"`,
			)
		
		const component = components[ this.config.type ]
		const factory = this.__resolver.resolveComponentFactory<IField>( component )
		
		this.component = this.__container.createComponent( factory )
		
		this.component.instance.config = this.config
		this.component.instance.group = this.group
		
		console.log( this.__container )
	}
	
	
	ngOnChanges( changes: SimpleChanges ): void
	{
		if ( this.component ) {
			this.component.instance.config = this.config
			this.component.instance.group = this.group
		}
	}
}
