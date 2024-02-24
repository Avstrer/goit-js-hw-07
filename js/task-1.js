const categoryItem = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoryItem.length}`);

const titlesList = document.querySelectorAll('h2');
const title = titlesList.forEach(item => {
        item.classList.add('title')
    })

const categoriesInfo = titlesList.forEach(element => {
    console.log(`Category: ${element.textContent}`);
    const categoriesList = element.parentElement.querySelectorAll(`ul > li`);
    console.log(`Elements: ${categoriesList.length}`)
});


// for style
const animalList = document.querySelectorAll('ul');

const listClass = animalList.forEach(item => {
    item.classList.add('list')
})

const categories = document.querySelector('#categories');
categories.classList.remove('list')

const categoriesItem = document.querySelectorAll('.list > li')
    .forEach(item => {
        item.classList.add('listItem');
    })






