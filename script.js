document.addEventListener('DOMContentLoaded', function () {
  const display = document.getElementById('display');
  let currentInput = '';
  let currentOperator = '';
  let previousInput = '';
  let resultDisplayed = false;

  function clear() {
    currentInput = '';
    currentOperator = '';
    previousInput = '';
    resultDisplayed = false;
    display.textContent = '0';
  }

  function updateDisplay() {
    display.textContent = currentInput;
  }

  function handleNumberClick(number) {
    if (resultDisplayed) {
      clear();
    }
    if (number === '0' && currentInput === '0') {
      return;
    }
    if (currentInput === '0' && number !== '0') {
      currentInput = number;
    } else {
      currentInput += number;
    }
    updateDisplay();
  }

  function handleOperatorClick(operator) {
    if (resultDisplayed) {
      previousInput = currentInput;
      currentInput = '';
      resultDisplayed = false;
    }
    if (currentOperator) {
      evaluate();
    }
    currentOperator = operator;
    previousInput = currentInput;
    currentInput = '';
  }

  function handleDecimalClick() {
    if (resultDisplayed) {
      clear();
    }
    if (!currentInput.includes('.')) {
      currentInput += '.';
    }
    updateDisplay();
  }

  function evaluate() {
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (currentOperator) {
      case '+':
        currentInput = (num1 + num2).toString();
        break;
      case '-':
        currentInput = (num1 - num2).toString();
        break;
      case '*':
        currentInput = (num1 * num2).toString();
        break;
      case '/':
        currentInput = (num1 / num2).toString();
        break;
      default:
        break;
    }

    currentOperator = '';
    previousInput = '';
    resultDisplayed = true;
    updateDisplay();
  }

  document.getElementById('clear').addEventListener('click', clear);
  document.getElementById('divide').addEventListener('click', () => handleOperatorClick('/'));
  document.getElementById('multiply').addEventListener('click', () => handleOperatorClick('*'));
  document.getElementById('seven').addEventListener('click', () => handleNumberClick('7'));
  document.getElementById('eight').addEventListener('click', () => handleNumberClick('8'));
  document.getElementById('nine').addEventListener('click', () => handleNumberClick('9'));
  document.getElementById('subtract').addEventListener('click', () => handleOperatorClick('-'));
  document.getElementById('four').addEventListener('click', () => handleNumberClick('4'));
  document.getElementById('five').addEventListener('click', () => handleNumberClick('5'));
  document.getElementById('six').addEventListener('click', () => handleNumberClick('6'));
  document.getElementById('add').addEventListener('click', () => handleOperatorClick('+'));
  document.getElementById('one').addEventListener('click', () => handleNumberClick('1'));
  document.getElementById('two').addEventListener('click', () => handleNumberClick('2'));
  document.getElementById('three').addEventListener('click', () => handleNumberClick('3'));
  document.getElementById('equals').addEventListener('click', evaluate);
  document.getElementById('zero').addEventListener('click', () => handleNumberClick('0'));
  document.getElementById('decimal').addEventListener('click', handleDecimalClick);
});
