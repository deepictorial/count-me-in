import React from 'react';
import './App.css';
import Card from 'react-bootstrap/card';

class Timers extends React.Component {
  constructor(props) {
    super(props);
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

    return (
      timers.countdowns.map((item, key) => (
        <>
         <Card
           className='timer-card'
           bg='light'
           text='dark'
           style={{ width: '83rem' }}>
           <Card.Header>{item.event}</Card.Header>
           <Card.Body>
             <Card.Title>{}</Card.Title>
             <Card.Text>
               {item.time}
             </Card.Text>
           </Card.Body>
         </Card>
         <br />
       </>
    )));
  }
 }

 export default Timers;
