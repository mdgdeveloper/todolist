import { useState }  from 'react';


// MaterialUI
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";


// Types
import { Tarea } from "../../types/tareas";

// Components
import ListaTareas from "../molecules/ListaTareas";
import Formulario from "../molecules/Formulario";
import BotonAction from '../atoms/BotonAction';

interface Props {

}

const TodoBloque: React.FC<Props> = () => {
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [mostrarFormulario, setMostrarFormulario] = useState<boolean>(false);



  return (
    <Box bgcolor='#FFFFFF' marginLeft='auto' marginRight='auto'>
    <Box margin="20px 0px 0px 0px" padding="10px" width="80%" marginLeft='auto' marginRight='auto'>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={3}
      >
        <Grid item xs={6}>
        <section className='nes-container with-title'>
      <h3 className='title'>Tareas pendientes</h3>
    <ListaTareas tareas={tareas} setTareas={setTareas} />
    </section>
    <Box textAlign='right'><BotonAction setState={setMostrarFormulario} status={mostrarFormulario} /></Box>
    
    
    </Grid>
    {mostrarFormulario ? 
          <Grid item xs={6}>
          <Formulario tareas={tareas} setTareas={setTareas} />
          </Grid>
          : <></>}
        </Grid>
      </Box>
    </Box>
  
    
    );
};

export default TodoBloque;
