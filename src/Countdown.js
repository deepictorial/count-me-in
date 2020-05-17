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
          <button className="btn btn-primary">Start Countdown</button>
        </div>
        </form>
        <Clock date={this.state.date}/>
      </div>
    );
  }
}

export default Countdown;
