window.addEventListener('load', function () {
    let formulario = document.querySelector('form.create-edit-product');
    formulario.addEventListener('submit', function (e) {

      let errores = [];
  
      let campoTitle = document.querySelector("input.titulo");
      if (campoTitle.value == "") {
        errores.push("El campo title está vacío");
      } else if (campoTitle.value.length < 5) {
        errores.push("El campo title debe tener al menos 5 caracteres");
    }

    let campoDescription = document.querySelector("input.descripcion");
      if (campoDescription.value == "") {
        errores.push("El campo descripcion está vacío");
      } else if (campoDescription.value.length < 20) {
        errores.push("El campo descripcion debe tener al menos 20 caracteres");
    }

  let campoImage = document.querySelector("input.imagen");
    if (campoImage.value == "") {
      errores.push("El campo image está vacío");
    }

    if(errores.length > 0){
        e.preventDefault();

    let UlErrores = document.querySelector("div.errores ul");
    for (let i = 0; i < errores.length; i++ ) {
        UlErrores.innerHTML += "<li>" + errores[i] + "<li>"

  }
}

});
    })
