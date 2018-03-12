import React, { Component } from 'react';
import Greg from 'styles/images/Greg.png';

class Logo extends Component {

  render() {
    return (
      <section className="box logo">
        <div className="logo__wrap">
          <img src={Greg} className="logo__icon" />
        </div>
      </section>
    );
  }
}

export default Logo;
