import dotenv from 'dotenv';
import express from 'express';

const app = express();


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
