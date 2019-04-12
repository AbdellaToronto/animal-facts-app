import React, { Component } from 'react';
import './App.css';
import Card from './Components/Card';
import Toggle from './Components/Toggle';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      fact: ['Dog fact'],
      buttonText: `Generate a dog fact`,
      animalType: true,
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.fetchData();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      animalType: value
    });
  }

  // why do we use componentDidMount?
  // componentDidMount() {
  //   this.fetchData();
  // }

  // clearFact = () => {
  //   this.setState({
  //     fact: ['Dog fact']
  //   });
  // }

  // componentWillUnmount() {
  //   this.clearFact();
  // }

  fetchData = () => {
    fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount')
    .then(results => results.json())
    .then(data => {
      let fact = data.map((fact) => fact.text)
      this.setState({
        fact: fact,
        buttonText: `Generate another dog fact`
      });
    })
  }
  render() {
    return (
      <div className="App">
        <Toggle handleInputChange={this.handleInputChange} animalType={this.state.animalType} />
        <header className="App-header">
          <Card buttonText={this.state.buttonText} fact={this.state.fact} handleClick={this.handleClick} />
        </header>
      </div>
    );
  }
}

export default App;
