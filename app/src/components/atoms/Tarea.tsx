// Styles

// Componentes
import Etiqueta from "./Etiqueta";

// Componentes visuales
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";






type Props = {
  id: number;
  tarea: string;
  proyecto: string;
  etiquetas: string[];
  tareaCompletada: (id: number) => void;
};

const Tarea: React.FC<Props> = ({
  id,
  tarea,
  proyecto,
  etiquetas,
  tareaCompletada,
}) => {
  return (
    <div
      className="nes-container is-rounded"
      style={{ marginBottom: "25px", backgroundColor: "#EEEEEE" }}
    >
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <Grid item xs={11}>
          <div>
            <span className="nes-text" style={{ fontSize: "1.2em" }}>
              {tarea}
            </span>
          </div>
        </Grid>
        <Grid item xs={1} style={{ paddingRight: '5px' }}>
          <Checkbox
            icon={<i className="nes-icon coin is-medium"></i>}
            checkedIcon={<i className="nes-icon close is-medium"></i>}
            onChange={() => {
              tareaCompletada(id);
            }}
          />
        </Grid>
      </Grid>

      <div style={{ paddingBottom: "5px", paddingTop: "5px" }}>
        <a href="#/" className="nes-btn is-warning">
          {proyecto}
        </a>
      </div>

      {etiquetas ? (
        etiquetas.map((etiqueta) => <Etiqueta nombre={etiqueta} />)
      ) : (
        <></>
      )}
    </div>
  );
};

export default Tarea;
