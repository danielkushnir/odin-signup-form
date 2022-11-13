const odinForm = document.querySelector("#odinForm");
odinForm.noValidate = true;

odinForm.addEventListener("submit", validateForm);
function validateForm(e) {
    const form = e.target;
    if (!form.checkValidity()) {
        e.preventDefault();
        [...form.elements].forEach(i => {
            if(i.checkValidity()) {
                i.parentElement.classList.remove("invalid");
            } else {
                i.parentElement.classList.add("invalid");
            }
        });
    }
    if (!validatePasswords(form)) e.preventDefault();
}

function validatePasswords(form) {
    const passwords = [...form.elements].filter(element => element.type == 'password');
    const password = passwords[0];
    const confirmPassword = passwords[1];
    if (password.value) {
        if (password.value == confirmPassword.value) {
            password.parentElement.classList.remove("invalid");
            confirmPassword.parentElement.classList.remove("invalid");
            return true;
        } else {
            password.parentElement.classList.add("invalid");
            confirmPassword.parentElement.classList.add("invalid");
            document.querySelector("input[type='password']+p").textContent = "Passwords do not match";
            return false;
        }
    }
}