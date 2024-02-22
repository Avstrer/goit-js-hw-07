const submitForm = document.querySelector('.login-form')

console.dir(submitForm)

const submitInfo = {
    email: '',
    password: '',
}


submitForm.addEventListener('submit', (event) => {
    
    event.preventDefault();
    const form = event.target;
    const emailInput = form.elements.email.value;
    const passInput = form.elements.password.value;

    if (emailInput == "" || passInput == "") {
        alert ('All form fields must be filled in');
    } else {
        submitInfo.email = emailInput.trim();
        submitInfo.password = passInput.trim();

        console.log(submitInfo);
        form.reset();
    }
})


