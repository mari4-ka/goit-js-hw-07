// Напиши скрипт создания и очистки коллекции элементов. Пользователь
// вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить,
// коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр
// amount - число.Функция создает столько div, сколько указано в 
// amount и добавляет их в div#boxes.

// Каждый созданный div:
// - Имеет случайный rgb цвет фона
// - Размеры самого первого div - 30px на 30px
// - Каждый следующий div после первого, должен быть шире и выше
// предыдущего на 10px

// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

const inputEl = document.querySelector('input');
const buttonEl = document.querySelectorAll('button');
const createButtonEl = buttonEl[0];
const clearButtonEl = buttonEl[1];
const newBoxesLocationEl = document.querySelector('#boxes');

createButtonEl.addEventListener('click', getAmount);
clearButtonEl.addEventListener('click', destroyBoxes);

function getAmount(event) {
    console.log('click');
    const amount = inputEl.value;
    console.log(amount);
    createBoxes(amount);
}

function createBoxes(amount) {
    console.log('click on create button');
    const basicSize = 30;
    let divBlock = document.createDocumentFragment();
    for (let i = 0; i < amount; i += 1) {
        let size = i * 10 + basicSize;
        let div = document.createElement('div');
        div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
        divBlock.appendChild(div);
    }
    console.log(divBlock)

    newBoxesLocationEl.appendChild(divBlock);
    console.log(newBoxesLocationEl);
}

function destroyBoxes() {
    console.log('click on CLEAR button')
    newBoxesLocationEl.innerHTML = '';
}

function random() {
  return Math.floor(Math.random() * 256);
}