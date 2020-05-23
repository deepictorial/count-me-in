import React from 'react';
import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/button';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Card from 'react-bootstrap/card';
import CardColumns from 'react-bootstrap/cardcolumns';
import './App.css';

class Login extends React.Component {

  render() {
    return (
      <CardColumns>
        <Card className="p-3">
          <Card.Header>Been here before?
            <Card.Title className="text-muted">Welcome back!</Card.Title>
          </Card.Header>
          <Form>
            <Form.Group controlId="formBasicUser">
              <Form.Label sm="2">Username</Form.Label>
              <Form.Control type="text" placeholder="Username" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Card>
        <Card className="p-3">
          <Card.Header>First time?
            <Card.Title className="text-muted">Hey there, let's get to know you</Card.Title>
          </Card.Header>
          <Form>
            <Form.Group controlId="formBasicUser">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Signup
            </Button>
          </Form>
        </Card>
      </CardColumns>
    );
  }
}

export default Login;
