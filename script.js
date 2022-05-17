const signInEmail = document.querySelector('#signInEmail');
const signUpEmail = document.querySelector('#signUpEmail');

let a = (email, error) => {
  email.onblur = () => {
    if (!email.value.includes('@')) {
      email.classList.add('invalid');
      error.innerHTML = 'Пожалуйста, введите правильный email.'
    }
  }
  email.onfocus = () => {
    if (email.classList.contains('invalid')) {
      email.classList.remove('invalid');
      error.innerHTML = "";
    }
  }
}

a(signInEmail, signInError);
a(signUpEmail, signUpError);

const signUpPassword = document.querySelector('#signUpPassword');
const signUpPasswordConfirm = document.querySelector('#signUpPasswordConfirm');

signUpPasswordConfirm.onblur = () => {
  if(signUpPassword.value !== signUpPasswordConfirm.value) {
    signUpPasswordConfirm.classList.add('invalid');
    signUpError.innerHTML = 'Пароли не совпадают!' 
  }
}
signUpPasswordConfirm.onfocus = () => {
  if(signUpPasswordConfirm.classList.contains('invalid')) {
    signUpPasswordConfirm.classList.remove('invalid');
    signUpError.innerHTML = "";
  }
}

const regForm = document.querySelector('.reg__form');
let registeredUsers = [];

regForm.addEventListener ('submit', (event) => {
  event.preventDefault(); 
  registeredUsers.push({[signUpEmail.value]: signUpPassword.value})
})