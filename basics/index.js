import React, { useState } from '';
import ReactDOM from 'react-dom';

function ClickButton() {
  const [text, setText] = useState('Click me');

  const handleClick = () => {
    setText('You clicked me!');
  };

  return <button onClick={handleClick}>{text}</button>;
}

ReactDOM.render(<ClickButton />, document.getElementById('root'));
////////////////////////////
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;

