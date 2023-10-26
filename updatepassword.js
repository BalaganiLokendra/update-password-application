let myFormEl = document.getElementById("updatePasswordForm");

let nameEl = document.getElementById("newPassword");
let nameErrMsgEl = document.getElementById("newPasswordErrMsg");

let emailEl = document.getElementById("confirmPassword");
let emailErrMsgEl = document.getElementById("confirmPasswordErrMsg");

nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }
});
emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        emailErrMsgEl.textContent = "";
    }
});

myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    if (nameEl.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }
    if (nameEl.value !== emailEl.value) {
        emailErrMsgEl.textContent = "Passwords must be same";
    } else {
        emailErrMsgEl.textContent = "";
    }
});