window.addEventListener('load', function () {
    let formulario = document.querySelector('form.formulario-login');
    formulario.addEventListener('submit', function (e) {

      let errores = [];

    let campoEmail = document.querySelector("input.mail");
      if (campoEmail.value == "") {
        errores.push("El campo email está vacío");
      } else if (campoEmail.value.length < 2) {
        errores.push("El campo email debe tener al menos 2 caracteres");
    }
      
    let campoPassword = document.querySelector("input.pass");
      if (campoPassword.value == "") {
        errores.push("El campo password está vacío");
      } else if (campoPassword.value.length < 8) {
        errores.push("El campo password debe tener al menos 8 caracteres");
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