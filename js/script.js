let regexPhone = /^(002)?(02)?(\+2)?01[1025][0-9]{8}$/;
let regexEmail = /^[A-Za-z0-9_.-]{1,}@(gmail|yahoo|outlook|hotmail)\.com$/;
let regexAddress = /^[A-Za-z0-9-._, ]{10,}$/
let emailInput = document.getElementById("email-input");
let phoneInput = document.getElementById("phone-input");
let addressInput = document.getElementById("address-input");
let confirmProfile = document.getElementById("confirm-profile");
let formProfile = document.getElementById("form-profile");
let emailLabel = document.getElementById("email-label");
let phoneLabel = document.getElementById("phone-label");
let addressLabel = document.getElementById("address-label");

/* Validate email */
emailInput.addEventListener("keyup" , function(){

    if(regexEmail.test(emailInput.value) == false)
    {
        emailLabel.classList.add("show");
    }
    else
    {
        emailLabel.classList.remove("show");
    }
});

/* Validate phone */
phoneInput.addEventListener("keyup" , function(){

    if(regexPhone.test(phoneInput.value) == false)
    {
        phoneLabel.classList.add("show");
    }
    else
    {
        phoneLabel.classList.remove("show");
    }
});

/* Validate address */
addressInput.addEventListener("keyup" , function(){

    if(regexAddress.test(addressInput.value) == false)
    {
        addressLabel.classList.add("show");
    }
    else
    {
        addressLabel.classList.remove("show");
    }
});

/* Preventing form from submitting if there's error/s */
formProfile.addEventListener("submit" , function(e){

    if(emailLabel.classList.contains("show") == true || phoneLabel.classList.contains("show") == true || addressLabel.classList.contains("show") == true)
    {
        e.preventDefault();
        window.alert("Some inputs are filled wrongly");
    }
})


















/* Password */
document.getElementById("changePass").addEventListener("click",function(){

    document.getElementById("changePass").classList.add("hide");
    document.getElementById("showChangePass").classList.add("show");
});

let validatePass = document.getElementById("newPass");
let validatePassMatch = document.getElementById("newPassConfirm");
let confirmButton = document.getElementById("confirmChangePass");
let regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

confirmButton.setAttribute("disabled" , "true");

validatePass.addEventListener("keyup" , function(){

    if(regexPass.test(validatePass.value) == false || validatePass.value.length == 0)
    {
        document.getElementById("passControl").classList.add("show");

    }

    else if(regexPass.test(validatePass.value) == true)
    {
        document.getElementById("passControl").classList.remove("show");
    }
    
});

validatePassMatch.addEventListener("keyup" , function(){

    if(validatePassMatch.value !== validatePass.value)
    {
        document.getElementById("passControlMatch").classList.remove("hide");
    }
    else if(validatePassMatch.value == validatePass.value && regexPass.test(validatePass.value) == true )
        {
            document.getElementById("passControlMatch").classList.add("hide");
            confirmButton.removeAttribute("disabled");
        } 
});