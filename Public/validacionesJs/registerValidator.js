window.addEventListener('load', function () {

    let formulario = document.querySelector('form.formulario-register');
    formulario.addEventListener('submit', function (e) {

      let errores = [];
  
      let campoNombre = document.querySelector("#name");
      if (campoNombre.value.length < 2) {
        errores.push("El campo nombre necesita dos caracteres");
      }

    /* let campoNickName = document.querySelector("input.nick");
      if (campoNickName.value == "") {
        errores.push("El campo nickname está vacío");
      } else if (campoNickName.value.length < 2) {
        errores.push("El campo nickname debe tener al menos 2 caracteres");
    }

    let campoEmail = document.querySelector("input.mail");
      if (campoEmail.value == "") {
        errores.push("El campo email está vacío");
      } else if (campoEmail.value.length < 2) {
        errores.push("El campo email debe tener al menos 2 caracteres");
    }

    let campoCountry = document.querySelector("input.count");
      if (campoCountry.value == "") {
        errores.push("El campo country está vacío");
      } else if (campoCountry.value.length < 2) {
        errores.push("El campo country debe tener al menos 2 caracteres");
    }
      
    let campoPassword = document.querySelector("input.pass");
      if (campoPassword.value == "") {
        errores.push("El campo password está vacío");
      } else if (campoPassword.value.length < 8) {
        errores.push("El campo password debe tener al menos 8 caracteres");
    }
  
    let campoConfirmYourPassword = document.querySelector("input.confirm");
    if (campoConfirmYourPassword.value == "") {
      errores.push("El campo confirmYourPassword está vacío");
    } else if (campoConfirmYourPassword.value.length < 8) {
      errores.push("El campo password debe tener al menos 8 caracteres");
  }

  let campoAvatar = document.querySelector("input.ava");
    if (campoAvatar.value == "") {
      errores.push("El campo avatar está vacío");
    } */

    if(errores.length >= 0){
  
        e.preventDefault();

    let UlErrores = document.querySelector("div.errores ul");
    for (let i = 0; i < errores.length; i++ ) {
        UlErrores.innerHTML += "<li>" + errores[i] + "<li>"

  }
}

});
    })
