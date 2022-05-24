/* const path = require('path'); */

const rutas ={
    home: (req,res)=>{
        res.render('./index.ejs');
    },

    productCar:(req,res)=>{
        res.render('./productcar.ejs');
    },
    register: (req,res)=>{
        res.render('./register.ejs');
    },
    login: (req,res )=>{
        res.render('./login.ejs');
    }
}

module.exports = rutas;