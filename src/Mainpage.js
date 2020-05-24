import React from 'react';
import './App.css';
import Countdown from './Countdown.js';
import Navigation from './Navigation.js';
import Timers from './Timers.js';

class Mainpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: null, timerData: {} };
  }

  getUsername = (navUsername) => {
    this.setState({ username: navUsername })
  }

  componentDidMount() {
    if (this.state.username !== null) {
      this.getUserEvents();
    }
  }

  getUserEvents() {
    if (this.state.username !== null) {
      let promiseresult = new Promise(resolve => {
        fetch('https://law20kowah.execute-api.us-west-2.amazonaws.com/prod/getuser?id='+this.state.username).then(function (response) {
      	    resolve(response.json());
          });
        }).catch(function (err) {
      	  console.warn('Something went wrong.', err);
        });

      promiseresult.then(result => {
        this.setState({timerData: result});
      }, function(error) {
        console.log("there is an error inside promise", error);;
      });
    }
  }

  render() {
    return (
      <div className="Mainpage">
        <Navigation passUserName={this.getUsername}/>
        <Countdown username={this.state.username}/>
        <Timers timerData={this.state.timerData} username={this.state.username}/>
      </div>
    );
  }
}

export default Mainpage;
