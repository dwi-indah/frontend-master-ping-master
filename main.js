const form = document.getElementById('form');
const email = document.getElementById('email');
const label = document.getElementById('email-label');
const btnSubmit = document.getElementById('btn-submit');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitForm();
});

function submitForm() {
    const emailVal = email.value;
    if(!validateEmail(emailVal)) {
        label.classList.remove('hidden');
    } else {
        label.classList.add('hidden');
    }
}

email.addEventListener('input', function(){
    if((email.value).length === 0) {
        label.classList.add('hidden');
    }
})

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}