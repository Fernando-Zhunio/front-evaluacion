export interface InputResponse {
  id: number;
  name: string;
  type: InputType;
  placeholder: string;
  label: string;
  value?: string | number | Date ;
  options: null;
  formHtmlId: number;
  formHtml: null;
}

export enum InputType
{
	text, number , date, email, password, file, color, range, select
}
