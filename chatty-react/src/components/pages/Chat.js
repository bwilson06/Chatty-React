import React, { Component } from "react";
import { Container, Button, InputGroup, FormControl } from "react-bootstrap";
import Nav from "../sub-components/Nav";
import ChatContainer from "../sub-components/ChatContainer";
import "../Main.css";
import axios from 'axios';

class Chat extends Component {
  state = {
    message: '',
    chats: []
  }

  componentDidMount() {
    axios
      .get(`/chat/${this.props.match.params.room_id}`)
      .then((response) => {
        if (response) {
        console.log(response.data.chats)
        this.setState({ chats: response.data.chats })
        console.log(this.state.chats)
        }
      })
  }

  handleChange = (event) => {
    this.setState({ message: event.target.value })
  };

  handleSubmit = () => {
    var chat = {
       username: this.props.match.params.username,
       message: this.state.message,
       code: this.props.match.params.room_id
    }

    axios
        .post("/chat", chat)
        .then((response) => {
            if (response){
              console.log(response)
            }  
        })
        .catch((error) => {
            console.log(error);
          });
  }
  render() {
    return (
      <div>
        <Nav />
        <Container>
          <div className="chatbox">
            <ChatContainer className="chat-container" messages={this.state.chats}/>
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
