function validateLogin(){
 
 
 var username = document.getElementById('username').value;

 var password = document.getElementById('password').value;

if(username === 'nagalakshmi@gmail.com' && password === 'password'){

  document.getElementById('errorMessages').textContent = 'login successful';

}else {

  document.getElementById('errorMessages').textContent = 'invalid username or password.please try again..';

}

}