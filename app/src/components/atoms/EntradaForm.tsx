import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  setTareaInput: (tarea: string) => void;
  tareaInput: string;
}

const EntradaForm = (props: Props) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        props.setTareaInput(e.target.value);
    }

  return (
    <input
      type="text"
      id={props.id}
      name={props.name}
      onChange={handleChange}
      value={props.tareaInput}
    />
  );
};

export default EntradaForm;
