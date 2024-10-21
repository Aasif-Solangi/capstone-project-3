document.getElementById('accountForm').addEventListener('submit', function (event) {
  event.preventDefault(); 

  const { value: username } = document.getElementById('username');
  const { value: password } = document.getElementById('password');
 
  if (username === password) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
  
      alert('Account created successfully!');
      
      window.location.href = 'index.html';
  } else {
      alert('Passwords do not match!');
    }
});