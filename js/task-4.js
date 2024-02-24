const submitForm = document.querySelector(".login-form");

console.dir(submitForm);

const submitInfo = {
  email: "",
  password: "",
};

submitForm.addEventListener("submit", submitFun);

function submitFun(event) {
  event.preventDefault();
  const form = event.target;
  
  const emailInput = form.elements.email.value;
  const passInput = form.elements.password.value;

  if (emailInput == "" || passInput == "") {
    alert("All form fields must be filled in");
  } else {
    submitInfo.email = emailInput.trim();
    submitInfo.password = passInput.trim();

    console.log(submitInfo);
    form.reset();
  }
}

// styles
const elements = submitForm.elements;
const labelList = document.querySelectorAll('label')
labelList[0].classList.add('label')
labelList[1].classList.add('label')
const button = document.querySelector('button')
button.classList.add('btn')
elements.email.classList.add('input')
elements.password.classList.add('input')
