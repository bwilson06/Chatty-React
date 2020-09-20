import React, { Component } from "react";
import Nav from "../sub-components/Nav";
import Alert from "../sub-components/Alert";
import axios from "axios";
import { Jumbotron, Container, Form, Button } from "react-bootstrap";

class Create extends Component {
  state = {
    errors: ["yo"],
  };

  clearErrors = () => {
    this.setState({ errors: [] });
  };

  genRoomCode = () => {
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
        .then(function(response){
            console.log(response)
        })
        .catch((error) => {
            console.log(error);
          });
  };

  render() {
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
                errors={this.state.errors}
                clearErrors={this.clearErrors}
              />
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter username" />
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
  }
}

export default Create;
