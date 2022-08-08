const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputChange);

function updateInputClassList(addClass, removeClass) {
    inputEl.classList.add(addClass);
    inputEl.classList.remove(removeClass);
}

function onInputChange() {
    const lengthEl = Number(inputEl.getAttribute('data-length'));
  
    if (lengthEl === inputEl.value.length) {
        updateInputClassList('valid', 'invalid')
    } else {
        updateInputClassList('invalid','valid')
    }
    console.log(inputEl.value.length);
 };