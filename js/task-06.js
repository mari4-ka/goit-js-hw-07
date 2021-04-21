const inputEl = document.querySelector('#validation-input');
const inputValidationNumber = Number(inputEl.dataset.length);
inputEl.style.borderColor = '#bdbdbd';
inputEl.style.borderStyle = 'solid';
inputEl.style.borderWidth = '3px';
    
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
            inputEl.style.borderColor = '#4caf50';
            console.log('input value:', inputEl.value);
        } else {
            inputEl.classList.remove('valid');
            inputEl.classList.remove('invalid');
            inputEl.style.borderColor = '#f44336';
            console.log('input value:', inputEl.value);
        }
    }
}