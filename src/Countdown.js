import React from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/accordion';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';
import Timers from './Timers.js';

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: null, eventname: 'Enter event name', refresh: null};
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleChange(newdate) {
    this.setState({
      startDate: newdate
    })
  }

  handleTextChange(event) {
    this.setState({
      eventname: event.target.value
    })
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.setState((state,props) => (
      {date: state.startDate, eventname: state.eventname}));
    this.sendEvent();
  }

  async sendEvent() {
    //{"user":"user1","event":"its a random tuesday", "time":1590125266}
    let username = this.props.username;
    let eventname = this.state.eventname;
    let eventdate = this.state.startDate;
    let countdownitem = {user: username, event: eventname, time: eventdate.getTime()};

    let response = await fetch('https://law20kowah.execute-api.us-west-2.amazonaws.com/prod/setnewcountdown', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
      body: JSON.stringify(countdownitem)
    }).then((response) => {
      if(response.status === 200) {
        this.setState({refresh: true});
        this.props.passRefresh(this.state.refresh);
      } else if(response.status > 399){
        console.log("countdown date has wasnt sent, check errors");
      }
    }).catch(function (err) {
  	  console.warn('Something went wrong.', err);
    });
  }

  render() {
    return (
      <Accordion className="accordion-countdown">
        <Card>
          <Card.Header>
            <Accordion.Toggle id="toggler" as={Card.Header} eventKey="0">
              Add new countdown
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <div className="countdown-new">
              <form id="date-form" onSubmit={ this.onFormSubmit }>
                <div className="form-group">
                  <div className="event-group">
                    <textarea
                      id="event-text"
                      placeholder="Your event name"
                      onChange={this.handleTextChange}>
                    </textarea>
                  </div>
                  <DatePicker
                    id="date-picker"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    showTimeSelect
                    dateFormat="MMMM d, yyyy h:mm aa"
                    withPortal
                    placeholderText="Choose event date"/>
                  <button
                    className="btn btn-primary">Start Countdown
                  </button>
                </div>
              </form>
            </div>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}

export default Countdown;
