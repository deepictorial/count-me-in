import React from 'react';
import './App.css';
import Mainpage from './Mainpage.js';
import Login from './Login.js';
import Signup from './Signup.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Icon } from 'semantic-ui-react';

const HeaderIcon = () => (
  <Header as='h2' icon>
    <Icon name='clock' />
    Account Settings
    <Header.Subheader>
      Personalize your countdown timers
    </Header.Subheader>
  </Header>
)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: null, timerData: {} };
  }

  getUsername = (navUsername) => {
    this.setState({ username: navUsername })
  }

  render() {
    return (
      <div className="App">
        <HeaderIcon />
        <Login passUserName={this.getUsername}/>
      </div>
    );
  }
}

export default App;
