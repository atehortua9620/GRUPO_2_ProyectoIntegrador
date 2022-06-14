const fs = require('fs');
const path = require('path');

const  productos = JSON.parse(fs.readFileSync(path.join(__dirname, "../database/productos.json"),'utf-8'));

const controller = {
    productDetail:(req,res)=>{
        res.render('./productDetail.ejs');
    },
    createEditProduct: (req,res)=>{
        res.render('./createEditProduct.ejs');
        
    },
    procesandoData:(req, res)=>{

        let id = productos.length + 1;
        req.body.id = id;
        const nuevo ={
            ...req.body,
        
        }
    
        

        res.redirect('/');
    }
}

module.exports = controller;