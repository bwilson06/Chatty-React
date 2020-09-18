import React from 'react';
import Nav from "../sub-components/Nav";
import { Jumbotron, Container, Form, Button } from "react-bootstrap";

const Create = () => {
    return (
        <div>
          <Nav />  
          <Container>
        <Jumbotron fluid>
          <Container>
            <h1 className="text-center">Create</h1>
            <p className="text-center">
              Please enter your username and then click the button to generate your room's code.
            </p>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter username" />
              </Form.Group>
            </Form>
            <Button variant="primary" size="lg" block href="/chat">
          Create
        </Button>
          </Container>
        </Jumbotron>
      </Container>
        </div>
    );
};

export default Create;