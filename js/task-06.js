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
    console.log('blur input');

        if (currentValueToCheck === inputValidationNumber) {
            inputEl.classList.add('valid');
            inputEl.classList.remove('invalid');
            console.log('input value:', inputEl.value);
        } else {
            inputEl.classList.remove('valid');
            inputEl.classList.add('invalid');
            console.log('input value:', inputEl.value);
        }
    }
}