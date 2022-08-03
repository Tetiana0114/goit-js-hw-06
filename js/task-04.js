const counterValueElement = document.querySelector('#value');
const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');

let counterValue = 0;

function updateCounter(){
    counterValueElement.innerHTML = counterValue;
    console.log(counterValue);
};

incrementBtn.addEventListener("click", () => {
    counterValue++; 
    updateCounter();
    
}) ;

decrementBtn.addEventListener("click",()=>{
    counterValue--;
    updateCounter();
});


