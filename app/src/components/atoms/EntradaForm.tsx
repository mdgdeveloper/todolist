import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  setTareaInput: (tarea: string) => void;
  tareaInput: string;
  titulo?: string;
}

const EntradaForm = (props: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setTareaInput(e.target.value);
  };

  return (
    <div className="nes-field">
      <label className="name_field">{props.titulo}</label>
      <input
        type="text"
        id={props.id}
        name={props.name}
        onChange={handleChange}
        value={props.tareaInput}
        className="nes-input"
      />
    </div>
  );
};

export default EntradaForm;
