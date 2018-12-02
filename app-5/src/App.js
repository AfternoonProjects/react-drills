import React, { Component } from 'react';
import Image from './Image';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={ "https://www.gannett-cdn.com/-mm-/0f62eff2e6b466eb911e109fc511c8b75c98f3e7/c=121-217-2193-1775/local/-/media/2017/11/09/USATODAY/USATODAY/636458319807256912-USP-NFL-Tampa-Bay-Buccaneers-at-New-Orleans-Saint.jpg?width=534&height=401&fit=crop" } />
      </div>
    );
  }
}

export default App;
