import React, { Component } from 'react';
import './App.css';

// Question #1
// Create a basic react app where you type in a text box and it shows up as text on the DOM.

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: ""
      // review: ""
    } 
  };

  handleChange( value ) {
    this.setState({message: value})
  };

  render() {
    return (
      <div className="App">
        <input onChange={ (e) => this.handleChange( e.target.value ) } type ="text" />
        <p>{ this.state.message }</p>
      </div>
    );
  }
}

export default App;

// Andrew's Notes

// <p> Paragraph Tag
// We need a place to store the users message so we create <p> tage.
// This <p> tag will allow the user to view their message on the screen.