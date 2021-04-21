const categoryEl = document.querySelectorAll('li.item');
const categoryCountEl = categoryEl.length;
console.log(`В списке ${categoryCountEl} категории:`);

categoryEl.forEach(element => {
    const categoryTitleEl = element.querySelector('h2').textContent;
    const subCategoriesEl = element.querySelectorAll('.item li');
    const subCategoriesCountEl = subCategoriesEl.length;
    console.log('- Категория: ', categoryTitleEl);
    console.log('Количество элементов: ', subCategoriesCountEl);
});