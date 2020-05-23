import React from 'react';
import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/button';
import './App.css';


class Signup extends React.Component {

  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicUser">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default Signup;
