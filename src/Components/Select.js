import React from 'react';

export const Select = ({numberOfFacts}) => {
  return (
    <select>
      <option value={numberOfFacts}>1</option>
      <option value={numberOfFacts}>2</option>
      <option value={numberOfFacts}>3</option>
      <option value={numberOfFacts}>4</option>
    </select>
  );
};