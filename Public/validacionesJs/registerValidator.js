window.addEventListener('load', function () {

    let formulario = document.querySelector('form.formulario-register');
    formulario.addEventListener('submit', function (e) {

      let errores = [];
  
      let campoNombre = document.querySelector("#name");
      let campoNickName = document.querySelector("#nick");
      let campoEmail = document.querySelector("#mail");
      let campoCountry = document.querySelector("#countrie");
      let campoPassword = document.querySelector("#pass");
      let campoConfirmYourPassword = document.querySelector("#confirm");
      let campoAvatar = document.querySelector("#ava");
      let specialCharacters = ['.','-','@','*']
      let passwordValidation = [];

       if (campoNombre.value.length < 2) {
        errores.push("Your name must has two characters or upper to be valid");
      
      } 
      if (campoNickName.value.length == "") {
        errores.push("The nickname field is empty, if you don't have any nickname, please enter your real name");
      }
    
      if (campoEmail.value == "") {
        errores.push("Email field is empty, please fill");
      } else if (!campoEmail.value.includes('@')) {
        errores.push("Please use the basic structure for email field");
    }

    if (campoCountry.value == 0) {
      errores.push("Please select your countrie");
    }
    if (campoPassword.value == "") {
      errores.push("Please setup your password");
    } else if (campoPassword.value.length < 8) {
      errores.push("Your password lenght must be 8 or upper");
    }
    if(campoConfirmYourPassword.value !=campoPassword.value){
    errores.push('Sorry we found some differences in your password confirmation')
    }
    if(campoConfirmYourPassword.value == ''){
    errores.push('Please confirm your password')
    }
  
    if(campoAvatar.value == ''){
      errores.push('You have to upload an image jpg, jpeg, png, gif')
      }

    if(errores.length > 0){
  
        e.preventDefault();
        alert("Sorry we've found some errors in your registration");

    let UlErrores = document.querySelector("div.errores ul");
    UlErrores.innerHTML = " ";
    for (let i = 0; i < errores.length; i++ ) {
        UlErrores.innerHTML += "<li>" + errores[i] + "<li>"

  }
}

});
    })
