import React, { Component } from 'react';

export default class Input extends Component {
  render () {
    return (
      <div
        contentEditable
        children={ this.props.text }
        style={{
          display: 'inline-block'
        }}
      />
    );
  }
}
