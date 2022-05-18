const express = require('express');

const app = express ();
const path = require('path');

const controller = require('../controllers/paginas');

const port = process.env.PORT || 3000;
app.listen(port,()=>console.log('server corriendo en el puerto'+port));

app.use(express.static('Public'));


app.get('/', controller.home);
app.get('/productDetail',controller.productDetail )
app.get('/productCar', controller.productCar)
app.get('/register', controller.register)