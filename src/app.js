const express = require('express');

const mainRouter = require('./routers/main')

const app = express ();

const controller = require('./controllers/paginas');

const port = process.env.PORT || 3000;
app.listen(port,()=>console.log('server corriendo en el puerto'+port));

app.use(express.static('./src/Public'));


app.use('/', mainRouter);
app.use('/productCar', mainRouter);
app.use('/productDar', mainRouter);
app.use('/register', mainRouter);
app.use('/login', mainRouter);
