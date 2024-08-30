import { InputType } from "./responses/input-response.type"

export interface IInputType {
    name: string
    type: InputType,
    placeholder: string,
    label: string
    value: string | number | Date | undefined
    options? : {value: string, label: string}[]
    // onChange: (event: any) => void
}

export interface IInputBasic {
    name: string
    type: InputType,
    placeholder: string,
    label: string
    value: string | number | Date 
}

export interface IInputSelect {
    name: string
    type: 'select'
    placeholder: string,
    label: string
    value: string | number | Date | undefined
    options? : {value: string, label: string}[]
}