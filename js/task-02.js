const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients");
console.log(listEl);

const elements = ingredients.map(ingredient => {
  const tagEl = document.createElement("li");
  tagEl.classList.add("item");
  tagEl.textContent = ingredient;

  return tagEl;
})
// console.log(elements);
listEl.append(...elements);