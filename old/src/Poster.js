import React, { Component } from 'react';
import Input from './Input';
import logo from './csipro.png';
import './App.css';

let monthNames = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiémbre', 'octubre', 'noviembre', 'diciembre'
];

let dayNames = [
  'domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'
];

let today = new Date();

let day = today.getDay();
let date = today.getDate();
let month = today.getMonth();

function createDateString () {
  return `${dayNames[day]}, ${date} de ${monthNames[month]}`;
}

class Poster extends Component {
  render() {
    return (
      <div className="App" style={{background: `#${this.props.route.color}`, maxWidth: '958px', margin: '10px auto 0'}}>
        <div className="InsideBox">
          <h2>Te invitamos a <img alt="<csitalks/>" style={{width: 200, verticalAlign: 'middle', margin: '0 5px'}} src={this.props.route.image}/> este <Input text={ createDateString() }/></h2>
          <h2>Tema: "<Input text="Nombre de la plática"/>"</h2>
          <h2>Presenta: <Input text="Nombre weón"/></h2>
          <h2>Hora: <Input text="1:00"/>pm</h2>
          <h2>Lugar: <Input text="5J-205 (CSIPro)"/></h2>
          <img alt="<csipro/>" width="200" src={logo} />
          <ul className="SocialNetworks">
            <li className="twitter">
              <h3>
                <i className="fa fa-twitter-square" aria-hidden="true"></i>
                @csipro_dev
              </h3>
            </li>
            <li className="facebook">
              <h3>
                <i className="fa fa-facebook-square" aria-hidden="true"></i>
                /csiprounison
              </h3>
            </li>
            <li>
              <h3>
                <i className="fa fa-envelope" aria-hidden="true"></i>
                csipro.dev@gmail.com
              </h3>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Poster;
