import React from 'react';
import './App.css';
import Countdown from './Countdown.js';
import Navigation from './Navigation.js';
import Timers from './Timers.js';
import Jumbotron from 'react-bootstrap/jumbotron';

class Mainpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: null, timerData: {}, refresh: null };
  }

  componentDidMount() {
    if (this.props.username !== null) {
      this.getUserEvents(this.props.username);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.refresh !== this.state.refresh) {
      console.log("prevState", prevState);
      console.log("prevProps", prevProps);

      console.log("does it come here - main update inside if loop ");
      this.getUserEvents(this.props.username);
      this.setState({refresh: null});
    }
  }

  getUserEvents(username) {
    if (username !== null) {
      let promiseresult = new Promise(resolve => {
        fetch('https://law20kowah.execute-api.us-west-2.amazonaws.com/prod/getuser?id='+username).then(function (response) {
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

  getRefresh = (value) => {
    this.setState({ refresh: value })
  }

  render() {
    return (
      <div className="Mainpage">
        <Jumbotron>
          <h1>Hello, {this.props.username}!</h1>
          <p>
            You can add a new Event name with a countdown timer by clicking
            Add below.
          </p>
          <p>
          </p>
        </Jumbotron>
        <Countdown username={this.props.username} passRefresh={this.getRefresh}/>
        <Timers timerData={this.state.timerData} username={this.props.username}/>
      </div>
    );
  }
}

export default Mainpage;
