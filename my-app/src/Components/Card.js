import React from 'react';
import Button from './Button';

const Card = (props) => {
  return (
    <div className="Card">
      <p className="Dog-fact">{props.fact}</p>
      <Button buttonText={props.buttonText} handleClick={props.handleClick} />
    </div>
  );
}

export default Card;