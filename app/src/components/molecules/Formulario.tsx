import { useState } from "react";

import Boton from "../atoms/Boton";
import EntradaForm from "../atoms/EntradaForm";
import SelectForm from "../atoms/SelectForm";
import BloqueEtiqueta from "../molecules/BloqueEtiquetas";

// Types
import { Tarea, TareaDB } from "../../types/tareas";

// Services
import { createTarea } from "../../services/tareas";

interface Props {
  tareas: Tarea[];
  setTareas: (tarea: Tarea[]) => void;
}

const Formulario = (props: Props) => {
  const [tareaInput, setTareaInput] = useState("");
  const [tareaSelect, setTareaSelect] = useState("");
  const [tareaEtiquetas, setTareaEtiquetas] = useState<string[]>([]);
  const [renew, setRenew] = useState<boolean>(false);

  const parseData = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const nuevaTarea: TareaDB = {
      tarea: tareaInput,
      proyecto: tareaSelect,
      etiquetas: tareaEtiquetas,
    };

    const tareaCreada = await createTarea(nuevaTarea);

    const tareasUpdated = [...props.tareas, tareaCreada];

    props.setTareas(tareasUpdated);
    setTareaInput("");
    setTareaEtiquetas([]);
    setRenew(true);
  };

  return (
    <section className="nes-container with-title">
      <h3 className="title">Nueva tarea</h3>
      <form onSubmit={parseData}>
        <EntradaForm
          id="tarea"
          name="tarea"
          setTareaInput={setTareaInput}
          tareaInput={tareaInput}
          titulo="Descripcion"
        />
        <SelectForm setTareaSelect={setTareaSelect} />
        <Boton type="submit" text="enviar" />
        <BloqueEtiqueta
          setTareaEtiquetas={setTareaEtiquetas}
          setRenew={setRenew}
          renew={renew}
        />
      </form>
    </section>
  );
};

export default Formulario;
