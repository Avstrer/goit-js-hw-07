function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector(`button`);
const body = document.querySelector(`body`);
const colorSpan = document.querySelector(`.color`);

btn.addEventListener("click", clickFun);

function clickFun(event) {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorSpan.textContent = color;
}
// style
const paragraf = document.querySelector('p')
paragraf.classList.add('text')
