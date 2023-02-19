// Login Html Code
const emailInput = document.getElementById('user-email');
const emailError = document.getElementById('email-error');
const passwordInput = document.getElementById('user-password');
const passwordError = document.getElementById('password-error');
// Login Button
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', function(){
    const userEmail = emailInput.value;
    const userPassword = passwordInput.value;

    if(userEmail === 'admin@gmail.com' && userPassword === '12345'){
        emailError.style.display = 'none';
        passwordError.style.display = 'none';
        window.location.href = 'bank.html';
    }
    else if(userEmail === 'admin@gmail.com'){
        emailError.style.display = 'none';
        if(userPassword === '12345'){
            passwordError.style.display = 'none';
        }
        else{
            passwordError.style.display = 'block';
        }
    }
    else if(userPassword === '12345'){
        passwordError.style.display = 'none';

        if(userEmail === 'admin@gmail.com'){
            emailError.style.display = 'none';
        }
        else{
            emailError.style.display = 'block';
        }
    }
    else{
        emailError.style.display = 'block';
        passwordError.style.display = 'block';
    }
})