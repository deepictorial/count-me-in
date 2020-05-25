import React from 'react';
import './App.css';
import Mainpage from './Mainpage.js';
import Login from './Login.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Icon, Image, Divider } from 'semantic-ui-react';
import logo from './images/icon.png';

const HeaderIcon = () => (
  <Header as='h1' icon>Count Me In!
    <Icon name='clock' />
    <Divider hidden />
    <Header.Subheader>
      Create personalized countdown timers
    </Header.Subheader>
    <Image src={logo} fluid />
  </Header>
)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: null, redirect: false };
  }
  
  getUsername = (navUsername) => {
    this.setState({ username: navUsername })
  }

  getRedirect = (value) => {
    this.setState({ redirect: value })
  }

  render() {
    if(this.state.redirect === false) {
      return (
          <div className="App">
            <HeaderIcon />
            <Login passUserName={this.getUsername} passRedirect={this.getRedirect}/>
          </div>
        );
      } else {
          return (
            <div className="App">
              <Mainpage username={this.state.username}/>
            </div>
          );
      }
  }
}

export default App;
