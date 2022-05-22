const menu = document.querySelector('.menu');
const mainPoint= document.querySelector('#main');

mainPoint.classList.add('underline');

let prePoint = mainPoint;

menu.addEventListener ('click', (event) => {
  const target = event.target;

  if (target.tagName !== 'A') return;
  if (prePoint) prePoint.classList.remove('underline');

  target.classList.add('underline');

  prePoint = target;
})

let device= document.querySelector('#device');

const screenWidth = window.screen.width
console.log(screenWidth)
if (screenWidth < 768) {
  device.innerHTML = 'Вход осуществлен с мобильного устройства.'
} else {
  device.innerHTML = 'Вход осуществлен с компьютера.'
}