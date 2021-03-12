
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string; 
}

const Boton : React.FC<Props> = (Props) => {

    return(
      <div style={{ paddingTop: '5px', paddingBottom: '5px'}}>
        <button type={Props.type} className="nes-btn is-primary">{Props.text}</button>
      </div>
    )
};

export default Boton;
