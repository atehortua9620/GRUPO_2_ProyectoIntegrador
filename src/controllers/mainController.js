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
        res.render('./productcar.ejs',{userlogged});
    },

    killsession: (req,res)=>{
        req.session.destroy((err) => {
        res.redirect('/');
      })
    }
}

module.exports = rutas;