import React from 'react';

export const Select = ({ handleChange, numberOfFacts }) => {
    return ( 
        <div>
            <label htmlFor = "select-dropdown">
            Select the number of facts you want to see:
            <select id = "select-dropdown" className = "select-css" value = { numberOfFacts } onChange = { handleChange } >
            <option value = "1" > 1 </option> <option value = "2" > 2 </option> <option value = "3" > 3 </option> <option value = "4" > 4 </option> </select> </label>
        </div>
    );
};