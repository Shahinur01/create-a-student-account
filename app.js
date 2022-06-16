const  studentForm=document.getElementById('studentForm');
const msg=document.querySelector('.msg');

// Email get element
const emailInputField=document.querySelector('#email');
const emailOutput=document.querySelector('#emailOutput');

//password output get element
const passwordInputField=document.querySelector('#password');
const passwordOutput=document.querySelector('#passwordOutput');

// Phone number get element
const phoneInputField=document.querySelector('#phone');
const phoneOutput=document.querySelector('#phoneOutput');

//loading get element
const loading = document.querySelector('.loading');


studentForm.addEventListener("submit",function(e){
    e.preventDefault();
// loading 
    loading.style.display="block";
    let timeOut= setTimeout(()=>{
    loading.style.display="none";

            // Destructuring
   const formData =new FormData(e.target);
   const {name,userName,email,phone,gender,subject} = Object.fromEntries(formData.entries());

    if(!name || !userName || !email || !phone || !password || !gender || !subject){
        msg.innerHTML=setAlert("All fields are required");
    }else{
        msg.innerHTML=setAlert(" All fields are stable","success");
        e.target.reset();
    }
        clearTimeout(timeOut);
    },2000);
})


// email validation
emailInputField.onkeyup = (event) => {
    let email=event.target.value;
    if (emailCheck(email)) {
        emailOutput.textContent=`Email is a valid`;
        emailOutput.className="text-success";
    }
    else{
        emailOutput.textContent=`Email is not a valid`;
        emailOutput.className="text-warning";
    }
}
// password verification
passwordInputField.onkeyup=(event)=>{
    let password = event.target.value;
    if (passwordCheck(password)){
        passwordOutput.textContent=`This password is allowed`;
        passwordOutput.className =`text-success`;
    } else{
        passwordOutput.textContent=`
        01.A password should be alphanumeric.
        02.First letter of the password should be capital.
        03.Password must contain a special character (@, $, !, &, etc)
        04.Password length must be greater than 8 characters`;
        passwordOutput.className=`text-info`;
    }
}
/* phone number verification */
phoneInputField.onkeyup = (event) => {
    let phone=event.target.value;
    if (phoneCheck(phone)) {
        phoneOutput.textContent=`phone number is a valid`;
        phoneOutput.className="text-success";
    }
    else{
        phoneOutput.textContent=`phone number is not a valid`;
        phoneOutput.className="text-warning";
    }
}