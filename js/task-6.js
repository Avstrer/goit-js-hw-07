function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxes = document.querySelector(`#boxes`);

const controls = document.querySelector(`#controls`);
console.dir(controls);

const input = document.querySelector('#controls > input')
console.dir(input);

const createBtn = document.querySelector('button')
createBtn.dataset.create = 'create';
console.dir(createBtn)
const destBtn = document.querySelector('button[data-action="destroy"]')
console.log(destBtn)

// function createBoxes(amount) {
//   const box = '<div></div>';
  
// }