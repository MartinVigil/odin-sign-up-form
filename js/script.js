const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");
const btn = document.querySelector("button");
const form = document.querySelector("#myform");

form.addEventListener("submit", evt => {
    evt.preventDefault();
    if(password.value != confirmPassword.value){
        alert("Los contraseñas no coinciden.");
        return;
    }

    form.submit();
})



