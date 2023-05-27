const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const uiIngredients = document.querySelector('#ingredients');
const elements = ingredients.map(element => {
  const itemElement = document.createElement('li');
  itemElement.classList.add('item');
  itemElement.textContent = element;
  return itemElement;
});

uiIngredients.append(...elements);
