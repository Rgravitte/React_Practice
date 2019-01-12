import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      { name: 'Ross', age: 25 },
      { name: 'Kyle', age: 28 },
      { name: 'Roger', age: 56 }
      
    ]
  }

  switchNameHandler = () => {
      console.log('button clicked')
    }


  render() {
    return (
      <div className="App">
        <h1>This is a React App</h1>
        <button onClick={ this.switchNameHandler }>Switch Name</button>
        <Person name={ this.state.person[0].name } age={ this.state.person[0].age }/>
        <Person name={ this.state.person[1].name } age={ this.state.person[1].age }/>
        <Person name={ this.state.person[2].name } age={ this.state.person[2].age }/>
      </div>
    // React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, im a React App'))
    );
  }
}

export default App;
