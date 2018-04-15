import { Component } from "@angular/core"




@Component( {
	selector: "app-root",
	styles:   [ `` ],
	template: `
                <app-dynamic-form [config]="config">
				</app-dynamic-form>
    `,
} )
export class AppComponent
{
	config = [
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
		},
		{
			label: "Submit",
			name:  "submit",
			type:  "button",
		},
	]
}
