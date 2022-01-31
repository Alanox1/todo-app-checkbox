import { useState } from "react"
export default function TodoList({tarea}){
   const [tachar,setTachar] = useState(true)

   let className = tachar ? "" : "tachar";

    return(
        <li className={className} onClick={() => setTachar(!tachar)}>
            {tarea}
        </li>
    )
}