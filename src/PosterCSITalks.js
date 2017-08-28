import React, { Component } from 'react';
import Kronos from 'react-kronos';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';
import { createDateString, createTimeString, setStartOfTheDay } from './utils';
import './Poster.css';
import CSITalksLogo from './csitalks.svg';
import CSIProLogo from './csiprocuadrado_blanco.svg';
import facebook from './facebook2.svg';
import twitter from './twitter.svg';
import mail from './mail.svg';

export default class PosterCSITalks extends React.Component {
  constructor () {
    super();
    this.rightNow = new Date()
    this.state = {
      nombrePlatica: "Nombre de la plática",
      nombrePresentador: "¿Quién presenta?",
      fecha: createDateString(this.rightNow),
      hora: createTimeString(this.rightNow),
      selectedDate: this.rightNow
    }
    this.setDate = this.setDate.bind(this);
    this.setHours = this.setHours.bind(this);
    this.setNombrePlatica = this.setNombrePlatica.bind(this);
    this.setNombrePresentador = this.setNombrePresentador.bind(this);
  }
  setDate (datetime) {
    this.setState(Object.assign({}, this.state, {
      fecha: createDateString(datetime),
      selectedDate: datetime
    }));
  }
  setHours (datetime) {
    this.setState(Object.assign({}, this.state, {
      "hora": createTimeString(datetime),
      selectedDate: datetime
    }));
  }
  setNombrePlatica (e) {
    this.setState(Object.assign({}, this.state, {
      "nombrePlatica": e.target.value
    }));
  }
  setNombrePresentador (e) {
    this.setState(Object.assign({}, this.state, {
      "nombrePresentador": e.target.value
    }));
  }
  render () {
    return (
      <div>
        <div className="Poster-container CSITalks">
          <div className="Poster-content">
            <div className="Poster-text-container">
              <img 
                src={CSITalksLogo}
                className="Poster-image"
              />
              <p>{this.state.fecha}</p>
              <ul className="Poster-presentadores-container">
                <li>
                  {this.state.nombrePlatica}
                  <small>
                    por {this.state.nombrePresentador} a las {this.state.hora}
                  </small>
                </li>
              </ul>
              <p>
                Salón 5J-205 (CSIPro)
                <br/>
                Ingeniería Industrial Unison
              </p>
              <div className="Poster-socialNetworks-container">
                <ul className="Poster-socialNetworks-itemList">
                  <li className="Poster-socialNetworks-item Poster-socialNetworks-item-twitter">
                    <div className="Poster-socialNetworks-iconContainer">
                      <img src={ twitter } />
                    </div>
                    <div className="Poster-socialNetworks-text">
                      <span>@csipro_dev</span>
                    </div>
                  </li>
                  <li className="Poster-socialNetworks-item Poster-socialNetworks-item-facebook">
                    <div className="Poster-socialNetworks-iconContainer">
                      <img src={ facebook } />
                    </div>
                    <div className="Poster-socialNetworks-text">
                      <span>/csiprounison</span>
                    </div>
                  </li>
                  <li className="Poster-socialNetworks-item Poster-socialNetworks-item-gmail">
                    <div className="Poster-socialNetworks-iconContainer">
                      <img src={ mail } />
                    </div>
                    <div className="Poster-socialNetworks-text">
                      <span>csipro.dev@gmail.com</span>
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
        <div className="Poster-information-container">
          <h2>Introduce la información de la plática</h2>
          <form>
            <div className="Poster-information-inputContainer">
              <label>Nombre de la plática</label>
              <input
                type="text"
                className="Poster-information-input"
                onChange={this.setNombrePlatica}
              />
            </div>
            <div className="Poster-information-inputContainer">
              <label>¿Quién presenta?</label>
              <input
                type="text"
                className="Poster-information-input"
                onChange={this.setNombrePresentador}
              />
            </div>
            <div className="Poster-information-inputContainer">
              <label>Fecha y hora de la plática</label>
              <div className="kronos-container">
                <Kronos
                  date={this.state.selectedDate}
                  min={setStartOfTheDay(this.rightNow)}
                  preventClickOnDateTimeOutsideRange
                  inputClassName="Poster-information-input"
                  format="MMMM D, YYYY"
                  options={{
                    locale: {
                      lang: "es"
                    }
                  }}
                  onChangeDateTime={this.setDate}
                  returnAs="JS_DATE"
                />
              </div>
              <div className="kronos-container">
                <Kronos
                  time={this.state.selectedDate}
                  min={this.rightNow}
                  preventClickOnDateTimeOutsideRange
                  inputClassName="Poster-information-input"
                  onChangeDateTime={this.setHours}
                  returnAs="JS_DATE"
                />
              </div>
            </div>
          </form>
          <button 
            className="Download-button"
            onClick={(e) => {
              e.preventDefault();
              domToImage.toBlob(document.querySelector(".Poster-container"))
                .then(blob => {
                  fileSaver.saveAs(blob, "poster.png");
                })
            }}>
            Descargar poster
          </button>
        </div>
      </div>
    )
  }
}