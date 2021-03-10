import axios from "axios";
import { URL } from "../utils/global";

const getTareas = async () => {
  const API_URL = `${URL}/api/tareas`;

  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
      console.log(error);   
  }

  
};

export { getTareas };
