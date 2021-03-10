import React from "react";

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
    setTareaSelect: (proyecto: string) => void;
}

const SelectForm = (props: Props) => {
  const proyectos = ["Casa", "Trabajo", "Estudio", "Proyectos", "Desarrollo"];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      event.preventDefault();
      props.setTareaSelect(event.target.value);

  }

  return (
    <select name="cars" id="cars" onChange={handleChange}>
      {proyectos.map((proyecto) => {
        return <option value={proyecto}>{proyecto}</option>;
      })}
    </select>
  );
};

export default SelectForm;
