const form = document.querySelector('form');
const loginLink = document.getElementById('loginLink');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (username && password) {
       
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

      
        const successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();

        
        setTimeout(() => {
            window.location.href = 'homepage.html'; // Replace with your actual homepage link
        }, 3000);
    } else {
        alert('Please enter both username and password!');
    }
});


loginLink.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = '';
});