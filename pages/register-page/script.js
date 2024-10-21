document.getElementById('accountForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
   
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
  
  
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
  
  
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
  
  // modal 
    var successModal = new bootstrap.Modal(document.getElementById('successModal'));
    successModal.show();
  
    
    setTimeout(function() {
        window.location.href = '../login-page/login.html';
    }, 2000);
  });