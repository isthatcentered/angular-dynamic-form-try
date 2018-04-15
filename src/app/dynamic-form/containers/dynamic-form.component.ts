import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	OnChanges,
	OnInit,
	Output,
	SimpleChanges,
} from "@angular/core"
import { FormBuilder, FormGroup } from "@angular/forms"
import { IFieldConfig } from "../models/models"




@Component( {
	selector:        "app-dynamic-form",
	template:        `
        <form [formGroup]="form"
            (ngSubmit)="handleSubmit()">
	        <ng-container *ngFor="let field of config;"
		        appDynamicField
		        [config]="field"
		        [group]="form">
	      </ng-container>
		      <ng-content>
		      <!-- Used to place submit button -->
			</ng-content>
		</form>
		
		{{ form.getRawValue() | json}}
		{{ form.valid }}
  `,
	styles:          [
		`
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
} )
export class DynamicFormComponent implements OnInit, OnChanges
{
	@Input()
	config: Array<IFieldConfig> = []
	
	@Output()
	send = new EventEmitter<Object>()
	
	form: FormGroup
	
	
	constructor( private __fb: FormBuilder )
	{
	}
	
	
	ngOnInit()
	{
		this.form = this.createGroup()
	}
	
	
	handleSubmit = () => {
		this.send.emit( this.form.getRawValue() )
	}
	
	createGroup = () => {
		
		const group = this.__fb.group( {} )
		
		this.config.forEach( controlConfig =>
			this.__addControl( group, controlConfig ) )
		
		return group
	}
	
	
	ngOnChanges( changes: SimpleChanges ): void
	{
		if ( !this.form )
			return
		
		this.config.forEach( controlConfig =>
			this.__hasControl( controlConfig.name ) ?
				this.__getControl( controlConfig.name )
					.reset( this.__mapConfig( controlConfig ) ) :
				this.__addControl( this.form, controlConfig ) )
	}
	
	
	private __hasControl = ( name: string ) => !!this.form.get( name )
	
	private __getControl = ( name: string ) => this.form.get( name )
	
	private __addControl = ( group: FormGroup, config: IFieldConfig ) =>
		group.addControl( config.name, this.__createControl( config ) )
	
	private __createControl = ( config: IFieldConfig ) =>
		this.__fb.control( this.__mapConfig( config ), config.validation )
	
	private __mapConfig = ( control: IFieldConfig ) =>
		[ "value", "disabled" ]
			.reduce( ( acc, key ) => ({
				...acc,
				[ key ]: control[ key ],
			}), {} )
	
}
