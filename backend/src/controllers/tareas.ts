import express from 'express';
import db from '../modules/sqlite';
import { TareaResult, Tarea, TareaFinal } from '../types/global';
import { idExist } from '../utils/tareas';

const tareasRouter = express.Router();

tareasRouter.get('/', (_req,res)=> {
    res.json('API v1.0');

});

tareasRouter.get('/tareas', async (_req,res) => {
    const tareas = await db.getTareas();
    const resultado = await Promise.all(tareas.map( async (tarea: Tarea) => {
        const etiquetas = await db.getEtiquetas(tarea.id);
        return({
            ...tarea,
            etiquetas
        })
    }));
    console.log(resultado);
    res.json(resultado);
})

tareasRouter.post('/tareas', async (req,res) =>{
    try{
    const response = await db.setNewTarea(req.body);
    res.json(response); 
}catch(e){
    console.log(e)
}


})

export default tareasRouter;