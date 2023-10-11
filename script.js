document.addEventListener('DOMContentLoaded', function () {
  const display = document.getElementById('display');
  let currentInput = '0';
  let resultDisplayed = false;

  function clear() {
    currentInput = '0';
    resultDisplayed = false;
    updateDisplay();
  }

  function updateDisplay() {
    display.textContent = currentInput;
  }

  function handleNumberClick(number) {
    if (resultDisplayed) {
      clear();
    }
    if (currentInput === '0') {
      currentInput = number;
    } else if (currentInput === '-0') {
      currentInput = '-' + number;
    } else if (currentInput !== '0' && !currentInput.startsWith('0')) {
      currentInput += number;
    }
    updateDisplay();
  }

  function handleOperatorClick(operator) {
  if (resultDisplayed) {
    resultDisplayed = false;
  }
  const lastChar = currentInput[currentInput.length - 1];
  if ('+-*/'.includes(lastChar) && lastChar !== '-' && operator !== '-') {
    currentInput = currentInput.slice(0, -1) + operator;
  } else {
    currentInput += operator;
  }
  updateDisplay();
}


  function handleDecimalClick() {
  if (resultDisplayed) {
    clear();
  }
  if (!currentInput.includes('.')) {
    currentInput += '.';
  } else if (!currentInput.endsWith('.')) {
    currentInput += '.';
  }
  updateDisplay();
}



  function evaluate() {
    try {
      currentInput = eval(currentInput).toString();
      resultDisplayed = true;
      updateDisplay();
    } catch (error) {
      currentInput = 'Error';
      updateDisplay();
    }
  }

  const numberButtons = document.querySelectorAll('.btn:not(.operator)');
  numberButtons.forEach(button => {
    button.addEventListener('click', () => handleNumberClick(button.textContent));
  });

  const operatorButtons = document.querySelectorAll('.operator:not(#equals)');
  operatorButtons.forEach(button => {
    button.addEventListener('click', () => handleOperatorClick(button.textContent));
  });

  document.getElementById('decimal').addEventListener('click', handleDecimalClick);
  document.getElementById('clear').addEventListener('click', clear);
  document.getElementById('equals').addEventListener('click', evaluate);
});
