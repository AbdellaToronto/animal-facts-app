import React from 'react';

export const Toggle = ({isDog, handleInputChange}) => {
  return (
    <label className="switch">
      {/* Pick an animal: */}
      <input type="checkbox" checked={isDog} onChange={handleInputChange} />
      <span className="slider round"></span>
    </label>
  );
};