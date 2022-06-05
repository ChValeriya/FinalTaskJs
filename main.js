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

const screenWidth = window.screen.width;
if (screenWidth < 768) {
  device.innerHTML = 'Вход осуществлен с мобильного устройства.'
} else {
  device.innerHTML = 'Вход осуществлен с компьютера.'
}

let tableInfo = document.querySelector('#table__info');

let tableBody = document.querySelector('#table__body');
let getData = () =>
  fetch('https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json')
    .then(response => response.json())
    .then(clients => 
      clients.forEach(client => {
        let tableString = document.createElement('tr');
        tableString.classList.add('string');

        let date = client.registered.slice(8, 10) + '.' + client.registered.slice(5, 7) + '.' + client.registered.slice(0, 4);

        tableString.innerHTML = `<td>${client.name}</td><td>${client.company}</td><td>${client.email}</td><td>${client.phone}</td><td>${client.balance}</td><td>${date}</td><td><input class="remove" type="button" value=" x "></td>`;
        tableBody.appendChild(tableString);


        let arrBalance = clients.map(client => (client.balance.slice(1, 2) + client.balance.slice(3)))
        function getMaxOfArray(Array) {
          return Math.max.apply(null, Array);
        }

        let arrGender = clients.map(client => client.gender);
        let objGender = {};
        arrGender.forEach(i => { 
          objGender[i] = (objGender[i] || 0)+1; 
        });
        tableInfo.innerHTML = 'Максимальный баланс: $' + getMaxOfArray(arrBalance) + '. Мужчин: ' + objGender.male + '. Женщин: ' + objGender.female
      }));

getData();

let preString;
let isActive = () => {
  tableBody.addEventListener ('click', (event) => {
    const target = event.target;
  
    if (target.tagName !== 'TD') return;
    if (preString) preString.parentNode.classList.remove('selected');
    
    target.parentNode.classList.add('selected');
    
    preString = target;
    
  })
}

isActive()

let notification = document.querySelector('.notification');

tableBody.addEventListener ('click', (event) => {
  let target = event.target;
  if (target.tagName !== 'INPUT') return;

  let isDeleted = confirm("Вы действительно хотите удалить данные?");
  if (isDeleted) {
    target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
    notification.classList.add('notification__show')
  }
})


let backBtn = document.querySelector('#back__btn');
backBtn.addEventListener ('click', () => {
  menu.scrollIntoView();
})

notification.addEventListener('click', (event) => {
  if (event.target.tagName !== 'INPUT') return;
  notification.classList.remove('notification__show');
})