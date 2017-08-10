import React, { Component } from 'react';
import createDateString from './utils';
import './Poster.css';
import CSITalksLogo from './csitalks.png';
import CSIProLogo from './csiproblancocuadrado.png';

export default class PosterCSITalks extends React.Component {
  render () {
    return (
      <div className="Poster-container CSITalks">
        <div className="Poster-content">
          <img src={CSITalksLogo} className="Poster-image" style={{background: "rgba(255,255, 255, 0.25)"}}/>
          <div className="Poster-text-container">
            <h3>{createDateString()}</h3>
            <ul className="Poster-presentadores-container">
              <li>
                <input className="Poster-input" type="text" placeholder="Nombre de la plática"/>
                {/*Scripting for Babies*/}
                <small>
                  por <input className="Poster-input" type="text" placeholder="¿Quién presenta?"/> a las <input className="Poster-input" type="text" placeholder="Hora"/>
                </small>
              </li>
            </ul>
            <h3>
              Salón 5J-205 (CSIPro)
              <br/>
              Ingeniería Industrial Unison
            </h3>
            <div className="Poster-socialNetworks-container">
              <ul className="Poster-socialNetworks-itemList">
                <li className="Poster-socialNetworks-item Poster-socialNetworks-item-twitter">
                  <div className="Poster-socialNetworks-iconContainer">
                    <i className="fa fa-twitter fa-fw" aria-hidden="true"></i>
                  </div>
                  <div className="Poster-socialNetworks-text">
                    @csipro_dev
                  </div>
                </li>
                <li className="Poster-socialNetworks-item Poster-socialNetworks-item-facebook">
                  <div className="Poster-socialNetworks-iconContainer">
                    <i className="fa fa-facebook fa-fw" aria-hidden="true"></i>
                  </div>
                  <div className="Poster-socialNetworks-text">
                    /csiprounison
                  </div>
                </li>
                <li className="Poster-socialNetworks-item Poster-socialNetworks-item-gmail">
                  <div className="Poster-socialNetworks-iconContainer">
                    <i className="fa fa-envelope-o fa-fw" aria-hidden="true"></i>
                  </div>
                  <div className="Poster-socialNetworks-text">
                    csipro.dev@gmail.com
                  </div>
                </li>
              </ul>
              <div className="Poster-socialNetworks-CSILogo">
                <img src={CSIProLogo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}