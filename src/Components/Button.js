import React from 'react';

export const Button = ({handleClick, buttonText = ''}) => {
  return (
    // <button onClick={handleClick}>{buttonText}</button>
    <button onClick={function(e){ handleClick(); }}>{buttonText}</button>
  );
};
