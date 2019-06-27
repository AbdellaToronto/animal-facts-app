import React, { Component } from 'react';
import './App.css';
import {Card, Toggle, MainForm} from './Components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facts: [],
      numberOfFacts: 1, // try increasing this number - try and understand how changing it actually changes the number of facts you get
      animalType: 'dog', // default animal is a dog 
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      numberOfFacts: e.target.value
    });
  }

  handleSubmit(e) {
    // console.log('working: ' + this.state.value);
    // console.log('working: ' + this.state.numberOfFacts);
    e.preventDefault();
  }

  setAnimalType(animalType) {
    this.setState({
      animalType // why isn't a value being set here?
    });
  }
  /* *** amount is a parameter for this.state.numberOfFacts*/
  getAnimalFact = (animalType = 'dog', amount = 1) => {
    fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=${animalType}&amount=${amount}`)
    .then(data => {
      debugger;
      return data.json();
    })
    .then(data => {
      debugger;
      this.setState({
        /* So what's happening here is that I'm expecting facts to always be an array, so first i check to see if DATA is an array - if it is, then I'm assuming that it's an array of fact objects, get the text property off of each and put them in that new array, however if data is NOT an array, well before I assign it to facts, I need to make sure it's structured as an array, so I take the text property off of the fact and put it in an arra. Another way to say it is 'if data is an array of facts, get the text of each fact and put it into a new array, and set that to my 'facts' state. However if it's not an array and JUST a single fact object, take the text off of it, and put that in a new array.That way no matter what, facts state will ALWAYS be an array. And saying this.state.facts.map in my jsx will never be an issue */
        facts: Array.isArray(data) ? data.map(fact => fact.text) : [data.text]
      });
    });
  };

  getAnimalPhoto = () => {
    // const bearer_token = '563492ad6f9170000100000184d90b11c0344ad9b941f6bd5432e6f2';
    // const bearer = 'Bearer ' + bearer_token;
    fetch(`https://api.pexels.com/v1/search?query=cat&per_page=15&page=1`, {
      "async": true,
      "crossDomain": true,
      "url": "https://api.pexels.com/v1/search?query=cat&per_page=15&page=1",
      "method": "GET",
      headers: {
        'Authorization': 'Bearer 563492ad6f9170000100000184d90b11c0344ad9b941f6bd5432e6f2',
        'cache-control': 'no-cache',
      }
    })
    .then(results => console.log(results))
    .then(data => console.log(data))
  }

  // getAnimalPhoto = (animalType = 'dog', amount = 1) => {
  //   const url = `https://api.pexels.com/v1/search?query=${animalType}&per_page=${amount}&page=1`;
  //   console.log(url);
  //   const bearer_token = '563492ad6f9170000100000184d90b11c0344ad9b941f6bd5432e6f2';
  //   const bearer = 'Bearer ' + bearer_token;
  //   fetch(url, {
  //     method: 'GET',
  //     headers: {
  //         'Host': 'api.pexels.com',
  //         'Authorization': bearer,
  //         'cache-control': 'no-cache',
  //         'Access-Control-Allow-Origin': 'include'
  //     }
  //   })
  //   .then(results => results.json())
  //   .then(data => console.log(data))
  //   .catch(error => this.setState({
  //       isLoading: false,
  //       message: 'Something bad happened ' + error
  //   }));
  // }

  render() {
    return (
      <div className="App">
        <Toggle handleInputChange={e => this.setAnimalType(e.target.checked ? 'dog' : 'cat')} isDog={this.state.animalType === 'dog'} />
        {/* do not use onChange and onSubmit as props here; use the function name instead */}
        <MainForm value={this.state.numberOfFacts} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <header className="App-header">
          <Card buttonText={`Generate a ${this.state.animalType} fact`} facts={this.state.facts} handleClick={() => this.getAnimalFact(this.state.animalType)} handleClickPhoto={() => console.log('')} />
          {/* `amount`, as set in the fetch function, is a parameter for this.state.numberOfFacts*/}
        </header>
      </div>
    );
  }
}

export default App;
