const signInEmail = document.querySelector('#signInEmail');

signInEmail.onblur = () => {
  if (!signInEmail.value.includes('@')) {
    signInEmail.classList.add('invalid');
    signInError.innerHTML = 'Пожалуйста, введите правильный email.'
  }
};
signInEmail.onfocus = () => {
  if (signInEmail.classList.contains('invalid')) {
    signInEmail.classList.remove('invalid');
    signInError.innerHTML = "";
  }
};

const signUpEmail = document.querySelector('#signUpEmail');

signUpEmail.onblur = () => {
  if (!signUpEmail.value.includes('@')) {
    signUpEmail.classList.add('invalid');
    signUpError.innerHTML = 'Пожалуйста, введите правильный email.'
  }
};
signUpEmail.onfocus = () => {
  if (signUpEmail.classList.contains('invalid')) {
    signUpEmail.classList.remove('invalid');
    signUpError.innerHTML = "";
  }
};

const regForm = document.querySelector('.reg__form');
let arr = [];

regForm.addEventListener ('submit', (event) => {
  event.preventDefault(); 
  arr.push({[signUpEmail.value]: signUpPassword.value});
});