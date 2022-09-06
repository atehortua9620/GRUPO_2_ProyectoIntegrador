module.exports = function(req, res, next){
    if(req.session.usuarioLogged == undefined){
        
        res.redirect('/users/login');   
    }
    else{
        next();
    }
}