function signupvalidation(){
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      var confirm_pasword = document.getElementById('confirm_pasword').value;
      var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        
      var valid=true;

      if(name == ""){
          valid = false;
          document.getElementById('name_error').innerHTML = "required.";
      }

      if(email == ""){
          valid = false;
          document.getElementById('email_error').innerHTML = "required.";
      } else {
          if(!emailRegex.test(email)){
              valid = false;
              document.getElementById('email_error').innerHTML = "invalid.";
          }
      }

      if(password == "" ){
          valid = false;
          document.getElementById('password_error').innerHTML = "required.";
      }
      if(confirm_pasword == "" ){
          valid = false;
          document.getElementById('confirm_password_error').innerHTML = "required.";
      }

      if(password != confirm_pasword){
          valid = false;
          document.getElementById('confirm_password_error').innerHTML = "Both passwords must be same.";
      }

      return valid;
  }