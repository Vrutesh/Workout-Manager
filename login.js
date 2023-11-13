let email_validation;
let password_validation;

function loginSubmit() {


    //email validation
    const email = document.getElementById("email").value
    if (email == "") {
        document.getElementById("email").style.border = "3px solid red"
        email_validation = "Please enter an email address"
    }
    else {
        document.getElementById("email").style.border = "3px solid springgreen"
        email_validation = ""
    }
    document.getElementById("email-error").innerHTML = email_validation;

    //password validation
    const password = document.getElementById("password").value

    if (password == "") {
        document.getElementById("password").style.border = "3px solid red"
        password_validation = "Please enter your password"
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
    document.getElementById("password-error").innerHTML = password_validation;
}