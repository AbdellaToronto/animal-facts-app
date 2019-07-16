import React from 'react';
import { Select } from './Select';

export const MainForm = ({ handleChange, handleSubmit, numberOfFacts }) => {
    return ( <form onSubmit = { handleSubmit } > { /* <Select onChange={e => this.numberOfFacts(e.target.value)} numberOfFacts={this.state.numberOfFacts} /> */ } <Select value = { numberOfFacts } handleChange = { handleChange } /> { /* <input type="submit" value="Submit" /> */ } </form>
    );
};