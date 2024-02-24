function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesContainer = document.querySelector(`#boxes`);

const input = document.querySelector("input");
input.classList.add('number-input')

const createBtn = document.querySelector("button");
createBtn.classList.add("createBtn");

const destroyBtn = document.querySelector("button[data-destroy]");
destroyBtn.classList.add("destroyBtn");

let totalBox = 0;

let firstSize = 30;

function createBoxes(amount) {
  boxesContainer.innerHTML = "";
  let size = firstSize;
  for (let index = 0; index < amount; index += 1) {
    let box = document.createElement("div");
    box.classList.add('box');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
  }
}

function createCollection(event) {
  event.preventDefault();
  let count = parseInt(input.value);

  if (100 < count || 1 > count) {
    alert("Number not correct");
  } else {
    createBoxes(count);
  }

  
}

function destroyBoxes(event) {
  boxesContainer.innerHTML = "";
}

createBtn.addEventListener("click", createCollection);

destroyBtn.addEventListener("click", destroyBoxes);
