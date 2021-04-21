const categoryEl = document.querySelectorAll('li.item');
const categoryCountEl = categoryEl.length;
console.log(`В списке ${categoryCountEl} категории:`);

const countCategory = categoryEl => {
    for (let i = 0; i < categoryEl.length; i += 1) {
        const categoryTitleEl = categoryEl[i].querySelector('h2').textContent;
        console.log('- Категория: ', categoryTitleEl);

        const subCategoriesEl = categoryEl[i].querySelectorAll('.item li');
        const subCategoriesCountEl = subCategoriesEl.length;
        console.log('Количество элементов: ', subCategoriesCountEl);
    }
}
countCategory(categoryEl);