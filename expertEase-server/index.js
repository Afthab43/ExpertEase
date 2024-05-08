import express from 'express' ;
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app=express();

dotenv.config();

const PORT=process.env.PORT || 4000;
const MONGO_URI=process.env.MONGO_URI;

// app.get('/',(req,res,next)=>{
//     res.send('heyyyyy  guyss! ')
// });

let startserver=async()=>{
    try {
        mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}); //this we give when we connect globally
        console.log( "Database connected successfully");

        await app.listen(PORT,()=>{
            console.log(`Server is listening is running ${PORT}`)
        });
    } catch (error) {
         console.log(error.message)
    }
}

startserver()