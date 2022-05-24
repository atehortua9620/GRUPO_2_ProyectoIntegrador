const express = require('express');
const app = express ();

const mainRouter = require('./routers/mainRouters')
const productRouter = require('./routers/productRouters')

app.set('view engine', 'ejs');
app.set  ('views', './src/views');

const port = process.env.PORT || 3000;
app.listen(port,()=>console.log('server corriendo en el puerto'+port));

app.use(express.static('./src/Public'));


app.use('/', mainRouter);
app.use('/product', productRouter);



