import { useState } from 'react';

import Boton from "../atoms/Boton";
import EntradaForm from "../atoms/EntradaForm";
import SelectForm from "../atoms/SelectForm";
import BloqueEtiqueta from '../molecules/BloqueEtiquetas';

// Types
import { Tarea } from "../../types/tareas";

interface Props {
    tareas: Tarea[] | undefined; 
    setTareas: (tarea: Tarea[]) => void;
  }



const Formulario = (props: Props) => {
    const [tareaInput, setTareaInput] = useState('');
    const [tareaSelect, setTareaSelect] = useState('');
    const [tareaEtiquetas, setTareaEtiquetas] = useState<string[]>([]);
    const [renew, setRenew] = useState<boolean>(false);

    const parseData = (event: React.SyntheticEvent) => {
        event.preventDefault(); 
        console.log(tareaInput);
 
        if(props.tareas) {

            const lastId = props.tareas[props.tareas.length-1].id

            const nuevaTarea: Tarea = {
                id: lastId + 1,
                tarea: tareaInput,
                proyecto: tareaSelect,
                etiquetas: tareaEtiquetas,
            }

            const tareasUpdated = [...props.tareas, nuevaTarea];
            console.log('tareaEtiquetas',tareaEtiquetas);
            props.setTareas(tareasUpdated);
            setTareaInput('');
            setTareaEtiquetas([]);
            setRenew(true);
        }
    
    }
    

  return (
    <form onSubmit={parseData}>
      <EntradaForm id='tarea' name='tarea' setTareaInput={setTareaInput} tareaInput={tareaInput}/>
      <SelectForm  setTareaSelect={setTareaSelect} />
      <Boton type="submit" text="enviar" />
      <BloqueEtiqueta setTareaEtiquetas={setTareaEtiquetas} setRenew={setRenew} renew={renew}/>
    </form>
  );
};

export default Formulario;
