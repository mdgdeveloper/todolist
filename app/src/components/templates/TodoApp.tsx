
// Material UI
import Box from '@material-ui/core/Box';


// Molecules<components>
import TodoBloque from '../organisms/TodoBloque';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';

// Header
// Footer

interface Props {

}

const TodoApp: React.FC<Props> = () => {

  return(
    <Box>
      <Header />
    <Box bgcolor='#333333'>
      <TodoBloque />
    </Box>
    <Footer />
    </Box>


  ) 
};

export default TodoApp;