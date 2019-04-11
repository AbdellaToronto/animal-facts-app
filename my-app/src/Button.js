import React from 'react';

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>Generate dog fact</button>
  );
}

export default Button;