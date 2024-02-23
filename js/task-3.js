const inputValue = document.querySelector("#name-input");
const sayName = document.querySelector("#name-output");
// console.log(inputValue)
// console.log(sayName)
inputValue.addEventListener("input", inputFun);

function inputFun(event) {
  if (event.currentTarget.value.trim() !== "") {
    sayName.textContent = event.currentTarget.value.trim();
  } else {
    sayName.textContent = "Anonymous";
  }
}
