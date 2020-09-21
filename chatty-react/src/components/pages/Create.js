import React, { Component } from "react";
import Nav from "../sub-components/Nav";
import { Route, Redirect } from 'react-router-dom';
import Alert from "../sub-components/Alert";
import axios from "axios";
import { Jumbotron, Container, Form, Button } from "react-bootstrap";

class Create extends Component {
  state = {
    userNameError: false,
    userName: '',
    redirect: false,
    route: ''
  };


  clearErrors = () => {
    this.setState({ userNameError: false });
  };

  handleChange = (event) => {
      console.log(event.target.value)
      this.setState({ userName: event.target.value })
  };

  genRoomCode = (event) => {
    event.preventDefault();
    if (this.state.userName === ''){
      this.setState({ userNameError: true })
    }else{
    this.setState({ userNameError: false })
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    const newResult = {
        result: result
    }
    axios
        .post("/create", newResult)
        .then((response) => {
            if (response){
              let route = `/chat/${response.data.roomCode}`
              this.setState({ route: route })
              this.setState({ redirect: true })
            }  
        })
        .catch((error) => {
            console.log(error);
          });
  }
};

  render() {
    if (!this.state.redirect){
    return (
      <div>
        <Nav />
        <Container>
          <Jumbotron fluid>
            <Container>
              <h1 className="text-center">Create</h1>
              <p className="text-center">
                Please enter your username and then click the button to generate
                your room's code.
              </p>
              <Alert
                userNameError={this.state.userNameError}
                clearErrors={(event) => this.clearErrors(event)}
              />
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter username" name={"userName"} onChange={(event) => this.handleChange(event)}/>
                </Form.Group>
              </Form>
              <Button
                variant="primary"
                size="lg"
                id="create"
                onClick={this.genRoomCode}
                block
              >
                Create
              </Button>
            </Container>
          </Jumbotron>
        </Container>
      </div>
    );
  }else{
    return (
      <Redirect from="/create" to={this.state.route} />
      )
  }
} 
}

export default Create;
