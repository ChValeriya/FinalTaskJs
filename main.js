const menu = document.querySelector('.menu');
const main= document.querySelector('#main');
main.classList.add('underline');

let preVal = main;

menu.addEventListener ('click', (event) => {
  const target = event.target;

  if (target.tagName !== 'A') return;
  if (preVal) preVal.classList.remove('underline');
  
  target.classList.add('underline');
  
  preVal = target;
})