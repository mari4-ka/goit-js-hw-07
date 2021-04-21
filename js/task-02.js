const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulEl = document.querySelector('#ingredients');
console.log(ulEl);

const makeIngredientsList = (options) => {
  return options.map(option => {
  const liEl = document.createElement('li');
  liEl.textContent = option;
  console.log(liEl);

    return liEl;
});
}

const ingredientsList = makeIngredientsList(ingredients);
ulEl.append(...ingredientsList);