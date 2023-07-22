import React, { useState } from 'react';
import './App.css';

function App() {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonClick = (buttonText) => {
    switch (buttonText) {
      case 'AC':
        setDisplayValue('');
        break;
      case '=':
        try {
          setDisplayValue(evaluateExpression(displayValue));
        } catch {
          setDisplayValue('Error');
        }
        break;
      case 'x!':
        try {
          setDisplayValue(factorial(parseFloat(displayValue)));
        } catch {
          setDisplayValue('Error');
        }
        break;
      case '%':
        try {
          setDisplayValue(parseFloat(displayValue) / 100);
        } catch {
          setDisplayValue('Error');
        }
        break;
      case 'sin':
        try {
          setDisplayValue(Math.sin(parseFloat(displayValue)));
        } catch {
          setDisplayValue('Error');
        }
        break;
      case 'ln':
        try {
          setDisplayValue(Math.log(parseFloat(displayValue)));
        } catch {
          setDisplayValue('Error');
        }
        break;
      case 'cos':
        try {
          setDisplayValue(Math.cos(parseFloat(displayValue)));
        } catch {
          setDisplayValue('Error');
        }
        break;
      case 'log':
        try {
          setDisplayValue(Math.log10(parseFloat(displayValue)));
        } catch {
          setDisplayValue('Error');
        }
        break;
      case 'tan':
        try {
          setDisplayValue(Math.tan(parseFloat(displayValue)));
        } catch {
          setDisplayValue('Error');
        }
        break;
      case '√':
        try {
          setDisplayValue(Math.sqrt(parseFloat(displayValue)));
        } catch {
          setDisplayValue('Error');
        }
        break;
      case 'EXP':
        try {
          setDisplayValue(Math.exp(parseFloat(displayValue)));
        } catch {
          setDisplayValue('Error');
        }
        break;
      case 'x^y':
        try {
          const base = displayValue;
          const exponent = prompt('Enter the exponent:');
          setDisplayValue(Math.pow(parseFloat(base), parseFloat(exponent)));
        } catch {
          setDisplayValue('Error');
        }
        break;
      default:
        if (displayValue === 'Error') {
          setDisplayValue(buttonText);
        } else {
          setDisplayValue((prevDisplayValue) => prevDisplayValue + buttonText);
        }
    }
  };

  function evaluateExpression(expression) {
    expression = expression.replace(/x/g, '*').replace(/÷/g, '/');
    expression = expression.replace(/(-?\d+)([+\-*\/])(-?\d+)/g, (_, num1, operator, num2) => {
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
      switch (operator) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        case '/':
          return num1 / num2;
      }
    });

    const regex = /^-?\d+(\.\d+)?([+\-*\/]\d+(\.\d+)?)*$/;
    if (!regex.test(expression)) {
      throw new Error('Invalid expression');
    }

    let result = eval(expression);
    return result;
  }

  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

  return (
    <div>
       <div className="header">
      <h1>Welcome to My Website</h1>
      <p>Explore and enjoy!</p>
    </div>

      <div className="calculator">
        <input
          type="text"
          className="result"
          id="display"
          readOnly
          value={displayValue}
          placeholder="0"
        />

        <div className="buttons">
          <button className="dark button" onClick={() => handleButtonClick('Deg')}>Deg</button>
          <button className="dark button" onClick={() => handleButtonClick('x!')}>x!</button>
          <button className="dark button" onClick={() => handleButtonClick('(')}>(</button>
          <button className="dark button" onClick={() => handleButtonClick(')')}>)</button>
          <button className="dark button" onClick={() => handleButtonClick('%')}>%</button>
          <button className="dark button" onClick={() => handleButtonClick('AC')}>AC</button>
          <button className="dark button" onClick={() => handleButtonClick('sin')}>sin</button>
          <button className="dark button" onClick={() => handleButtonClick('ln')}>ln</button>
          <button className="light button" onClick={() => handleButtonClick('7')}>7</button>
          <button className="light button" onClick={() => handleButtonClick('8')}>8</button>
          <button className="light button" onClick={() => handleButtonClick('9')}>9</button>
          <button className="dark button" onClick={() => handleButtonClick('÷')}>÷</button>
          <button className="dark button" onClick={() => handleButtonClick('cos')}>cos</button>
          <button className="dark button" onClick={() => handleButtonClick('log')}>log</button>
          <button className="light button" onClick={() => handleButtonClick('4')}>4</button>
          <button className="light button" onClick={() => handleButtonClick('5')}>5</button>
          <button className="light button" onClick={() => handleButtonClick('6')}>6</button>
          <button className="dark button" onClick={() => handleButtonClick('x')}>x</button>
          <button className="dark button" onClick={() => handleButtonClick('tan')}>tan</button>
          <button className="dark button" onClick={() => handleButtonClick('√')}>√</button>
          <button className="light button" onClick={() => handleButtonClick('1')}>1</button>
          <button className="light button" onClick={() => handleButtonClick('2')}>2</button>
          <button className="light button" onClick={() => handleButtonClick('3')}>3</button>
          <button className="dark button" onClick={() => handleButtonClick('-')}>-</button>
          <button className="dark button" onClick={() => handleButtonClick('EXP')}>EXP</button>
          <button className="dark button" onClick={() => handleButtonClick('x^y')}>x^y</button>
          <button className="light button" onClick={() => handleButtonClick('0')}>0</button>
          <button className="light button" onClick={() => handleButtonClick('.')}>.</button>
          <button className="equal button" id="equal" onClick={() => handleButtonClick('=')}>=</button>
          <button className="dark button" onClick={() => handleButtonClick('+')}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
