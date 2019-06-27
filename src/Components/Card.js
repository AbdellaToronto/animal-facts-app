import React from 'react';
import {Button} from "./Button";

export const Card = ({facts, buttonText, handleClick, handleClickPhoto}) => {
  return (
    <div className="Card">
      {facts.map((fact, i) => <p className="Dog-fact" key={i}>{fact}</p>)}
      <Button buttonText={buttonText} handleClick={handleClick} handleClickPhoto={handleClickPhoto} />
    </div>
  );
};
