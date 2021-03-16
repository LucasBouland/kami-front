import React from 'react';

import './App.css';
import { Talents } from './components/Talents/Talents';
import { Races } from './components/Races/Races';
import { Home } from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Card, CardDeck, Navbar } from 'react-bootstrap';

function App() {
  return (

    <Router>
      <Navbar  bg="light" expand="lg">
        <CardDeck>
          <Card>
              <Card.Title><Link to="/talents">Talents</Link></Card.Title>
          </Card>
          <Card>
              <Card.Title><Link to="/races">Races</Link></Card.Title>
          </Card>
          <Card>
              <Card.Title><Link to="/">Home</Link></Card.Title>
          </Card>
        </CardDeck>
      </Navbar>
        <Switch>
          <Route path="/talents">
            <Talents/>
          </Route>
          <Route path="/races">
            <Races/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>

  );
}

export default App;
