window.addEventListener('load', function () {
    let formulario = document.querySelector('form.create-edit-product');
    formulario.addEventListener('submit', function (e) {

      let errores = [];

      let campoTitle = document.querySelector("#title");
      let campoDescription = document.querySelector("#description");
      let campoImage = document.querySelector("#image");
      
      if (campoTitle.value.length < 5) {
        errores.push("Your title must has five characters or upper to be valid");
      }

      if (campoDescription.value.length < 20) {
        errores.push("Your description must has twenty characters or upper to be valid");
      }

      if(campoImage.value == ''){
        errores.push('You have to upload an image jpg, jpeg, png, gif')
      }

    if(errores.length > 0){
        e.preventDefault();
        alert("Sorry we've found some errors in your load new product");

    let UlErrores = document.querySelector("div.errores ul");
    for (let i = 0; i < errores.length; i++ ) {
        UlErrores.innerHTML += "<li>" + errores[i] + "<li>"

  }
}

});
    })
