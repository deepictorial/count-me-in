import React from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clock from './Clock.js';

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(), eventname: 'Enter event name'};
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
  }

  handleTextChange(event) {
    this.setState({
      eventname: event.target.value
    })
  }

  componentDidMount() {
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.setState((state,props) => (
      {date: state.startDate, eventname: state.eventname}));
    document.getElementById('event-text').classList.add('saved-text');
    this.sendEvent();
  }

  async sendEvent() {
    //{"user":"user1","event":"its a random tuesday", "time":1590125266}
    let username = this.props.username;
    let eventname = this.state.eventname;
    let eventdate = this.state.date;
    let countdownitem = {user: username, event: eventname, time: eventdate.getTime()};

    let response = await fetch('https://law20kowah.execute-api.us-west-2.amazonaws.com/prod/setnewcountdown', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
      body: JSON.stringify(countdownitem)
    }).then(function (response) {
      if(response.status === 200) {
        console.log("countdown date has been sent",countdownitem);
      } else if(response.status > 399){
        console.log("countdown date has wasnt sent, check errors");
      }
    }).catch(function (err) {
  	  console.warn('Something went wrong.', err);
    });
  }

  render() {
    return (
      <div className="countdown-new">
        <form onSubmit={ this.onFormSubmit }>
        <div className="form-group">
          <div className="event-group">
            <textarea
              id="event-text"
              placeholder="Your event name.."
              onChange={this.handleTextChange}>
            </textarea>
          </div>
          <DatePicker
            className="date-picker"
            selected={this.state.startDate}
            onChange={this.handleChange}
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mm aa"/>
          <button
            className="btn btn-primary">Start Countdown</button>
        </div>
        </form>
        <Clock date={this.state.date}/>
      </div>
    );
  }
}

export default Countdown;
