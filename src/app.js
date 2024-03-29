let path = require('path');
const express = require('express');
const app = express ();
const methodOverride = require('method-override');
const session = require('express-session');

const mainRouter = require('./routers/mainRouters')
const productRouter = require('./routers/productRouters')
const usersRoutes = require('./routers/usersRoutes')


app.set('view engine', 'ejs');
app.set  ('views', './src/views');
app.use(express.static(path.join(__dirname, '../public')));

const port = process.env.PORT || 3001;
app.listen(port,()=>console.log('server corriendo en el puerto'+port));

/* añadiendo lineas para trabajar con paquetes JSON */
app.use(express.json());
/*linea para trabajar con el metodo POST */
app.use(express.urlencoded({extended: false}));
/*Linea para trabajar con libreria method over ride (librerira para usar PUT y DELETE) */
app.use(methodOverride('_method'));
app.use(session({secret: 'shh, its a secret'}));





app.use(express.static('./src/Public'));
app.use('/', mainRouter);
app.use('/product', productRouter);
app.use('/users',usersRoutes);

/*linea para enviar pagina de error 404 not found */
app.use((req, res, next) =>{
    res.status(404).render('./not-found')});



