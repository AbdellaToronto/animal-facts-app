import React, { Component } from 'react';
import './App.css';
import { Card, Toggle } from './Components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facts: [],
      numberOfFacts: 2, // try increasing this number - try and understand how changing it actually changes the number of facts you get
      animalType: 'dog',
    }
  }

  setAnimalType(animalType) {
    this.setState({
      animalType
    });
  }

  getAnimalFact = (animalType = 'dog', amount = 1) => {
    fetch(`/facts/random?animal_type=${animalType}&amount=${amount}`)
    .then(results => results.json())
    .then(data => {
      this.setState({
        // facts: Array.isArray(data) ? [data.text] : data.map(fact => fact.text)
        facts: Array.isArray(data) ? data.map(fact => fact.text) : [data.text]
      });
    });
  };

  render() {
    return (
      <div className="App">
        <Toggle handleInputChange={e => this.setAnimalType(e.target.checked ? 'dog' : 'cat')} isDog={this.state.animalType === 'dog'} />
        <header className="App-header">
          <Card buttonText={`Generate a ${this.state.animalType} fact`} facts={this.state.facts} handleClick={() => this.getAnimalFact(this.state.animalType, this.state.numberOfFacts)} />
        </header>
      </div>
    );
  }
}

export default App;
