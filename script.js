const form = document.getElementById("form");
const email = document.getElementById("email");
const emailError = document.getElementById("form-error");
const submit = document.getElementById("submit-btn");
const RegEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (email.value === "" || !RegEmail.test(email.value.trim())) {
    emailError.style.display = "block";
    email.classList.add("error-line");
  } else {
    emailError.style.display = "none";
    email.classList.remove("error-line");
  }
});
