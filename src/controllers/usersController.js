const { validationResult } = require ( 'express-validator' );
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');

const usersFilePath = path.join(__dirname, '../database/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath,'utf-8'));
const productFilePath = path.join(__dirname, '../database/productos.json');
const products = JSON.parse(fs.readFileSync(productFilePath, 'utf-8'));

const controladorUsers  = {
    register: (req,res)=>{
        let userlogged = req.session.usuarioLogged;
        res.render('./register.ejs',{userlogged});
    },
    registerManager: (req, res)=>{
       
        let id = users.length+1;
        let pssw= bcrypt.hashSync(req.body.password, 10);
        let imagen = '';
        if(!req.file){
            imagen = 'default-user.jpg'
        }
        else{
            imagen = req.file.filename;
        }
    
    

        let nuevoUsuario = {
            id: id,
            nombre: req.body.nombre,
            nick: req.body.nickname,
            mail: req.body.email,
            pais: req.body.country,
            contraseña: pssw,
            imagen: imagen,
        }

        users.push(nuevoUsuario);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, "    "));

        res.redirect('/users/login');

    },
    login: (req,res )=>{
        let userlogged = req.session.usuarioLogged;
        res.render('./login.ejs',{userlogged});
    },
    loginProcess : (req, res)=>{

        let usuario2Log = {
            mail: req.body.email,
            contraseña: req.body.password
        }
        
        users.find((usuario)=>{
            if(usuario.mail == usuario2Log.mail){
                if(bcrypt.compare(usuario2Log.contraseña,usuario.contraseña)){
                    console.log('hola'+' '+usuario.nombre+' '+'te encontré');
                    req.session.usuarioLogged = usuario;
                    console.log(req.session.userlogged)
                    res.redirect('/');
                }
            }
        })
            if(req.session.usuarioLogged == undefined){
                console.log('no encontre el usuario');  
        }
    }
}


module.exports = controladorUsers;