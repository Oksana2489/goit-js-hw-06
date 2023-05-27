const input = document.querySelector("#validation-input");
const dataLenght = Number(input.dataset.length);
const onInputBlur = (event) => {
  if (event.currentTarget.value.length === dataLenght) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
};
input.addEventListener("blur", onInputBlur);