const form = document.querySelector(".login-form");

form.addEventListener("submit", event => {    
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    event.preventDefault();
    if (email === '' || password === '') {
        alert('All form fields must be filled in');
    } else {
        const userData = {email, password};
        console.log(userData);
        form.reset();
    }
})