const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputChange);


function onInputChange() {
    const lengthEl = Number(inputEl.getAttribute('data-length'));
  
    if (lengthEl === inputEl.value.length) {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')
    } else {
        inputEl.classList.add('invalid')
        inputEl.classList.remove('valid')
    }
    // console.log(lengthEl);
    console.log(inputEl.value.length);
 };  




