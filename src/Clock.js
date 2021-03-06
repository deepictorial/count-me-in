import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };
  }

  componentDidMount() {
    this.setState((state,props) => ({date: props.date}));
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  componentDidUpdate(prevProps) {
    if (this.props.date !== prevProps.date) {
      this.setState((state,props) => ({date: props.date}));
    }
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  stop() {
     clearInterval(this.interval);
   }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    };

    if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
       timeLeft.years = Math.floor(diff / (365.25 * 86400));
       diff -= timeLeft.years * 365.25 * 86400;
     }
    if (diff >= 86400) { // 24 * 60 * 60
       timeLeft.days = Math.floor(diff / 86400);
       diff -= timeLeft.days * 86400;
     }
    if (diff >= 3600) { // 60 * 60
       timeLeft.hours = Math.floor(diff / 3600);
       diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
       timeLeft.min = Math.floor(diff / 60);
       diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;

  }

  render() {
    const { days, hours, min, sec } = this.state

    return (
      <div>
        <h3 className="countdown-text">{ days } days, { hours } hrs, { min } min, { sec } s remaining</h3>
      </div>
    );
  }
}

export default Clock;
