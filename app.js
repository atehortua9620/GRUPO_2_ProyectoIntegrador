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