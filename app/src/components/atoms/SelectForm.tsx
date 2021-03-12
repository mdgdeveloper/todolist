import { useState } from "react";

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  setTareaSelect: (proyecto: string) => void;
  values?: string[];
  titulo?: string;
}

const SelectForm = (props: Props) => {
  const [proyectos, setProyectos] = useState<string[]>([
    "Casa",
    "Trabajo",
    "Estudio",
    "Proyectos",
    "Desarrollo",
  ]);

  if(props.values) setProyectos(props.values);
  
  const [proyectoSelected, setProyectoSelected] = useState(proyectos[0]);

  props.setTareaSelect(proyectoSelected);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setProyectoSelected(event.target.value);
    props.setTareaSelect(proyectoSelected);
  };

  return (
    <div style={{ marginTop: '15px', marginBottom: '15px'}}>
      <label className="default_select">{props.titulo}</label>
      <div className="nes-select">
        <select required id="default_select" onChange={handleChange}>
          {proyectos.map((proyecto) => {
            return <option value={proyecto}>{proyecto}</option>;
          })}
          ;
        </select>
      </div>
    </div>
  );
};

export default SelectForm;
