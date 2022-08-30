var email=document.forms['form']['email'];
var password=document.forms['form']['password'];
var email_error=document.getElementById("email_error");
var password_error=document.getElementById("password_error");
function validated(){
    if(email.value.length<9){
        email.style.border="1px sold red";
        email_error.style.display="block";
        email.focus();
        return false;
    }
    if(password.value.length<9){
        password.style.border="1px sold red";
        password_error.style.display="block";
        password.focus();
        return false;
    }
}
