import { FormGroup, ValidatorFn } from "@angular/forms"




export interface IField
{
	config: IFieldConfig,
	group: FormGroup
}

export interface IFieldConfig
{
	disabled?: boolean,
	label?: string,
	name: string,
	options?: string[],
	placeholder?: string,
	type: string,
	validation?: ValidatorFn[],
	value?: any
}