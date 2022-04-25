const express = require('express');
const app = express ();

app.listen(3000,()=>console.log('server corriendo'));

app.get('/', function(req, res){
    res.send('bienvenidos');
})

