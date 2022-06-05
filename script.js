const signInEmail = document.querySelector('#signInEmail');
const signUpEmail = document.querySelector('#signUpEmail');
const signUpPassword = document.querySelector('#signUpPassword');
const signInPassword = document.querySelector('#signInPassword');
const signInError = document.querySelector('#signInError');
const signUpError = document.querySelector('#signUpError');
const signInBtn = document.querySelector('#signInBtn');
const signUpBtn = document.querySelector('#signUpBtn');

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

regForm.addEventListener ('click', (event) => {
  if (event.target.tagName !== 'BUTTON') return;
  if(signUpPassword.value !== signUpPasswordConfirm.value) return;
  if(signUpPassword.value === localStorage.getItem(signUpEmail.value)) {
    signUpError.innerHTML = 'Пользователь уже существует.';
    return
  }
  if(signUpEmail.value !== '' && signUpPassword.value !== '') {
    localStorage.setItem(signUpEmail.value, signUpPassword.value);
    regForm.setAttribute('action', './main.html?#main__page');
  }
})
// localStorage.clear()

const signInForm = document.querySelector('.signIn__form');

signInForm.addEventListener ('click', (event) => {
  if (event.target.tagName !== 'BUTTON') return;

  if(signInPassword.value !== localStorage.getItem(signInEmail.value)) {
    signInError.innerHTML = 'Пользователь не существует.'
    return
  } else {
    signInForm.setAttribute('action', './main.html?#main__page');
  }
})