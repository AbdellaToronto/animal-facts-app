import React from 'react';

const Toggle = (props) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={props.animalType} onChange={props.handleInputChange} />
      <span className="slider round"></span>
    </label>
  );
}

export default Toggle;