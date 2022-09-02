window.addEventListener('load',function(req){

    let boton = this.document.querySelector('#logout');

    boton.addEventListener('click', function(e){
        alert('saliste de la session')
    })

})