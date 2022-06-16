const login=document.getElementById('login');
login.addEventListener('submit',function() {
    const userName=document.getElementById('userName');
    const userEmail=userName.value;
    const userPassword=document.getElementById('password');
    const userPassword2=userPassword.value;
    // console.log(userEmail);

    if (userEmail == "shahinur@gmail.com" && userPassword2 =="shahinur@gmail.com") {
        window.location.href="./commingSoon.html";
    }
    else{
        
    }

})