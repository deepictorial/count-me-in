import React from 'react';
import './App.css';
import Card from 'react-bootstrap/card';
import Clock from './Clock.js';

class Timers extends React.Component {
  constructor(props) {
    super(props);
  }

  dateObj(itemdate) {
    return new Date(itemdate);
  }

  render() {
    let timers = this.props.timerData;

    if (Object.keys(timers).length === 0) {
      return null;
    }

    if (timers.countdowns === null) {
      return (
        <p style={{ color: 'white' }}>You don't have any countdowns, add some!</p>
      )
    }

    let timermap = [];
    for ( var i = 0; i < timers.countdowns.length; i++) {
      let date = new Date(timers.countdowns[i].time);
      let dateString = date.toString();
      let dateEvent = timers.countdowns[i].event;
      timermap.push({date, dateString, dateEvent});
    }

    return (
      timermap.map(item => (
        <>
         <Card
           className='timer-card'
           bg='light'
           text='dark'
           style={{ width: '83rem' }}>
           <Card.Header>{item.dateEvent}</Card.Header>
           <Card.Body>
             <Card.Text>
               {item.dateString}
             </Card.Text>
             <Clock date={item.date}/>
           </Card.Body>
         </Card>
         <br />
       </>
    )));
  }
 }

 export default Timers;
