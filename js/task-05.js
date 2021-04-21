const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
}

refs.input.addEventListener('focus', onInputFocus);
refs.input.addEventListener('blur', onInputBlur);
refs.input.addEventListener('input', onInputChange);

function onInputFocus() {
    console.log('focus input');
}

function onInputBlur() {
    console.log('input lost focus')
}

function onInputChange(event) {
    console.log(event.currentTarget.value);

    if (event.currentTarget.value.length === 0) {
        refs.output.textContent = 'незнакомец';
    } else {
        refs.output.textContent = event.currentTarget.value;
    }
}