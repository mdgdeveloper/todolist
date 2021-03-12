import axios from "axios";
import { URL } from "../utils/global";
import { TareaDB } from '../types/tareas';

const getTareas = async () => {
  const API_URL = `${URL}/api/tareas`;

  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
      console.log(error);   
  }

  
};

const deleteTarea = async (id:number) => {
  const API_URL = `${URL}/api/delete/${id}`;

  try {
    const response = await axios.post(API_URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }


}

const createTarea = async (tarea: TareaDB) => {
  const API_URL = `${URL}/api/tareas`;

  try {
    const response = await axios.post(API_URL, tarea);
    return response.data;
    
  } catch (error) {
    
  }
}

export { getTareas, deleteTarea, createTarea };
