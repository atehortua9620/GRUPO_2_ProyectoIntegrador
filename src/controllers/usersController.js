const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');

const usersFilePath = path.join(__dirname, '../database/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath,'utf-8'));

const controladorUsers  = {
    register: (req,res)=>{
        res.render('./register.ejs');
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
            name: req.body.nombre,
            nick: req.body.nickname,
            mail: req.body.email,
            pais: req.body.country,
            contraseña: pssw,
            imagen: imagen,
        }

        users.push(nuevoUsuario);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, "    "));

        res.redirect('/');

    },
    login: (req,res )=>{
        res.render('./login.ejs');
    }
}

module.exports = controladorUsers;