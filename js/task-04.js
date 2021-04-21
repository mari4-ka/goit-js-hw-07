const buttonEl = document.querySelectorAll('button');
const buttonDecrementEl = buttonEl[0];
const ButtonIncrementEl = buttonEl[1];

const counterValueEl = document.querySelector('#value');

buttonDecrementEl.addEventListener('click', (onButtonDecrementClick));
ButtonIncrementEl.addEventListener('click', (onButtonIncrementClick));

let counterValue = 0;

function onButtonDecrementClick() {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
};

function onButtonIncrementClick() {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
};