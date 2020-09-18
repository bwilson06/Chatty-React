import React from "react";
import Nav from "../sub-components/Nav";
import { Button, Container, Jumbotron } from "react-bootstrap";
const Home = () => {
  return (
    <div>
      <Nav />
      <br></br>
      <br></br>
      <Container>
        <Jumbotron fluid>
          <Container>
            <h1 className="text-center">Welcome</h1>
            <p className="text-center">
              Chatty is a bi-directional messaging application that utilizes WebSockets.
            </p>
          </Container>
        </Jumbotron>
        <br></br>
        <Button variant="primary" size="lg" block href="/join">
          Join Room
        </Button>
        <Button variant="danger" size="lg" block href="/create">
          Create Room
        </Button>
      </Container>
    </div>
  );
};

export default Home;
