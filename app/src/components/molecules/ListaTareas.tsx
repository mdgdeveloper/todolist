import { useEffect } from "react";

// Components
import TareaDetail from "../atoms/Tarea";
import NoTareas from '../atoms/NoTareas';
// Services
import { deleteTarea, getTareas } from "../../services/tareas";

// Types
import { Tarea } from "../../types/tareas";

interface Props {
  tareas: Tarea[] | undefined; 
  setTareas: (tarea: Tarea[]) => void;
}


const ListaTareas: React.FC<Props> = ({tareas, setTareas}) => {

  useEffect(() => {
    const getData = async () => {
      const data = await getTareas();
      setTareas(data);
    }
    getData();
  }, [setTareas]);

  

  const tareaCompletada = async (id: number) => {
    if (tareas) {
      await deleteTarea(id);
      setTimeout(() => {
        const newTareas = tareas.filter((tarea) => {
          return tarea.id !== id;
        });
        setTareas(newTareas);
      }, 150);
    }
  };


  return (
    <>
           {tareas && tareas.length > 0 ? (
              tareas.map((tarea) => (
                <TareaDetail
                  key={tarea.id}
                  id={tarea.id}
                  tarea={tarea.tarea}
                  proyecto={tarea.proyecto}
                  etiquetas={tarea.etiquetas}
                  tareaCompletada={tareaCompletada}
                />
              ))
            ) : (
              <NoTareas />
            )}

        </>
  );
};

export default ListaTareas;
