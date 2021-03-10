import { useState }  from 'react';


// Types
import { Tarea } from "../../types/tareas";

// Components
import ListaTareas from "../molecules/ListaTareas";
import Formulario from "../molecules/Formulario";

interface Props {

}

const TodoBloque: React.FC<Props> = () => {
  const [tareas, setTareas] = useState<Tarea[] | undefined>();


  return (
  <>
    <ListaTareas tareas={tareas} setTareas={setTareas} />
    <Formulario tareas={tareas} setTareas={setTareas} />
  </>);
};

export default TodoBloque;
