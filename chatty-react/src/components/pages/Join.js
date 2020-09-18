import React from "react";
import Nav from "../sub-components/Nav";
import { Button, Container, Jumbotron, Form } from "react-bootstrap";

const Join = () => {
  return (
    <div>
      <Nav />
      <Container>
        <Jumbotron fluid>
          <Container>
            <h1 className="text-center">Join</h1>
            <p className="text-center">
              Please enter the four letter room code below.
            </p>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter code" />
                <Form.Text className="text-muted">
                  We'll never share your conversations with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter username" />
                <Form.Text className="text-muted">
                  In this app, feel free to call yourself whatever you like.
                </Form.Text>
              </Form.Group>
            </Form>
            <Button variant="primary" size="lg" block href="/chat">
          Join Room
        </Button>
          </Container>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default Join;
