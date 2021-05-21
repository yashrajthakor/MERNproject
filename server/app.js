const dotenv = require('dotenv');
const express = require('express');
const app= express();

dotenv.config({path:'./config.env'});
require('./db/conn');
app.use(express.json());
const cookieParser = require("cookie-parser")
app.use(cookieParser());

//const User = require('./model/userSchema');

app.use(require('./router/auth')); // link router file to make route easy

const PORT= process.env.PORT; 

// app.get('/about', middleware,(req, res)=>{
//     console.log(`hello my aboutus`);
//     res.send(`Hello about,world from the server`)
// })
// app.get('/contact',(req, res)=>{
//     res.send(`Hello contact, world from the server`)
// })
app.get('/signup',(req, res)=>{
    res.send(`Hello signup world from the server`)
})
app.get('/signin',(req, res)=>{
    res.send(`Hello signin world from the server`)
})

//console.log("test node server")

app.listen(PORT,()=>{
    console.log(`server running on ${PORT} port`)
})
