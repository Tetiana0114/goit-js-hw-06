let inputEl = document.querySelector('#name-input');
let nameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  inputEl = event.currentTarget.value;
  inputEl.trim() === '' ? nameEl.textContent = 'Anonymous' : nameEl.textContent = inputEl.trim();
  console.log(inputEl);
}





