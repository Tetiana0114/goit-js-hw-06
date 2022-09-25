function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector('input'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  boxesEl: document.querySelector('#boxes'),
}

refs.destroyBtn.addEventListener('click', destroyBoxes);
refs.createBtn.addEventListener('click', createBoxes);

function destroyBoxes() {
  refs.boxesEl.innerHTML = '';
}

function createBoxes(amount) {
  amount = Number(refs.inputEl.value);
  for (let i = 0; i < amount; i++) {
    const size = `${i * 10 + 30}px`;
    const markup = document.createElement('div');
    markup.style.width = size;
    markup.style.height = size;
    markup.style.marginTop = '20px'
    markup.style.backgroundColor = getRandomHexColor();
    refs.boxesEl.append(markup);
  }
}