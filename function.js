/* 
set alert function
*/
const setAlert=(msg,type="danger")=>{
    return `<p class="alert alert-${type} d-flex justify-content-between">${msg} <button data-bs-dismiss="alert" class="btn-close"></button> </p>`;
}

/* 
Email check regular expression: 
*/
const emailCheck=(email)=>{
    let pattern=/^[a-zA-Z0-9_\.]{1,}@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,5}$/;
    return pattern.test(email);
  }
  
/*
Phone number regular expression: 
*/
const phoneCheck=(phone)=>{
    let pattern=/^(01| 8801|\+880|)[0-9]{9}$/;
    return pattern.test(phone);
}

/* 
  password regular expression: 
*/
const passwordCheck=(password)=>{
    let pattern=/^[a-zA-Z0-9_!#$%&'*\+/=?^_`']{2,} $/;
    return pattern.test(password);
}
