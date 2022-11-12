const odinForm = document.querySelector("#odinForm");
// const odinForm = new FormValidate(document.querySelector("#odinForm"), false);
odinForm.noValidate = true;

odinForm.addEventListener("submit", validateForm);
function validateForm(e) {
    const form = e.target;
    if (form.checkValidity()) {
        
    } else {
        e.preventDefault();
        [...form.elements].forEach(i => {
            if(i.checkValidity()) {
                i.parentElement.classList.remove("invalid");
            } else {
                i.parentElement.classList.add("invalid");
            }
        });
    }
    const passwords = [...form.elements].filter(element => element.type == 'password');
    const password = passwords[0];
    const confirmPassword = passwords[1];
    if (password.value == confirmPassword.value) {
        password.parentElement.classList.remove("invalid");
        confirmPassword.parentElement.classList.remove("invalid");
    } else {
        password.parentElement.classList.add("invalid");
        confirmPassword.parentElement.classList.add("invalid");
        e.preventDefault();
    }
}

function validatePasswords() {

}