import React from 'react';
import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/button';
import Card from 'react-bootstrap/card';
import CardColumns from 'react-bootstrap/cardcolumns';
import './App.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      email: "",
      loginerror: "",
      signuperror: "",
      redirect: false
    };
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
  }

  login(e) {
    e.preventDefault();
    let user = this.state.user;
    let loginData = {user: user};

    fetch('https://law20kowah.execute-api.us-west-2.amazonaws.com/prod/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
      body: JSON.stringify(loginData)
    }).then((response) => {
      if(response.status === 200) {
        this.setState({loginerror: "", redirect: true});
        this.props.passUserName(this.state.user);
        this.props.passRedirect(this.state.redirect);
      } else if(response.status > 399){
        this.setState({loginerror: "Username doesn't exist"});
      }
    }).catch((err) => {
  	  console.warn('Something went wrong.', err);
    });
  }

  signup(e) {
    e.preventDefault();
    let user = this.state.user;
    let email = this.state.email;
    let signupData = {user: user, email: email};

    fetch('https://law20kowah.execute-api.us-west-2.amazonaws.com/prod/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
      body: JSON.stringify(signupData)
    }).then((response) => {
        if(response.status === 200) {
          this.setState({signuperror: "", redirect: true});
          this.props.passUserName(this.state.user);
          this.props.passRedirect(this.state.redirect);
        } else if(response.status > 399){
          this.setState({signuperror: "Username is taken, choose another one."});
        }
    }).catch(function (err) {
  	  console.warn('Something went wrong.', err);
    });
  }

  handleUserChange(event) {
    this.setState({
      user: event.target.value
    })
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  render() {
    const { loginerror, signuperror } = this.state;

    return (
      <CardColumns>
        <Card className="p-3">
          <Card.Header>Been here before?
            <Card.Title className="text-muted">Welcome back!</Card.Title>
          </Card.Header>
          <Form>
            <Form.Group controlId="formBasicUser">
              <Form.Label sm="2">Username</Form.Label>
              <Form.Control
               type="text"
               placeholder="Username"
               onChange={this.handleUserChange} />
               <Form.Text className="text-muted">
                  {loginerror}
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.login}>
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
              <Form.Control
                type="text"
                placeholder="Username"
                onChange={this.handleUserChange} />
                <Form.Text className="text-muted">
                   {signuperror}
               </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={this.handleEmailChange} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.signup}>
              Signup
            </Button>
          </Form>
        </Card>
      </CardColumns>
    );
  }
}

export default Login;
