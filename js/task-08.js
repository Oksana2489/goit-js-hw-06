const login = document.querySelector(".login-form");
const validateForm = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const loginData = { email: email.value, password: password.value };
  console.log(loginData);
  event.currentTarget.reset();
};
login.addEventListener("submit", validateForm);
