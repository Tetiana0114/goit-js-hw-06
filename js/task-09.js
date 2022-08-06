function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBth = document.querySelector('.change-color');
const background = document.querySelector('.color');

changeColorBth.addEventListener('click', onChangeColorBthClick);

function onChangeColorBthClick() {
  const bgColorName = getRandomHexColor();
  document.body.style.backgroundColor = bgColorName;
  background.textContent = bgColorName;
  console.log(background.textContent);
}





