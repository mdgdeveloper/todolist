import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from "helmet";
import tareasRouter from './controllers/tareas';

const app = express();
app.use(express.json())

// Con esto creamos una tabla 
// db.run("CREATE TABLE tareas (id INT, tarea TEXT, proyecto TEXT)");

app.use(cors());
app.use(helmet());

// API default route

app.use('/api', tareasRouter);


// define port as environmental variable

dotenv.config();

const port = process.env.SERVER_PORT || 8080;

// define a route handler for the default home page
app.get('/', (req, res)=>{
    res.send('Hello World');
})



// start the Express server
app.listen( port, () => {
    console.log(`server started at http://localhost:${port}`);

});
