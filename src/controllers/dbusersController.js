const db = require('../database/models');
const bcrypt = require('bcryptjs');

const dbUserController = {
    registerManagerDb: async (req, res)=>{
        try{
            let passw = bcrypt.hashSync(req.body.password, 10);
            let imagen = ''
            
            !req.file ? imagen =  'default-user.jpg' : imagen = req.file.filename;

            const nuevoUsuario = {
                name: req.body.name,
                nick: req.body.nickname,
                email:req.body.email,
                password: passw,
                imagen: imagen,
                countries_id: req.body.country,
                roles_id: req.body.rol,
            }
            await db.User.registerManagerDb(nuevoUsuario);
        }
        catch (error){
            res.json(error);
        }
    }
}

module.exports = dbUserController;