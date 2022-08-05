const inputRange = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputRange.addEventListener('input', onInputChange);

function onInputChange(event) {
     textEl.style.fontSize = `${event.currentTarget.value}px`
};
