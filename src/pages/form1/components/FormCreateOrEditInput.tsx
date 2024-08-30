import { useState } from "react";
import { InputResponse, InputType } from "../../../types/responses/input-response.type";
import { IInputRequest, InputTypes } from "../../../types/input-request.type";
import { InputBasic } from "../../../components/InputBasic";
import HttpClient from "../../../tools/httpClient";

export function FormCreateOrEditInput({
  formHtmlId,
  id,
  cancel,
}: {
  formHtmlId: number;
  id?: number;
  cancel: (e?: InputResponse ) => void;
}) {
  const [values, setValues] = useState<IInputRequest>({
    label: "",
    name: "",
    placeholder: "",
    type: 2,
    value: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function send(e: any) {
    setIsLoading(true);
    e.preventDefault();
    if (id) {
      HttpClient.put(`Evaluacion/Inputs/${id}`, {
        ...values,
        formHtmlId: formHtmlId,
        id: id,
      }).then((res: InputResponse) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        cancel && cancel(res);
      });
    //   cancel && cancel();

    } else {
      HttpClient.post(`Evaluacion/Inputs`, {
        ...values,
        formHtmlId: formHtmlId,
      });
    }
    setIsLoading(false);
  }

  return (
    <form onSubmit={send} className="flex flex-col px-5 py-3 shadow-2xl rounded-xl">
      <div>
        <InputBasic
          type={InputType.text}
          label="Label"
          name="label"
          placeholder="Ingrese el label"
          value={values.label}
          onChange={(value) => setValues({ ...values, label: value })}
        />
      </div>
      <div>
        <InputBasic
          type={InputType.text}
          label="Nombre"
          name="name"
          placeholder="Ingrese sus nombres"
          value={values.name}
          onChange={(value) => setValues({ ...values, name: value })}
        />
      </div>
      <div>
        <InputBasic
          type={InputType.text}
          label="Placeholder"
          name="placeholder"
          placeholder="Ingrese el placeholder"
          value={values.placeholder}
          onChange={(value) => setValues({ ...values, placeholder: value })}
        />
      </div>
      <div className="flex flex-col gap-1 p">
        <label htmlFor="select">Tipo</label>
        <select
          className="border rounded-md p-1  shadow-sm outline-0 px-2"
          id="select"
          name="select"
          defaultValue={values.type?.toString()}
          onChange={(e) => {
            setValues({...values, type: +e.target.value});
          }}
        >
            {InputTypes.map((type, index) => (
            <option key={type} value={index+1}>
              {type} 
            </option>
          ))}
        </select>
      </div>
      <div>
        <InputBasic
          type={InputType.text}
          label="Valor"
          name="value"
          placeholder="Ingrese el valor"
          value={values.placeholder}
          onChange={(value) => setValues({ ...values, value: value })}
        />
      </div>
      <div className="flex justify-center gap-2 mt-2">
        <button disabled={isLoading} className="mr-2 rounded-lg px-3 py-1 bg-blue-500 text-white" onClick={send}>Enviar</button>
        <button disabled={isLoading} className="mr-2 rounded-lg px-3 py-1 bg-red-500 text-white" onClick={() =>cancel()}>Cancelar</button>
      </div>
    </form>
  );
}
