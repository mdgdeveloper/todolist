import { TareaResult, TareaFinal } from '../types/global';

export const idExist = (object: TareaFinal[], id: number) => {

    object.map( (tarea: TareaFinal) => {
        console.log(tarea.id)
        if(tarea.id && tarea.id === id) return true;
    })

    return false;


}