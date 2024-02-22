const categoryItem = document.querySelectorAll('.item');
// console.log(categoriesList);

console.log(`Number of categories: ${categoryItem.length}`);

const titlesList = document.querySelectorAll('h2');
// console.log(titlesList);

const categoriesInfo = titlesList.forEach(element => {
    console.log(`Category: ${element.textContent}`);
    const categoriesList = element.parentElement.querySelectorAll(`ul > li`);
    console.log(`Elements: ${categoriesList.length}`)
});