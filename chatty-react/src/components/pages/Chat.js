import React, { Component } from "react";
import { Container, Button, InputGroup, FormControl } from "react-bootstrap";
import Nav from "../sub-components/Nav";
import "../Main.css";
import axios from 'axios';

class Chat extends Component {
  state = {
    message: ''
  }

  componentDidMount() {
    let id = this.props.match.params.room_id;
    console.log(id);
    console.log(this.props.match.params.username)
  }

  handleChange = (event) => {
    this.setState({ chat: event.target.value })
  };

  handleSubmit = () => {
    console.log(this.state.chat)
  }
  render() {
    return (
      <div>
        <Nav />
        <Container>
          <div className="chatbox">
            <InputGroup>
              <FormControl
                placeholder="Enter your message"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(event) => this.handleChange(event)}
              />
              <InputGroup.Append>
                <Button variant="outline-primary" onClick={this.handleSubmit}>Send</Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
        </Container>
      </div>
    );
  }
}

export default Chat;
