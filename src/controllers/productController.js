const fs = require('fs');
const path = require('path');

const  filePath = path.join(__dirname, "../database/productos.json");

const  productos = JSON.parse(fs.readFileSync(filePath,'utf-8'));

const controller = {


    productDetail:(req,res)=>{
        id= req.params.id;
        const filtrados = productos.find((product=> product.id == id));
        if(!filtrados){
            res.redirect('/');
        }
        else{
        res.render('./productDetail.ejs',{filtrados});
        }
  
    },

    createEditProduct: (req,res)=>{
        res.render('./createEditProduct.ejs', {productos});
        
    },
    eliminarProduct:(req, res)=>{
        const productoElimarId = req.params.id;
        
        const eliminando = productos.filter((product)=>{
           return product.id != productoElimarId;
        });

        fs.writeFileSync(filePath, JSON.stringify(eliminando, null, "    "));

       res.redirect('/');

    },
    editar: (req, res)=>{
        id= req.params.id;
        const filtrados = productos.find((product=> product.id == id));
        if(!filtrados){
            res.redirect('/');
        }
        else{
        res.render('edit.ejs',{filtrados});
        }
       

    },
    update: (req, res)=>{
        req.body.id = req.params.id;

        req.body.image = req.file ? req.file.filename: 'default.png';

        let productUpdated = productos.map((producto)=>{
            if(producto.id == req.body.id){
                return producto = req.body;
            }
            else{
                return producto;
            }
        })

        let actualizado = JSON.stringify(productUpdated, null, '  ');

        fs.writeFileSync(filePath, actualizado);
        res.redirect('/');

    },
   
    procesandoData:(req, res)=>{

        let id = productos.length + 1;
        
        const nuevo ={
            id: id,
            title:req.body.title,
            price: 'USD' + req.body.price,
            categories: req.body.Categories,
            description: req.body.description,
            material: req.body.material,
            image: req.file.filename,
        }
        productos.push(nuevo);

        fs.writeFileSync(filePath, JSON.stringify(productos, null, "    "));

        res.redirect('/');
    }
}

module.exports = controller;