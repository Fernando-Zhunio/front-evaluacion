import { useEffect, useState } from "react";
// import { IInputBasic } from "../../types/input.type";
import { InputBasic } from "../../components/InputBasic";
import HttpClient from "../../tools/httpClient";
import {
  InputResponse,
  InputType,
} from "../../types/responses/input-response.type";
import { useParams } from "react-router-dom";
import { Dialog } from "../../components/Dialog";
import { FormCreateOrEditInput } from "./components/FormCreateOrEditInput";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function FormBasic() {
  const [values, setValues] = useState({});
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const { id } = useParams();
  const [inputs, setInputs] = useState<InputResponse[]>([]);
  useEffect(() => {
    HttpClient.get("Evaluacion/InputsByForm/" + id).then((res: []) =>
      setInputs(res)
    );
  }, [id]);

  function deleteInput(id: number) {
    HttpClient.delete(`Evaluacion/Inputs/${id}`).then(() => {
      setInputs((old) => old.filter((i) => i.id != id));
    });
  }
  return (
    <div className="p-3">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold">Formulario {id}</h2>
        <button onClick={() => setIsOpenDialog(true)} className="mr-2 rounded-lg px-4 py-2 bg-blue-500 text-white">
          Agregar campo
        </button>
      </div>
      {inputs.map((input) => (
        <div className="mb-2" key={input.id}>
          {input.type != InputType.select ? (
            <div className="flex justify-between gap-2 items-end">
              <span className="grow">
                <InputBasic
                  
                  type={input.type}
                  label={input.label}
                  name={input.name}
                  placeholder={input.placeholder}
                  value={input.value as string}
                  onChange={(value) =>
                    setValues({ ...values, [input.name]: value })
                  }></InputBasic>
              </span>
                <button onClick={() => deleteInput(input.id)} className="mr-2 mt-2 rounded-lg px-2 py-1 bg-red-500 text-white"> Eliminar</button>
            </div>
          ) : null}
        </div>
      ))}
      {
        isOpenDialog && 
        <Dialog title="Agregando un nuevo campo">
          <FormCreateOrEditInput formHtmlId={Number(id)} cancel={(e?: InputResponse) => {
            if (e) setInputs([...inputs, e])
            setIsOpenDialog(false)
          }} />
        </Dialog>
      }
    </div>
  );
}
