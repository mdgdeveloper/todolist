import express from 'express';
import db from '../modules/sqlite';
import { TareaResult, Tarea, TareaFinal, idResult } from '../types/global';
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
    res.json(resultado);
})

tareasRouter.post('/tareas', async (req,res) =>{
    try{
    
    await db.setNewTarea(req.body);
    const lastId = await db.getLastId();


   if(req.body.etiquetas){
        await Promise.all(req.body.etiquetas.map( async (etiqueta: string) => {
            const etiquetaNueva = etiqueta.toLowerCase();
            const idEtiqueta = await db.newEtiqueta(etiquetaNueva); 
            if(idEtiqueta.length > 0){
                await db.insertaEtiqueta(lastId[0].id, idEtiqueta[0].etiquetaID)
            }else{
                await db.creaEtiqueta(etiquetaNueva)
                const lastidEtiqueta = await db.getLastEtiquetaId();
                await db.insertaEtiqueta(lastId[0].id, lastidEtiqueta[0].etiquetaID);
            }

        }));
    }

    res.json({id:lastId[0].id, ...req.body}); 
}catch(e){
    console.log('Error creando', e)
}


})

tareasRouter.post('/delete/:id', async (req,res) =>{
    const id = req.params.id;
    await db.eliminarFila("tareas",id,"id");
    await db.eliminarFila("tareas_etiquetas",id,"tarea_id");
    res.json({message: "success"});
})

tareasRouter.get('/etiqueta/:id', async (req,res) =>{
    const id = req.params.id;
    const newId = await db.newEtiqueta('casa');
    console.log(newId);
})

export default tareasRouter;