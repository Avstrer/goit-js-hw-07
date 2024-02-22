function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector(`button`);
const body = document.querySelector(`body`);
const colorSpan = document.querySelector(`.color`)

btn.addEventListener('click', (event) => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorSpan.textContent = color;
})