var emailArray=[];
var passwordArray=[];

var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");
var forgetBox = document.getElementById("forgot");

var loginTab = document.getElementById("lt");
var regTab = document.getElementById("rt");

function regTabFun(){
    event.preventDefault();

    regBox.style.visibility="visible";
    loginBox.style.visibility="hidden";
    forgetBox.style.visibility="hidden";

    regTab.style.backgroundColor="rgba(0, 0, 0, 0.82)";
    loginTab.style.backgroundColor="rgba(116, 116, 111, 0.82)";
}
function loginTabFun(){
    event.preventDefault();

    regBox.style.visibility="hidden";
    loginBox.style.visibility="visible";
    forgetBox.style.visibility="hidden";

    loginTab.style.backgroundColor="rgba(0, 0, 0, 0.82)";
    regTab.style.backgroundColor="rgba(116, 116, 111, 0.82)";
}
function forTabFun(){
    event.preventDefault();

    regBox.style.visibility="hidden";
    loginBox.style.visibility="hidden";
    forgetBox.style.visibility="visible";
    regTab.style.backgroundColor="rgba(116, 116, 111, 0.82)";
    loginTab.style.backgroundColor="rgba(116, 116, 111, 0.82)";

}


function register(){
    event.preventDefault();
    var i = emailArray.indexOf(email);
    var email = document.getElementById("re").value;
    var password = document.getElementById("rp").value;
    var passwordRetype = document.getElementById("rrp").value;

    if (email == ""){
        alert("Please enter your email-address");
        return ;
    }
    else if (password == ""){
        alert("Please enter your password");
        return ;
    }
    else if (passwordRetype == ""){
        alert("Password required again, please enter!");
        return ;
    }
    else if ( password != passwordRetype ){
        alert("Password isn't same. \nRetype your password again!");
        return;
    }
    else if(i == -1){
        emailArray.push(email);
        passwordArray.push(password);

        alert("Thanks for registration. \nTry to login now");

        document.getElementById("re").value ="";
        document.getElementById("rp").value="";
        document.getElementById("rrp").value="";
    }
    else{
        alert(email + " is already registered.");
        return ;
    }
}
function login(){
    event.preventDefault();

    var email = document.getElementById("se").value;
    var password = document.getElementById("sp").value;

    var i = emailArray.indexOf(email);

    if(i == -1){
        if (email == ""){
            alert("Please enter your email-address");
            return ;
        }
        alert("Email does not exist, please sign up firstly!");
        return ;
    }
    else if(passwordArray[i] != password){
        if (password == ""){
            alert("Please enter your password");
            return ;
        }
        alert("Password is not true!");
        return ;
    }
    else {
        alert("Succefully!\nWelcome to our website!");

        document.getElementById("se").value ="";
        document.getElementById("sp").value="";
        return ;
    }

}
function forgot(){
    event.preventDefault();

    var email = document.getElementById("fe").value;
    var i = emailArray.indexOf(email);
    if(i == -1){
        if (email == ""){
            alert("Please enter your email-address");
            return ;
        }
        alert("Email does not exist.");
        return ;
    }

    alert("Code is sent to your email-address. \n Thanks for attempt!");
    document.getElementById("fe").value ="";
}