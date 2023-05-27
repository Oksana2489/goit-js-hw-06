const size = document.querySelector("#font-size-control");
const span = document.getElementById("text");

const changeSize = event => {
    span.style.fontSize = `${event.currentTarget.value}px`;
};
size.addEventListener("input", changeSize);