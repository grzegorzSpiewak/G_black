import React from 'react';
import PropTypes from 'prop-types';

const TextBox = (props) => {
  return (
    <section className="information">
      <div className="information__wrap">
        <h1 className="information__header">About me</h1>
      </div>
      <div className="information__wrap">
        <p className="information__text">
          I’m a perfectionist with a strong eye, ear and heart not only for the details but the perfection of a whole. As a Front End Developer with a marketing background, I am not only able to build a modern application based on Javascript but add to it unique creative ideas. In my work, I focus on user problems and provide genuine solutions. I specialize in brand identity, web design and of course... front-end development.
        </p>
      </div>
    </section>
  )
}

TextBox.propTypes = {

};

export default TextBox;
