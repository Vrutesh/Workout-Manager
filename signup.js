let name_validation;
let password_validation;
let email_validation;
let cpass_validation;

document.getElementById('sign-up-button').addEventListener('click', () => {
    //name validation 
    const name = document.getElementById("name").value;
    if (name == "") {
        document.getElementById("name").style.border = "3px solid red"
        name_validation = "Name cannot be empty. Please fill your name";
    }
    else {
        document.getElementById("name").style.border = "3px solid springgreen"
        name_validation = ""
    }
    document.getElementById("name_error").innerHTML = name_validation;

    //password validation
    const password = document.getElementById("password").value;
    if (password == "") {
        document.getElementById("password").style.border = "3px solid red"
        password_validation = "Enter a password"
    }
    else if (password.length < 8) {
        document.getElementById("password").style.border = "3px solid red"
        password_validation = "password should not be less than 8 characters"
    }
    else if (password.length > 15) {
        document.getElementById("password").style.border = "3px solid red"
        password_validation = "password should not be greater than 15 characters"
    }
    else {
        document.getElementById("password").style.border = "3px solid springgreen"
        password_validation = ""
    }
    document.getElementById("password_error").innerHTML = password_validation;


    //email validation
    const email = document.getElementById("email").value;
    if (email == "") {
        email_validation = "Email cannot be empty"
        document.getElementById("email").style.border = "3px solid red"
    }
    else {
        document.getElementById("email").style.border = "3px solid springgreen"
        email_validation = ""
    }
    document.getElementById("email_error").innerHTML = email_validation;

})
