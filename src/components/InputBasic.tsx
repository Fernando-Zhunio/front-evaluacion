// import { useState } from "react";
// import { IInputBasic } from "../types/input.type";
import { InputType } from "../types/responses/input-response.type";


interface InputBasicProps {
    name: string
    type: InputType,
    placeholder: string,
    label: string
    value: string | number | Date ,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange: (event: any) => void;
}
export function InputBasic(
  {placeholder, label, value, name,type, onChange} : InputBasicProps
) {
  // const [value, setValue] = useState("");
  return (
    <div className="flex flex-col gap-1 p">
      <label htmlFor={name}>{label}</label>
      <input
        placeholder={placeholder}
        className="border rounded-md p-1  shadow-sm outline-0 px-2"
        type={InputType[type].toString()}
        id={name}
        name={name}
        defaultValue={value as string}
        onChange={(e) => {
          //setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </div>
  );
}
