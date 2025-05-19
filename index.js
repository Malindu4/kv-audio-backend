import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';    
import userRouter from './routes/useReducer.js';

import productRouter from './routes/productRouter.js';
import jwt from "jsonwebtoken"

import dotenv from "dotenv";
import reviewRouter from './routes/reviewRouter.js';
dotenv.config();


let app=express();

app.use(bodyParser.json());
app.use((req, res, next) => {
    let token= req.header
    ("Authorization");

   
    if(token  !=null){
        token=token .replace("Bearer ","");
        console.log(token)

        jwt.verify(token,process.env.jwi_secret,
            (err,decoded)=>{
            if(!err){
                req.user=decoded;
               
            }
           
        })
       
    }
    

   next();  
    
})


let mongoUrl=process.env.MONGODB_URI

mongoose.connect(mongoUrl);
let connection=mongoose.connection;


connection.once("open",()=>{
    console.log("Database connected");
})

app.use("/api/users",userRouter)
app.use("/api/products",productRouter)
app.use("/api/reviews",reviewRouter)

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})

//kamal.silva@example.com
//1234
