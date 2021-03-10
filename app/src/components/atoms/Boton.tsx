
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string; 
}

const Boton : React.FC<Props> = (Props) => {

    return(
        <button type={Props.type}>{Props.text}</button>
    )
};

export default Boton;
