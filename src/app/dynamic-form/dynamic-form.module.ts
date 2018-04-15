import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ReactiveFormsModule } from "@angular/forms"
import { DynamicFormComponent } from "./containers/dynamic-form.component"
import { FormInputComponent } from "./components/form-input.component"
import { FormSelectComponent } from "./components/form-select.component"
import { FormButtonComponent } from "./components/form-button.component"
import { DynamicFieldDirective } from "./directives/dynamic-field.directive"




@NgModule( {
	imports:         [
		CommonModule,
		ReactiveFormsModule,
	],
	declarations:    [
		DynamicFormComponent,
		FormInputComponent,
		FormSelectComponent,
		FormButtonComponent,
		DynamicFieldDirective,
	],
	exports:         [ DynamicFormComponent ],
	entryComponents: [
		FormButtonComponent,
		FormInputComponent,
		FormSelectComponent,
	],
} )
export class DynamicFormModule
{
}
