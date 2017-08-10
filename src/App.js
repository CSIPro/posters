import React, { Component } from 'react';
import Home from './Home';
import CSITalksPoster from './PosterCSITalks';
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
            <Link to="/">
              <img src={logo} className="App-logo" alt="logo" />
              <h2 className="App-header-text">Generador de posters de eventos</h2>
            </Link>
          </header>
          <Route exact path="/" component={Home}/>
          <Route path="/talks" component={CSITalksPoster}/>
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
