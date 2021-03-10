import { useEffect } from "react";

// Components
import TareaDetail from "../atoms/Tarea";

// Services
import { getTareas } from "../../services/tareas";

// MaterialUI
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

// Types
import { Tarea } from "../../types/tareas";

interface Props {
  tareas: Tarea[] | undefined; 
  setTareas: (tarea: Tarea[]) => void;
}

const useStyles = makeStyles({
  wrap: {},
});

const ListaTareas: React.FC<Props> = ({tareas, setTareas}) => {

  useEffect(() => {
    const getData = async () => {
      const data = await getTareas();
      setTareas(data);
    }
    getData();
  }, [setTareas]);

  

  const tareaCompletada = (id: number) => {
    if (tareas) {
      setTimeout(() => {
        const newTareas = tareas.filter((tarea) => {
          return tarea.id !== id;
        });
        setTareas(newTareas);
      }, 300);
    }
  };

  const classes = useStyles();

  return (
    <Box>
      <Box margin="20px 0px 0px 0px" padding="10px" width="80%">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={6}>
            {tareas ? (
              tareas.map((tarea) => (
                <TareaDetail
                  key={tarea.id}
                  id={tarea.id}
                  tarea={tarea.tarea}
                  proyecto={tarea.proyecto}
                  etiquetas={tarea.etiquetas}
                  tareaCompletada={tareaCompletada}
                />
              ))
            ) : (
              <></>
            )}
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.wrap}>Formulario</Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ListaTareas;
