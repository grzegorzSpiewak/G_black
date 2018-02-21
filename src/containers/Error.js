import React, { Component } from 'react';

class Error extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="page">
        <h1>This is Error</h1>
      </div>
    );
  }
}

export default Error;
