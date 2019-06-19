import React, { Component } from 'react';
import './App.css';
import {Card, Toggle, Select} from './Components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facts: [],
      numberOfFacts: 1, // try increasing this number - try and understand how changing it actually changes the number of facts you get
      animalType: 'dog', // default animal is a dog 
    }
  }

  setAnimalType(animalType) {
    this.setState({
      animalType // why isn't a value being set here?
    });
  }

  getAnimalFact = (animalType = 'dog', amount = 1) => {
    fetch(`/facts/random?animal_type=${animalType}&amount=${amount}`)
    .then(results => results.json())
    .then(data => {
      this.setState({
        /* So what's happening here is that I'm expecting facts to always be an array, so first i check to see if DATA is an array - if it is, then I'm assuming that it's an array of fact objects, get the text property off of each and put them in that new array, however if data is NOT an array, well before I assign it to facts, I need to make sure it's structured as an array, so I take the text property off of the fact and put it in an arra. Another way to say it is 'if data is an array of facts, get the text of each fact and put it into a new array, and set that to my 'facts' state. However if it's not an array and JUST a single fact object, take the text off of it, and put that in a new array.That way no matter what, facts state will ALWAYS be an array. And saying this.state.facts.map in my jsx will never be an issue */
        facts: Array.isArray(data) ? data.map(fact => fact.text) : [data.text]
      });
    });
  };

  render() {
    return (
      <div className="App">
        <Toggle handleInputChange={e => this.setAnimalType(e.target.checked ? 'dog' : 'cat')} isDog={this.state.animalType === 'dog'} />
        <Select onChange={e => this.numberOfFacts(e.target.value)} numberOfFacts={this.state.numberOfFacts} />
        <header className="App-header">
          <Card buttonText={`Generate a ${this.state.animalType} fact`} facts={this.state.facts} handleClick={() => this.getAnimalFact(this.state.animalType, this.state.numberOfFacts)} />
        </header>
      </div>
    );
  }
}

export default App;
