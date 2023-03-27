import express from 'express'
import dotenv from 'dotenv';
import {dbConnect} from './config/dbConnect.js';
import evtolRoute from './evtoroute/evtoroute.js';
dotenv.config();
dbConnect();
const app =  express();
app.use(express.json());
app.use('evtol/api/v1/',evtoRoute)
const PORT = 3000;
app.listen(PORT,()=>{
    console.log('Server started at '+PORT);
});

