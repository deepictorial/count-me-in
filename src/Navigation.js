import React from 'react';
import './App.css';
import Form from 'react-bootstrap/form';
import FormControl from 'react-bootstrap/formcontrol';
import Button from 'react-bootstrap/button';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "user1"};
    this.handleClick = this.handleClick.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleClick(event) {
    document.getElementById('user-display').innerHTML = "Welcome " + this.state.username;
    document.getElementById('user-name').value = '';
    this.props.passUserName(this.state.username);
  }

  handleTextChange(event) {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Form inline>
          <FormControl
            type="text"
            placeholder="enter username.."
            className="mr-sm-2"
            id="user-name"
            onChange={this.handleTextChange} />
          <Button
            variant="success"
            onClick={this.handleClick}>Login</Button>
        </Form>
      </div>
    );
  }
}

export default Navigation;
