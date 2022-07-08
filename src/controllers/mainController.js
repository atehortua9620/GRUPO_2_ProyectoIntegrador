const path = require('path');
const fs = require('fs');

const productFilePath = path.join(__dirname, '../database/productos.json');
const products = JSON.parse(fs.readFileSync(productFilePath, 'utf-8'));


const rutas ={
    home: (req,res)=>{
        let userlogged = req.session.usuarioLogged;
        res.render('./index.ejs', {products,userlogged});    
    },

    productCar:(req,res)=>{
        let userlogged = req.session.usuarioLogged;
        res.render('./productcar.ejs',userlogged);
    }
    /* notFound: (req, res, next) =>{
        res.status(404).render('./not-found')
    } */
}

module.exports = rutas;