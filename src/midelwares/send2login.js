module.exports = function(req, res, next){
    if(req.session.usuarioLogged == undefined){
        console.log('please log in');
        res.redirect('/users/login');   
    }
    else{
        next();
    }
}