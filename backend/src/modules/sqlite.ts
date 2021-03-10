import sqlite3 from "sqlite3";
import path from "path";
import { TareaResult, Tarea, Etiqueta } from '../types/global';

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

const setNewTarea = (tarea: Tarea) => {
  return new Promise<Array<TareaResult>> ((res, rej) => {
    db.run(
      `INSERT INTO tareas (id,tarea,proyecto) VALUES ('${tarea.id}', '${tarea.tarea}', '${tarea.proyecto}')`, [],
      (err: any, response: any) => {
        if (err) {
          rej(err.message);
        } else {
          res(response);
        }
      }
    );
  });
};

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

export default { getTareas, setNewTarea, getEtiquetas };
