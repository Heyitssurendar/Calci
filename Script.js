// script.js
document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');
  const buttons = Array.from(document.getElementsByClassName('button'));

  let currentInput = '';
  let previousInput = '';
  let operator = null;

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.getAttribute('data-value');

      if (value === 'C') {
        currentInput = '';
        previousInput = '';
        operator = null;
        display.innerText = '0';
      } else if (value === '=') {
        if (operator && currentInput && previousInput) {
          currentInput = eval(`${previousInput}${operator}${currentInput}`).toString();
          operator = null;
          previousInput = '';
          display.innerText = currentInput;
        }
      } else if (['+', '-', '*', '/'].includes(value)) {
        if (currentInput) {
          operator = value;
          previousInput = currentInput;
          currentInput = '';
        }
      } else {
        currentInput += value;
        display.innerText = currentInput;
      }
    });
  });
});
