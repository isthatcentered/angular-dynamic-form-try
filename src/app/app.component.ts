import { Component, OnInit } from "@angular/core"
import { IFieldConfig } from "./dynamic-form/models/models"
import { Validators } from "@angular/forms"




@Component( {
	selector: "app-root",
	styles:   [ `
	.card {
		max-width: 450px;
		margin: auto;
	}
	` ],
	template: `
	<div class="card">

                <app-dynamic-form [config]="config"
                    (send)="handleSend($event)">
                    <button type="submit">Submiiiit</button>
				</app-dynamic-form>
				{{ val | json }}
	</div>
    `,
} )
export class AppComponent implements OnInit
{
	config: Array<IFieldConfig> = [
		{
			type:        "input",
			label:       "Full name",
			name:        "name",
			placeholder: "Enter your name",
		},
		{
			type:        "select",
			label:       "Favourite food",
			name:        "food",
			options:     [ "Pizza", "Hot Dogs", "Knakworstje", "Coffee" ],
			placeholder: "Select an option",
			value:       "Hot Dogs",
		},
	]
	
	val: any
	
	handleSend = ( $event ) => {
		console.log( "Form submit", $event )
		this.val = $event
	}
	
	
	ngOnInit(): void
	{
		// Input config change test
		setTimeout( _ =>
			this.config = this.config.map( ( item, ind ) =>
				ind === 0 ? {
					...item,
					type:     "select",
					options:  [ "Pizza", "Hot Dogs", "Knakworstje", "Coffee" ],
					value:    "Knakworstje",
					label:    "Look ma, I changed",
					disabled: true,
				} : item ), 3000 )
		
		// new input test
		setTimeout( _ =>
			this.config = [
				...this.config,
				{
					type:        "input",
					label:       "Whatever",
					name:        "whatever",
					placeholder: "Enter your whatever",
					validation:  [ Validators.required, Validators.minLength( 4 ) ],
				},
			], 5000 )
		
	}
}
