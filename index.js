
function store(){

    var email = document.getElementById('email');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(email.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(email.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');

    }else if(pw.value.length < 3){
        alert('Minimum 3 characters required');

    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else{
        localStorage.setItem('email', email.value);
        localStorage.setItem('pw', pw.value);
        alert('Your account has been created');
        alert(email.value);
        // href= 'login.html';
    }
}

//checking
function check(){
    var storedEmail = localStorage.getItem('email');
    var storedPw = localStorage.getItem('pw');

    var email = document.getElementById('email');
    var userPw = document.getElementById('userPw');

    if(email.value == storedEmail && userPw.value == storedPw){
        alert('You are logged in.');
    }else{
        alert('Error on login');
    }
}