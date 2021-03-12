import sqlite3 from "sqlite3";
import path from "path";
import { TareaResult, Tarea, TareaDB, Etiqueta, idResult, EtiquetaResult } from '../types/global';
import { rejects } from "node:assert";
import e from "express";

const dbPath = path.resolve(__dirname, "../../db/datos.db");
const db = new sqlite3.Database(dbPath);

const getTareas = () => {
  return new Promise<Array<Tarea>>((res, rej) => {
    db.all("SELECT * from tareas", [], (err: any, response: any) => {
      if (err) {
        rej(err.message);
      } else {
        res(response);
      }
    });
  });
};

const setNewTarea = (tarea: TareaDB) => {
  return new Promise<TareaResult> ((res, rej) => {
    db.run(
      `INSERT INTO tareas (tarea,proyecto) VALUES ('${tarea.tarea}', '${tarea.proyecto}')`, [],
      (err: any, response: any) => {
        if (err) {
          rej(err.message);
        }else{
          res(response);
        }
        
      }
    );
  });
};

const newEtiqueta = (etiqueta: string) => {
  
  return new Promise<EtiquetaResult[]>((res,rej) => {db.all(
    `SELECT etiquetaID from etiquetas where nombre="${etiqueta}"`, [],
    (err: any, response: any) => {
      if(err){
        rej(err.message);
      }else{
        res(response);
      }
      
    }
  )})

}

const eliminarFila = (tabla: string, id: string, tabla_id: string) =>{
  return new Promise<string>((res, rej) => {
    db.run(
      `DELETE from ${tabla} WHERE ${tabla_id}=${id}`, [],
    (err: any, response: any) =>{
      if(err){
        rej(err);
      }else{
        res(response);
      }
    }
    )
  })

}

const creaEtiqueta = (etiqueta: string) => {
  return new Promise<string>((res,rej) => {
    db.run(
      `INSERT INTO etiquetas (nombre) VALUES ("${etiqueta}")`, [],
      (err: any, response: any) => {
        if(err){
          rej(err.message);
        }else{
          res(response);
        }
      }
    )
  })


}

const insertaEtiqueta = (tarea_id: number, etiqueta_id: number) => {
  return new Promise<string>((res,rej) => {
    db.run(
      `INSERT INTO tareas_etiquetas (tarea_id, etiqueta_id) VALUES (${tarea_id}, ${etiqueta_id})`, [],
      (err: any, response: any) => {
        if(err){
          rej(err.message);
        }else{
          res(response);
        }
      }
    )
  })


}

const getLastId = () => {
  return new Promise<idResult[]>((res,rej) => {
    db.all(
    `SELECT id FROM tareas WHERE id = (SELECT MAX(id)  FROM tareas)`, [],
    (err: any, response: any) => {
      if(err){
        rej(err.message);
      }else{
        res(response);
      }
    }
  )})
}

const getLastEtiquetaId = () => {
  return new Promise<EtiquetaResult[]>((res,rej) => {
    db.all(
    `SELECT etiquetaID FROM etiquetas WHERE etiquetaID = (SELECT MAX(etiquetaID)  FROM etiquetas)`, [],
    (err: any, response: any) => {
      if(err){
        rej(err.message);
      }else{
        res(response);
      }
    }
  )})
}


const getEtiquetas = (id: number) => {
  return new Promise<Array<string>> ((res, rej) => {
    db.all(`SELECT nombre from etiquetas AS et INNER JOIN tareas_etiquetas AS teq ON et.etiquetaID = teq.etiqueta_id
    WHERE teq.tarea_id = ${id}`, [], (err: any, response: any) => {
      if (err) {
        rej(err.message);
      } else {
        const etiquetas = response.map( (et : Etiqueta) => et.nombre ); 
        res(etiquetas);
      }

    } )
    
  })
}



//db.close();

export default { getTareas, setNewTarea, getEtiquetas, newEtiqueta, eliminarFila, getLastId, insertaEtiqueta, getLastEtiquetaId, creaEtiqueta };
