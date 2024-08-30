import { Link } from "react-router-dom";
import '../../index.css'
import { useEffect, useState } from "react";
import HttpClient from "../../tools/httpClient";
import { IButtonType } from "../../types/button.type";
export function HomeIndex() {
    const [buttons, setButtons] = useState<IButtonType[]>([])
    useEffect(() => {
        HttpClient.get("evaluacion/buttons").then((res: IButtonType[]) => setButtons(res))
    }, [])
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div>
                <h1 className="text-3xl font-bold text-center p-2">Home</h1>
                <div>
                {
                    buttons.map((button) => <Link className="mr-2 rounded-lg px-4 py-2 bg-blue-500 text-white" to={`form/${button.formHtmlId}`} key={button.id}>{button.label}</Link>)
                }
                {/* <Link className="mr-2 rounded-lg px-4 py-2 bg-blue-500 text-white" to={`form/1`}>Formulario 1</Link>
                <Link className="mr-2 rounded-lg px-4 py-2 bg-blue-500 text-white" to={`form/2`}>Formulario 2</Link> */}
                </div>
            </div>
        </div>
    )
}