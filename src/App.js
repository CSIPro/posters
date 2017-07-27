import React, { Component } from 'react';
import Home from './Home';
import logo from './csiproblanco.png';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2 className="App-header-text">Generador de posters de eventos</h2>
          </header>
          <Route exact path="/" component={Home}/>
          <Route path="/talks" render={() => (
            <h3>CSITalks</h3>
          )}/>
          <Route path="/code"
          render={() => (
            <h3>CSICode</h3>
          )}/>
        </div>
      </Router>
    );
  }
}

export default App;
