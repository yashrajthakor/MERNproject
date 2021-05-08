const express = require('express');
const app= express();

app.get('/',(req, res)=>{
    res.send(`Hello world from the server`)
})
app.get('/about',(req, res)=>{
    res.send(`Hello about,world from the server`)
})
app.get('/contact',(req, res)=>{
    res.send(`Hello contact, world from the server`)
})
app.get('/signup',(req, res)=>{
    res.send(`Hello signup world from the server`)
})
app.get('/signin',(req, res)=>{
    res.send(`Hello signin world from the server`)
})

//console.log("test node server")

app.listen(3000,()=>{
    console.log(`server running on 3000 port`)
})
