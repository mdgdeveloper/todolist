// Material UI
import Box from '@material-ui/core/Box';

interface Props {
    nombre: string;   
}

const Etiqueta: React.FC<Props> = ({ nombre }) => {
    return (
        <Box>
           {nombre} 
        </Box>
    )
}

export default Etiqueta
