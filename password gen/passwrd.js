function getpassword(){

    var char ="1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*(){}:<>?,./~`|\[]";
    var passwordlength= 16;
        var password = '';

    for (var i=0 ; i < passwordlength ; i++){
        var randomNumber=Math.floor(Math.random() * char.length);
        password += char.substring(randomNumber,randomNumber+1);
    }
    document.getElementById("password").value = password
}
