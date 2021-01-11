const user = "new_user";
const pass = "123456789";

var formCon = document.getElementById("login-container");
var userNameMesage = document.createElement("p");
var userPaswordMesage = document.createElement("p");
var SuccessfulLogin = document.createElement("p");
formCon.appendChild(userNameMesage);
formCon.appendChild(userPaswordMesage);
formCon.appendChild(SuccessfulLogin); //login mesage

var submitButton = document.getElementById("sub"); //login button

submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    var userName = document.getElementById("username"); // user name

    var userPass = document.getElementById("password"); //password

    var correctIconName = document.getElementById("iconNameCorect");
    var errorIconName = document.getElementById("iconNameError"); // Icon for user name

    var userInputName = document.getElementById("username").value; // user input name 
    if (userInputName === user) {
        userName.classList.remove("error");
        userName.classList.add("correct");
        userNameMesage.innerHTML = "";
        correctIconName.classList.remove("hide");
        correctIconName.classList.add("show");
        errorIconName.classList.remove("show");
        errorIconName.classList.add("hide"); //correct user name
    } else if (userInputName === "") {
        userName.classList.add("error");
        userNameMesage.innerHTML = "* please, enter username";
        correctIconName.classList.remove("show");
        correctIconName.classList.add("hide");
        errorIconName.classList.remove("hide");
        errorIconName.classList.add("show"); //no input user name
    } else {
        userName.classList.add("error");
        userNameMesage.innerHTML = "* please, enter valid username";
        correctIconName.classList.remove("show");
        correctIconName.classList.add("hide");
        errorIconName.classList.remove("hide");
        errorIconName.classList.add("show");
    } //error user name



    var correctIconPass = document.getElementById("iconPassCorect");
    var errorIconPass = document.getElementById("iconPassError"); // Icon for pasword 

    var userInputPass = document.getElementById("password").value; //password input
    if (userInputPass === pass) {
        userPass.classList.remove("error");
        userPass.classList.add("correct");
        userPaswordMesage.innerHTML = "";
        correctIconPass.classList.remove("hide");
        correctIconPass.classList.add("show");
        errorIconPass.classList.remove("show");
        errorIconPass.classList.add("hide"); //correct pasword
    } else if (userInputPass === "") {
        userPass.classList.add("error");
        userPaswordMesage.innerHTML = "* please, enter password";
        correctIconPass.classList.remove("show");
        correctIconPass.classList.add("hide");
        errorIconPass.classList.remove("hide");
        errorIconPass.classList.add("show"); //no input pasword
    } else {
        userPass.classList.add("error");
        userPaswordMesage.innerHTML = "* please, enter valid password";
        correctIconPass.classList.remove("show");
        correctIconPass.classList.add("hide");
        errorIconPass.classList.remove("hide");
        errorIconPass.classList.add("show");
    } //error pasword

    if (userInputName === user && userInputPass === pass) {
        SuccessfulLogin.innerHTML = "* Successful login!";
    } //all corect
})