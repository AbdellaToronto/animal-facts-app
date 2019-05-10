import React from 'react';

export const Toggle = ({isDog, handleInputChange}) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={isDog} onChange={handleInputChange} />
      <span className="slider round"></span>
    </label>
  );
};