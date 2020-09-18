import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Home from '../src/components/Home';
import Join from '../src/components/Join';
import Create from '../src/components/Create';
import Chat from '../src/components/Chat';
import './App.css';

function App() {
  return (
    <Router>
      <Container>
      <Route exact path="/" component={Home} />
      <Route path="/Join" component={Join} />
      <Route path="/create" component={Create} />
      <Route path="/Chat" component={Chat} />
      </Container>
    </Router>
  ); 
}

export default App;
