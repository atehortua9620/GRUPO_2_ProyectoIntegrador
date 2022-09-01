window.addEventListener('load', function () {
    let formulario = document.querySelector('form.formulario-login');
    formulario.addEventListener('submit', function (e) {

      let errores = [];

      let campoEmail = document.querySelector("#mail");
      let campoPassword = document.querySelector("#pass");
      let specialCharacters = ['.','-','@','*']
      let passwordValidation = [];

      if (campoEmail.value == "") {
        errores.push("Email field is empty, please fill");
      } else if (!campoEmail.value.includes('@')) {
        errores.push("Please use the basic structure for email field");
    }

    if (campoPassword.value == "") {
      errores.push("Please setup your password");
    } else if (campoPassword.value.length < 8) {
      errores.push("Your password lenght must be 8 or upper");
    }

    if(errores.length > 0){
        e.preventDefault();
        alert("Sorry we've found some errors in your login");

    let UlErrores = document.querySelector("div.errores ul");
    UlErrores.innerHTML= " ";
    for (let i = 0; i < errores.length; i++ ) {
        UlErrores.innerHTML += "<li>" + errores[i] + "<li>"

  }
}

});
    })