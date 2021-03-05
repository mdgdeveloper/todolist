import express from 'express';


const tareasRouter = express.Router();

tareasRouter.get('/', (_req,res)=> {
    res.json('API v1.0');

});

export default tareasRouter;