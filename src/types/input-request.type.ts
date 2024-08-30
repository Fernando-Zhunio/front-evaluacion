export interface IInputRequest {
  id?: number;
  name: string;
  type:  number | null;
  placeholder: string;
  label: string;
  value: string | number | Date;
  formHtmlId?: number | null;
}

// type InputTypeString =
//   | "number"
//   | "text"
//   | "email"
//   | "password"
//   | "file"
//   | "color"
//   | "range"
//   | "date";

export const InputTypes = [
  "number",
  "text",
  "email",
  "password",
  "file",
  "color",
  "range",
  "date",
];
