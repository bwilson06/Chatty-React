import React, { Component } from 'react';
import Nav from "../sub-components/Nav";
import Alert from "../sub-components/Alert";
import { Button, Container, Jumbotron, Form } from "react-bootstrap";

class Join extends Component {

  state = {
    room_code: '',
    username: '',
    errors: []
  }

  joinRoom = (event) => {
    event.preventDefault()
    if (this.state.room_code === '' && this.state.username === ''){
      this.setState({ errors: ["Please enter your room code and username."]})
    }else if (this.state.room_code === ''){
      this.setState({ errors: ["Please enter your room code"]})
    }else if (this.state.username === ''){
      this.setState({ errors: ["Please enter your username."]})
    }else{
      window.location.href = `/chat/${this.state.room_code}/${this.state.username}`
    }
  }

  handleChange = (event) => {
    const change = event.target.name;
    this.setState({ [change]: event.target.value });
  };

  clearErrors = () => {
    this.setState({ errors: [] });
  };

  render() {
    return (
      <div>
        <Nav />
      <Container>
        <Jumbotron fluid>
          <Container>
            <h1 className="text-center">Join</h1>
            <p className="text-center">
              Please enter the five letter room code below.
            </p>
            <Alert
                errors={this.state.errors}
                clearErrors={(event) => this.clearErrors(event)}
              />
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter code" name={"room_code"}onChange={(event) => this.handleChange(event)} />
                <Form.Text className="text-muted">
                  We'll never share your conversations with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter username" name={"username"} onChange={(event) => this.handleChange(event)}/>
                <Form.Text className="text-muted">
                  In this app, feel free to call yourself whatever you like.
                </Form.Text>
              </Form.Group>
            </Form>
            <Button variant="primary" size="lg" block id="join" onClick={(e) => this.joinRoom(e)}>
          Join Room
        </Button>
          </Container>
        </Jumbotron>
      </Container>
      </div>
    );
  }
}

export default Join;
