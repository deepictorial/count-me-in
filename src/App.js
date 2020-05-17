import React from 'react';
import './App.css';
import Countdown from './Countdown.js';
import Navigation from './Navigation.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: null };
  }

  getUsername = (navUsername) => {
    this.setState({ username: navUsername })
  }

  render() {
    return (
      <div className="App">
        <Navigation passUserName={this.getUsername}/>
        <Countdown username={this.state.username}/>
      </div>
    );
  }
}

export default App;
