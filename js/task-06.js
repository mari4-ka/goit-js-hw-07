// - Если введено подходящее количество, то border инпута 
// становится зеленым, если неправильное - красным.

// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;}
// #validation-input.valid {
//   border-color: #4caf50;}
// #validation-input.invalid {
//   border-color: #f44336;}

const inputEl = document.querySelector('#validation-input');
const inputValidationNumber = Number(inputEl.dataset.length);
    
inputEl.addEventListener('focus', onInputFocus);
inputEl.addEventListener('input', onInputChange);

function onInputFocus() {
    console.log('focus input');
}

function onInputChange(event) {

    inputEl.addEventListener('blur', onInputBlur);
    const currentValueToCheck = event.currentTarget.value.length;

    function onInputBlur() {
        if (currentValueToCheck === inputValidationNumber) {
            inputEl.classList.add('valid');
            inputEl.classList.remove('invalid');
        }
        if (currentValueToCheck === 0) {
            inputEl.classList.remove('valid');
            inputEl.classList.remove('invalid');
        }
        if (currentValueToCheck !== inputValidationNumber && currentValueToCheck !== 0) {
            inputEl.classList.remove('valid');
            inputEl.classList.add('invalid');
        }
    }
}