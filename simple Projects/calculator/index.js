 import React, { useState } from '';

function Calculator() {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result + e.target.value);
  };

  const handleClear = () => {
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(result));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={result} readOnly />
      <div className="buttons">
        <button onClick={handleClear}>AC</button>
        <button onClick={handleClick}>7</button>
        <button onClick={handleClick}>8</button>
        <button onClick={handleClick}>9</button>
        <button onClick={handleClick}>+</button>
        <button onClick={handleClick}>4</button>
        <button onClick={handleClick}>5</button>
        <button onClick={handleClick}>6</button>
        <button onClick={handleClick}>-</button>
        <button onClick={handleClick}>1</button>
        <button onClick={handleClick}>2</button>
        <button onClick={handleClick}>3</button>
        <button onClick={handleClick}>*</button>
        <button onClick={handleClick}>0</button>
        <button onClick={handleClick}>.</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={handleClick}>/</button>
      </div>
    </div>
  );
}

