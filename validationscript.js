
var creatBtn = document.querySelector('.creat-btn');




creatBtn.addEventListener('click',funname);

function funname(num){

    var checkBtn = document.querySelector('#check').checked;
    console.log(checkBtn);
    
    num.preventDefault();

    var firstName = document.getElementById('first-name').value;
    
    var chg_FirstName = document.querySelector('.first-n');

    var message_firstname = document.querySelector('#first-msg');

    if(firstName == ''){
       message_firstname.textContent = 'This question is required.';
    }
   else if(checkBtn == true){
    message_firstname.textContent = '';

    chg_FirstName.innerHTML = firstName;

   }
    
    var lastName = document.querySelector('#last-name').value;

    var chg_LastName =document.querySelector('.last-n');

    var msg_Lastname = document.querySelector('#last-msg');

    if(lastName == ''){
        msg_Lastname.textContent = 'This question is required.';
     }
    else if(checkBtn == true){
        msg_Lastname.textContent = '';

        chg_LastName.innerHTML = lastName;
    }

    //----------------------phone number-------------------------------

    var phone_num = document.querySelector('#phone-num').value;
     
    var chg_phoneNum = document.querySelector('.phone-n');

    var message_phone = document.querySelector('#msg-num');
    if(phone_num == ''){
        message_phone.textContent = 'This question is required.';
    }
    else if(phone_num.length == 10 && checkBtn == true ){
        message_phone.textContent = '';
        chg_phoneNum.innerHTML = '91+'+phone_num;
    }
    else if(phone_num.length < 10 && phone_num != ''){
        var message = 10 - phone_num.length;
        message_phone.textContent = 'missing  '+message+'  numbers';
    }
    else if(phone_num.length > 10){
        message_phone.textContent = 'check phone numbers';
    }
     
   //-----------------email-------------------------------

    var email = document.querySelector('#email').value;

    var chg_email = document.querySelector('.e-mail');

    var email_Message = document.querySelector('#msg-email');

    if(email == ''){
        email_Message.textContent = 'This question is required.';
    }
    else if(checkBtn == true){
        email_Message.textContent = '';
        chg_email.innerHTML = email;
    }

//---------------------password--------------------------

    var password = document.querySelector('#password').value;

    var chg_password = document.querySelector('.pas-word');

    var message_password = document.querySelector('#msg-pass');
    
    if(password == ''){
        message_password.textContent = 'This question is required.';  
     }
     else if(password.length <= 6){

        message_password.textContent = 'password atleast six characters.';
    }
    else if(password.length >= 6){
        message_password.textContent = '';
    }
    
      
//-----------------------conform password-----------------------------

    var con_password = document.querySelector('#con-pas').value;

    var chg_conpass = document.querySelector('.con-pas');

    var msg_conpasssword = document.querySelector('#msg-con');

     if(con_password == ''){

       msg_conpasssword.textContent ='This question is required.';
    }
    else if(con_password.length >= 6){ 
     if(password == con_password && checkBtn == true){
      
        message_password.textContent = '';

        msg_conpasssword.textContent = '';

        chg_conpass.innerHTML = con_password;

        chg_password.innerHTML = password;
    }
    else if(password != con_password){
        
        msg_conpasssword.textContent = 'not matched password try again';
    }
    }
    

}
    
    


    