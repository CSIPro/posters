import React from 'react';
import logo from './csiproblanco.png';
import Button from './Button';
import { Link } from 'react-router';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';

export default class App extends React.Component {
  onClick (e) {
    e.preventDefault();
    domToImage.toBlob(document.getElementsByClassName('App')[0])
      .then(blob => {
        fileSaver.saveAs(blob, 'poster.png');
      })
  }
  render () {
    return (
      <div>
        <header style={{background: '#3f3f3f', padding: '5px'}}>
          <Link to="/">
            <img width="200" style={{display: 'inline-block', verticalAlign: 'middle'}} src={logo} alt="<csipro/>" />
            <h3 style={{margin: 0, marginLeft: 5, color: '#fff', display: 'inline-block', verticalAlign: 'middle'}}>Creador de posters de eventos</h3>
          </Link>
          {
            (this.props.location.pathname !== "/") ?
                <Button onClick={ this.onClick.bind(this) } /> : null
          }
        </header>
        {this.props.children}
      </div>
    )
  }
}
