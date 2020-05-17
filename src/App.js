import React from 'react';
import './App.css';
import Countdown from './Countdown.js';
import Navigation from './Navigation.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Countdown />
      </div>
    );
  }
}

export default App;
