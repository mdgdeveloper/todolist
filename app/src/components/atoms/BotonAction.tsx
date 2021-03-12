interface Props {
  setState: (mostrar: boolean) => void;
  status?: boolean;
}

const BotonAction = (props: Props) => {
  const change = () => {
    props.setState(!props.status);
  };

  return (
    <>
      {props.status ? (
        <div style={{ paddingTop: "5px", paddingBottom: "5px" }}>
          <button type="button" className="nes-btn is-error" onClick={change}>
            -
          </button>
        </div>
      ) : (
        <div style={{ paddingTop: "5px", paddingBottom: "5px" }}>
          <button type="button" className="nes-btn is-primary" onClick={change}>
            +
          </button>
        </div>
      )}
    </>
  );
};

export default BotonAction;
