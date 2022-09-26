function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector('input'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  boxesEl: document.querySelector('#boxes'),
}

refs.createBtn.style.padding = '20px'
refs.createBtn.style.backgroundColor = "yellow";
refs.createBtn.style.fontSize = "24px";
refs.createBtn.style.border = "none";

refs.destroyBtn.style.padding = '20px'
refs.destroyBtn.style.backgroundColor = "blue";
refs.destroyBtn.style.fontSize = "24px";
refs.destroyBtn.style.border = "none";

refs.destroyBtn.addEventListener('click', destroyBoxes);
refs.createBtn.addEventListener('click', createBoxes);

function destroyBoxes() {
  refs.boxesEl.innerHTML = '';
}

function createBoxes(amount) {
  amount = Number(refs.inputEl.value);
  for (let i = 0; i < amount; i++) {
    const markup = document.createElement('div');
    const size = `${30 + i * 10}px`;
    markup.style.width = size;
    markup.style.height = size;
    markup.style.marginTop = '20px'
    markup.style.backgroundColor = getRandomHexColor();
    refs.boxesEl.append(markup);
  }
}