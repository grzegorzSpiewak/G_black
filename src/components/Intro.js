import React, { Component } from 'react';

class Intro extends Component {

  render() {
    return (
      <section className="intro">
        <div className="intro__wrap">
          <h1 className="intro__name">grzegorz</h1>
          <h1 className="intro__surname">spiewak</h1>
          <h1 className="intro__position">front end developer</h1>
        </div>
        <div className="intro__line" />
        <button
          className="intro__btn"
          onClick={this.props.hideIntro}
        >
        Learn more
        </button>
      </section>
    );
  }
}

export default Intro;
