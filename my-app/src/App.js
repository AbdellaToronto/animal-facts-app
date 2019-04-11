import React, { Component } from 'react';
import './App.css';
import Card from './Components/Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      fact: ['Dog fact']
    }
  }
  handleClick(e) {
    e.preventDefault();
    this.fetchData();
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
    .then(results => {
      return results.json();
    }).then(data => {
      let fact = data.map((fact) => {
        return fact.text
      })
      this.setState({
        fact: fact
      });
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Card fact={this.state.fact} handleClick={this.handleClick} />
        </header>
      </div>
    );
  }
}

export default App;
