import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function ClickButton() {
  const [text, setText] = useState('Click me');

  const handleClick = () => {
    setText('You clicked me!');
  };

  return <button onClick={handleClick}>{text}</button>;
}

ReactDOM.render(<ClickButton />, document.getElementById('root'));
