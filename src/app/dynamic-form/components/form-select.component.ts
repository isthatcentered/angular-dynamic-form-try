import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core"
import { FormGroup } from "@angular/forms"
import { IFieldConfig } from "../models/models"




@Component( {
	selector:        "app-form-select",
	template:        `
    <div
      class="dynamic-field form-select"
  
      [formGroup]="group">
      <label>
      <div class="_push-small">{{ config.label }}</div>
      <div class="select-custom"
        [class.disabled]="config.disabled">
      
      <select [formControlName]="config.name"
            [value]="config.value">
        <option value="">{{ config.placeholder }}</option>
        <option *ngFor="let option of config.options">
          {{ option }}
        </option>
      </select>
</div>
      </label>
</div>
  `,
	styles:          [
		`
	
	`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
} )
export class FormSelectComponent implements OnInit
{
	config: IFieldConfig
	
	group: FormGroup
	
	
	constructor()
	{
	}
	
	
	ngOnInit()
	{
	}
}
