import React, { Component } from "react";
import { Container, Button, InputGroup, FormControl } from "react-bootstrap";
import Nav from "../sub-components/Nav";
import "../Main.css";
class Chat extends Component {
  componentDidMount() {
    let id = this.props.match.params.room_id;
    console.log(id);
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
              />
              <InputGroup.Append>
                <Button variant="outline-primary">Send</Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
        </Container>
      </div>
    );
  }
}

export default Chat;
