import {useState} from "react";
export default function AñadirTarea({tareas,setTareas}){
    const [valorInput,setValorInput] = useState("");

    const inputChange = (e) => {
      setValorInput(e.target.value);
    }
  
    const controlarEnvio = (e) => {
      e.preventDefault();
      setTareas(tareas => [...tareas,valorInput]);
      setValorInput("")
    }
    return(
        <form onSubmit={controlarEnvio}>
          <input type="text" value={valorInput} onChange={inputChange} placeholder="Agregar producto..."/>
        </form>
    )
}