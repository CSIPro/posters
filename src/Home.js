import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Talks from './csitalks.png';
import Code from './csicode.png';
import './Home.css';

export default class Home extends Component {
  render () {
    return (
      <div>
        <ul className="CardContainer">
          <li className="Card">
            <Link to="/talks">
              <img src={Talks}/>
            </Link>
          </li>
          <li className="Card">
            <Link to="/code">
              <img src={Code}/>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}