const path = require('path');

const rutas ={
    home: (req,res)=>{
        res.sendFile(path.resolve(__dirname, '../views/index.html'));
    },
    productDetail:(req,res)=>{
        res.sendFile(path.resolve(__dirname, '../views/productDetail.html'));
    },
    productCar:(req,res)=>{
        res.sendFile(path.resolve(__dirname, '../views/productcar.html'));
    },
    register: (req,res)=>{
        res.sendFile(path.resolve(__dirname, '../views/register.html'));
    },
    login: (req,res )=>{
        res.sendFile(path.resolve(__dirname, '../views/login.html'));
    }
}

module.exports = rutas;