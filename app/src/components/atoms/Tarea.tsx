// Styles


// Componentes
import Etiqueta from "./Etiqueta";

// Componentes visuales
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Checkbox from "@material-ui/core/Checkbox";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";

// Estilos
import { makeStyles } from "@material-ui/core/styles";

// Definicion de estilos
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "20px",
  },
  title: {
    fontSize: 19,
    margin: 0,
  },
  project: {
    fontSize: 14,
    backgroundColor: "#112233",
    color: "white",
    fontWeight: 600,
    padding: 4,
  },
});

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
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Box display="flex" p={1}>
          <Box p={1} >
            <CardActions>
              <Checkbox
                icon={<CircleUnchecked />}
                checkedIcon={<CircleCheckedFilled />}
                onChange={() => {
                  tareaCompletada(id);
                }}
              />
            </CardActions>
          </Box>
          <Box p={1} flexGrow={1}>
            <Typography
              className={classes.title}
              color="textPrimary"
              gutterBottom
            >
              {tarea}
            </Typography>
            <Typography
              display="inline"
              className={classes.project}
              color="textSecondary"
              gutterBottom
            >
              {proyecto}
            </Typography>
            <Box>
              {etiquetas ? (
                etiquetas.map((etiqueta) => <Etiqueta nombre={etiqueta} />)
              ) : (
                <></>
              )}
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Tarea;
