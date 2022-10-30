const inputControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inputControl.addEventListener("change", (event) => {
  text.style.fontSize = `${event.target.value}px`;
});
