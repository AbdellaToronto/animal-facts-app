import React from 'react';

export const Button = ({handleClick, handleClickPhoto, buttonText = ''}) => {
  return (
    // <button onClick={handleClick}>{buttonText}</button>
    <button onClick={function(e){ handleClick(); handleClickPhoto()}}>{buttonText}</button>
  );
};
