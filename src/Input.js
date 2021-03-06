import React, { Component } from 'react';

export default class Input extends Component {
  render () {
    return (
      <div
        contentEditable
        children={ this.props.text }
        style={Object.assign({}, {
          display: 'inline-block',
          fontWeight: '500',
          textDecoration: 'underline'
        }, this.props.style || {})}
      />
    );
  }
}
