import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      footballTeams: [
        "New Orleans Saints",
        "Tennessee Titans",
        "Denver Broncos",
        "Atlanta Falcons",
        "Greenbay Packers"
      ]
    }
  }

  render() {
    let teamsToDisplay = this.state.footballTeams.map( (element,index) => {
      return (
        <h2 key={ index }>{ element }</h2>
      )
    })

    return (
      <div className="App">
        { teamsToDisplay }  
      </div>
    );
  }
}

export default App;
