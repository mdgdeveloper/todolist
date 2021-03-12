// Material UI

interface Props {
  nombre: string;
}

const Etiqueta: React.FC<Props> = ({ nombre }) => {
  return (
   <>
      <a href="#/" className="nes-btn is-success" style={{fontSize: '0.8em'}}>
        {nombre}
      </a><span>&nbsp;</span>
      </>
  );
};

export default Etiqueta;
