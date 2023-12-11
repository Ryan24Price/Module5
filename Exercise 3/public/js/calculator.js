let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let firstOperand = "";

function appendToDisplay(value) {
  currentInput += value;
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  operator = "";
  firstOperand = "";
  display.value = "";
}

function setOperator(op) {
  operator = op;
  firstOperand = currentInput;
  currentInput = "";
}

async function calculateResult() {
  if (operator && firstOperand && currentInput) {
    let result;
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(currentInput);

    switch (operator) {
      case "+":
        // result = num1 + num2;
        let sum = await fetch(`/calculator/add?num1=${num1}&num2=${num2}`)
          .then((response) => response.json())
          .then((data) => {
            return data.result;
          });
        result = sum;
        console.log(sum);
        break;
      case "-":
        // result = num1 - num2;
        let difference = await fetch(`/calculator/subtract?num1=${num1}&num2=${num2}`)
          .then((response) => response.json())
          .then((data) => {
            return data.result;
          });
        result = difference;
        console.log(difference);
        break;
      case "*":
        // result = num1 * num2;
        let product = await fetch(`/calculator/multiply?num1=${num1}&num2=${num2}`)
          .then((response) => response.json())
          .then((data) => {
            return data.result;
          });
        result = product;
        console.log(product);
        break;
      case "/":
        // result = num1 / num2;
        let quotient = await fetch(`/calculator/divide?num1=${num1}&num2=${num2}`)
          .then((response) => response.json())
          .then((data) => {
            return data.result;
          });
        result = quotient;
        console.log(quotient);
        break;
    }

    clearDisplay();
    display.value = result;
  }
}

