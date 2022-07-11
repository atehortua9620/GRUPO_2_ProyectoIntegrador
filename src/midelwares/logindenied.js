module.exports = function (req, res,next){

    if(req.session.usuarioLogged != undefined){
        console.log('ya estas logueado');
        res.redirect('/');   
    }
    else{
        next();
    }
}