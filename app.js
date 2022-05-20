const express = require('express');
const app = express ();
const path = require('path');

app.listen(3000,()=>console.log('server corriendo'));

app.use(express.static('Public'));


app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/index.html'));
})

app.get('/productDetail', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'));
})

app.get('/productCar', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/productcar.html'));
})

app.get('/register', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})

app.get('/login', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/login.html'));
})