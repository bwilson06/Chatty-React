import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Home from './components/pages/Home';
import Join from './components/pages/Join';
import Create from './components/pages/Create';
import Chat from './components/pages/Chat';
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
