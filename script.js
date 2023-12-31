const display = document.getElementById("display");

const addButton = document.getElementById("btn-plus");
const equalsButton = document.getElementById("btn-equals");
const subtractButton = document.getElementById("btn-minus");
const multiplyButton = document.getElementById("btn-multiply");
const divideButton = document.getElementById("btn-divide");
const clearAllButton = document.getElementById("btn-ac");
const deleteButton = document.getElementById("btn-del");
const modulusButton = document.getElementById("btn-modulus");
const decimalButton = document.getElementById("btn-dot");

let numbers = [];
let currentNumber = "";
let operator = null;

window.addEventListener("load", () => {
  const btnGrid = document.getElementById("btn-grid");

  const gridWidth = btnGrid.offsetWidth;

  display.style.width = `${gridWidth}px`;
});

window.addEventListener("resize", () => {
  const btnGrid = document.getElementById("btn-grid");
  const display = document.getElementById("display");

  const gridWidth = btnGrid.offsetWidth;

  display.style.width = `${gridWidth}px`;
});

const updateDisplay = (value) => {
  currentNumber += value;
  display.value = currentNumber;
};

const numberButtons = document.querySelectorAll("[data-value]");
numberButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const value = event.target.getAttribute("data-value");
    updateDisplay(value);
  });
});

const addOperation = () => {
  if (currentNumber !== "") {
    numbers.push(parseFloat(currentNumber));
    currentNumber = "";
    display.value = "";
  }
  operator = "+";
};

const subtractOperation = () => {
  if (currentNumber !== "") {
    numbers.push(parseFloat(currentNumber));
    currentNumber = "";
    display.value = "";
  }
  operator = "-";
};

const multiplyOperation = () => {
  if (currentNumber !== "") {
    numbers.push(parseFloat(currentNumber));
    currentNumber = "";
    display.value = "";
  }
  operator = "*";
};

const divideOperation = () => {
  if (currentNumber !== "") {
    numbers.push(parseFloat(currentNumber));
    currentNumber = "";
    display.value = "";
  }
  operator = "/";
};

const modulusOperation = () => {
  if (currentNumber !== "") {
    numbers.push(parseFloat(currentNumber));
    currentNumber = "";
    display.value = "";
  }
  operator = "%";
};

const addDecimal = () => {
  if (!currentNumber.includes('.')) {
    if (currentNumber === '') {
      currentNumber = '0.';
    } else {
      currentNumber += '.';
    }
    display.value = currentNumber;
  }
};

const calculateResult = () => {
  numbers.push(parseFloat(currentNumber));
  let result;

  switch (operator) {
    case "+":
      result = numbers.reduce((total, currentValue) => total + currentValue, 0);
      break;
    case "-":
      result = numbers.length > 1 ? numbers.reduce((total, currentValue) => total - currentValue) : numbers[0];
      break;
    case "*":
      result = numbers.reduce((total, currentValue) => total * currentValue, 1);
      break;
    case "/":
      if (numbers.length >= 2 && numbers[1] !== 0){
        result = numbers.length > 1 ? numbers.reduce((total, currentValue) => total / currentValue) : numbers[0];
      } else {
        result = "Error"
      }
      break;
    case "%":
      if (numbers.length >= 2 && numbers[1] !== 0) {
        result = numbers.reduce((total, currentValue) => total % currentValue);
      } else {
        result = "Error";
      }
      break;
    default:
        result = numbers.length > 0 ? numbers[0]: 0;
  }

  if (typeof result === "number") {
    result = parseFloat(result.toFixed(8));
  }

  display.value = result.toString();
  currentNumber = result.toString();
  numbers = [];
  operator = null;
};

const clearAll = () => {
  currentNumber = "";
  numbers = [];
  operator = null;
  display.value = "0";
};

const deleteNumber = () => {
  currentNumber = currentNumber.slice(0, -1);
  display.value = currentNumber;
};

addButton.addEventListener("click", addOperation);
subtractButton.addEventListener("click", subtractOperation);
multiplyButton.addEventListener("click", multiplyOperation);
divideButton.addEventListener("click", divideOperation);
equalsButton.addEventListener("click", calculateResult);
clearAllButton.addEventListener("click", clearAll);
modulusButton.addEventListener("click", modulusOperation);
deleteButton.addEventListener("click", deleteNumber);
decimalButton.addEventListener("click", addDecimal)
