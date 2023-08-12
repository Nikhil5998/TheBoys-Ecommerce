document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('login-form');
    var signupLink = document.getElementById('signup-link');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Perform validation
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
  
      if (username === '' || password === '') {
        alert('Please enter both username and password.');
        return;
      }
  
      // Perform login (you can replace this with your login logic)
      alert('Logged in successfully!');
    });
  
    signupLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent link navigation
  
      // Perform signup action (you can replace this with your signup logic)
      alert('Sign up clicked!');
    });
  });
  