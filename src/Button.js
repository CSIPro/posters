import React, {Component} from 'react';

class DownloadButton extends Component {
  render() {
    return (
      <div {...this.props} style={{float: 'right', height: '55px', lineHeight: '55px', textAlign:'center', background: 'deepskyblue', color: '#fff', fontSize: '35px', borderRadius: '5px', padding: '0 15px', cursor: 'pointer'}}>
        <i className="fa fa-download" aria-hidden="true"></i>
        <h3 style={{display: 'inline-block', fontSize:'20px', margin: '0 0 0 5px', verticalAlign: 'middle'}}>Descargar</h3>
      </div>
    );
  }
}

export default DownloadButton;
