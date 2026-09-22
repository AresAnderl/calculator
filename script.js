// querySelectors

const display = document.querySelector(".display");
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const equal = document.querySelector(".equal");

// values

let value1 = null;
let value2 = null;
let operation = false;
let total = 0;

const writeOnDisplay = (event) => {
  if (display.classList.contains("total")) {
    display.textContent = "";
    display.classList.remove("total");
  }
  const text = event.target.textContent;
  display.textContent += text;
};

// create functions for each type of operation
const calculate = (value1, value2, operation) => {
  if (operation === "+") return value1 + value2;
  if (operation === "-") return value1 - value2;
  if (operation === "*") return value1 * value2;
  if (operation === "/") return value1 / value2;
};

const checkOperation = (event) => {
  assignValues();
  if (event.target.textContent !== "=") {
    operation = event.target.textContent;
  }
  if (value1 !== null && value2 !== null) {
    value1 = total = calculate(value1, value2, operation);
    display.classList.add("total");
    display.textContent = total;
    value2 = null;
  }
};

const assignValues = () => {
  if (value1 === null) {
    value1 = +display.textContent;
    display.textContent = "";
  } else {
    value2 = +display.textContent;
    display.textContent = "";
  }
};

// addEeventListenr to all operators
operators.forEach((element) => {
  element.addEventListener("click", checkOperation);
});

// addEventListenrs to number buttons
numbers.forEach((element) => {
  element.addEventListener("click", writeOnDisplay);
});

equal.addEventListener("click", checkOperation);
