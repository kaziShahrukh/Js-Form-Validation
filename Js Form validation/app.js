const form = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#username');
const emailnput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');


form.addEventListener('submit', (event) => {


    validateForm();

    if (isFormValid() == true) {
        form.submit();
    } else {
        event.preventDefault();

    }

});

function isFormValid() {
    const inputContianers = form.querySelectorAll('.input-group');
    let result = true;
    inputContianers.forEach((container) => {
        if (container.classList.contains('error')) {
            result = false;
        }
    });

    return result;
}


function validateForm() {
    //username
    if (usernameInput.value.trim() == '') {
        setError(usernameInput, 'Name can not be empty');

    } else if (usernameInput.value.trim().length < 5 || usernameInput.value.trim().length > 15) {
        setError(usernameInput, 'Name must be min 5 and max 15 characters');
    } else {
        setSuccess(usernameInput);
    }
    //Email

    if (emailnput.value.trim() == '') {
        setError(emailnput, 'provide email address');
    } else if (isEmailValid(emailnput.value)) {
        setSuccess(emailnput);
    } else {
        setError(emailnput, 'Provide valid email address');

    }
    //Password
    if (passwordInput.value.trim() == '') {
        setError(passwordInput, 'Pasword can not be empty');
    } else if (passwordInput.value.trim().length < 6 || passwordInput.value.trim().length > 20) {
        setError(passwordInput, 'Password min 6 and max 20 characters');
    } else {
        setSuccess(passwordInput);
    }
    //Confirm Password
    if (confirmPasswordInput.value.trim() == '') {
        setError(confirmPasswordInput, 'Password can not be empty');
    } else if (confirmPasswordInput.value !== passwordInput.value) {
        setError(confirmPasswordInput, 'Password does not match');
    } else {
        setSuccess(confirmPasswordInput);
    }
}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if (parent.classList.contains('success')) {
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element) {
    const parent = element.parentElement;
    if (parent.classList.contains('error')) {
        parent.classList.remove('error');
    }
    parent.classList.add('success');

}

function isEmailValid(email) {
    const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return reg.test(email);
}