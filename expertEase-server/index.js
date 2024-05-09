import express from 'express' ;
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import learnRouter from './Routes/expertease.route.js';

const app=express();

app.use(cors());
dotenv.config();

const PORT=process.env.PORT || 4000;
const MONGO_URI=process.env.MONGO_URI;

// app.get('/',(req,res,next)=>{
//     res.send('heyyyyy  guyss! ')
// });
app.use('/learn',learnRouter);

let startserver=async()=>{
    try {
       await app.listen(PORT,()=>{
            console.log(`Server is listening is running ${PORT}`)
            });

        mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}); //this we give when we connect globally
        console.log( "Database connected successfully");

    } catch (error) {
         console.log('error:',error);
    }
}
startserver()