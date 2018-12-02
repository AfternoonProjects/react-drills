import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      filterTeams: "",
      teams: [
        "New Orleans Saints",
        "Tennessee Titans",
        "Denver Broncos",
        "Atlanta Falcons",
        "Greenbay Packers"
      ]
    }
  };

  handleChange( filter ) {
    this.setState( { filterTeams: filter })
  };

  render() {
    let teamsToDisplay = this.state.teams.filter( (element, index) => {
      return element.includes( this.state.filterTeams);
    }).map( (element, index) => {
      return <h2 key={ index }>{ element }</h2>
    })

    return (
      <div className="App">
        <input onChange={ (e) => this.handleChange( e.target.value ) } type="text" />
        { teamsToDisplay }
      </div>
    );
  }
}

export default App;
