let couterValue = 0;
const displayCounter = document.querySelector("#value");
const buttonMinus = document.querySelector(`button[data-action="decrement"]`);
const buttonPlus = document.querySelector(`button[data-action="increment"]`);

console.log(buttonPlus);

buttonMinus.addEventListener("click", () => {
  couterValue--;
  displayCounter.textContent = couterValue;
});

buttonPlus.addEventListener("click", () => {
  couterValue++;
  displayCounter.textContent = couterValue;
});
