let firstNameValid=document.getElementById('firstNameValid');
let firstNameInvalid=document.getElementById('firstNameInValid');
let lastNameValid=document.getElementById('lastNameValid');
let lastNameInvalid=document.getElementById('lastNameInValid');
let emailValid=document.getElementById('emailValid');
let emailInvalid=document.getElementById('emailInValid');
let phoneNumberValid=document.getElementById('phoneNumberValid');
let phoneNumberInValid=document.getElementById('PhoneNumberInValid');
let zipCodeValid=document.getElementById('zipCodeValid');
let zipCodeInValid=document.getElementById('zipCodeInValid');
let checkInValid=document.getElementById("checkInValid");
let stateInValid=document.getElementById("stateInValid");
let stateValid=document.getElementById("stateValid");

function validate() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let state = document.getElementById("state").value;
    let zipCode = document.getElementById("zipCode").value;
    let checkBox=document.getElementById("checkBox");
    
    
    if(firstName===""){
        firstNameInvalid.style.display = 'block';
        firstNameValid.style.display='none';
    }else{
        firstNameValid.style.display = "block";
        firstNameInvalid.style.display='none';
    }
    if(lastName===""){
        lastNameInvalid.style.display = 'block';
        lastNameValid.style.display='none';
    }else{
        lastNameValid.style.display = "block";
        lastNameInvalid.style.display='none';
    }

    if(email==="" || (!email.includes('@') )|| email.startsWith('@') || email.slice(email.lastIndexOf('.')).length<3){
        emailInvalid.style.display = 'block';
        emailValid.style.display='none';
    }else{
        emailValid.style.display = "block";
        emailInvalid.style.display='none';
    }
    if(phoneNumber.length!=10 || Number(phoneNumber[0]<6)){
        phoneNumberInvalid.style.display = 'block';
        phoneNumberValid.style.display='none';
    }else{
        phoneNumberValid.style.display = "block";
        phoneNumberInvalid.style.display='none';
    }

    if(zipCode.length<6 ){
        zipCodeInValid.style.display = 'block';
        zipCodeValid.style.display='none';
    }else{
        zipCodeValid.style.display = "block";
        zipCodeInValid.style.display='none';
    }
    if(!checkBox.checked){
        checkInValid.style.display='block';
    }
    else{
        checkInValid.style.display='none';
    }
    if(state===''){
        stateInValid.style.display='block';
        stateValid.style.display='none';
    }else{
        stateInValid.style.display='none';
        stateValid.style.display='block';
    }
  
}
