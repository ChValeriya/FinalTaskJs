const signInEmail = document.querySelector('#signInEmail');
const signUpEmail = document.querySelector('#signUpEmail');

let enterEmail = (email, error) => {
  email.onblur = () => {
    if (!email.value.includes('@')) {
      email.classList.add('invalid');
      error.innerHTML = 'Пожалуйста, введите правильный email.'
    }
  }
  email.onfocus = () => {
    if (email.classList.contains('invalid')) {
      email.classList.remove('invalid');
      error.innerHTML = '';
    }
  }
}

enterEmail(signInEmail, signInError);
enterEmail(signUpEmail, signUpError);

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
    signUpError.innerHTML = '';
  }
}

const regForm = document.querySelector('.reg__form');
let registeredUsers = [];

regForm.addEventListener ('submit', (event) => {
  event.preventDefault(); 
  if(!registeredUsers.includes(`email: ${signUpEmail.value} password: ${signUpPassword.value}`)) {
    registeredUsers.push(`email: ${signUpEmail.value} password: ${signUpPassword.value}`);
  }
})

const signInPassword = document.querySelector('#signInPassword');
const signInForm = document.querySelector('.signIn__form');

signInEmail.value = localStorage.getItem('signInEmail');
signInPassword.value = localStorage.getItem('signInPassword');

signInForm.addEventListener ('submit', (event) => {
  event.preventDefault();
  if(registeredUsers.includes(`email: ${signInEmail.value} password: ${signInPassword.value}`)) {
    localStorage.setItem(signInEmail.value, signInPassword.value)
  } else {
    signInError.innerHTML = 'Пользователь не существует.'
  }
})
// localStorage.clear()
console.log(registeredUsers)
console.log(localStorage)