import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from "helmet";
import tareasRouter from './controllers/tareas';
import sqlite3 from 'sqlite3';
import path from 'path';


const dbPath = path.resolve(__dirname, '../db/datos.db')

const app = express();

const db = new sqlite3.Database(dbPath);

// Con esto creamos una tabla 
// db.run("CREATE TABLE tareas (id INT, tarea TEXT, proyecto TEXT)");

app.use(cors());
app.use(helmet());


// define port as environmental variable

dotenv.config();

const port = process.env.SERVER_PORT || 8080;

// define a route handler for the default home page
app.get('/', (req, res)=>{
    res.send('Hello World');
})

// API default route

app.use('/api', tareasRouter);

// start the Express server
app.listen( port, () => {
    console.log(`server started at http://localhost:${port}`);

});
