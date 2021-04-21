const inputEl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

inputEl.addEventListener('change', onRange);

function onRange(event) {
    spanText.style.fontSize = event.currentTarget.value + "px";
}