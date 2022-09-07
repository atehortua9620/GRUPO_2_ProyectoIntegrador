module.exports = function(req, res, next){

    let userlogged = req.session.usuarioLogged;
    
    if(userlogged == undefined){
        res.redirect('/');
    }
    else if(userlogged.roll != 'super'){
        
        res.redirect('/');
    }
    else{

        next();
    }

    
}