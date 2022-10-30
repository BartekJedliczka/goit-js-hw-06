const inputNum = document.querySelector("#controls>input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = (amount) => {
  const elementsAdd = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.backgroundColor = getRandomHexColor();
    elementsAdd.push(div);
  }
  return elementsAdd;
};

btnCreate.addEventListener("click", () => {
  let boxesAdd = createBoxes(inputNum.value);
  boxes.append(...boxesAdd);
});

const destroyBoxes = () => {
  boxes.innerHTML = "";
};

btnDestroy.addEventListener("click", () => {
  destroyBoxes();
});
