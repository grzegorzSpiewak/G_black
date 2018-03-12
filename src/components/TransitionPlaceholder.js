import React from 'react';
import PropTypes from 'prop-types';

const TransitionPlaceholder = (props) => {
  return (
    <section className="placeholder">
      <i className={`placeholder__icon ${props.icon}`} aria-hidden="true" />
      <h1 className="placeholder__header">{props.text}</h1>
    </section>
  );
};

TransitionPlaceholder.propTypes = {

};

export default TransitionPlaceholder;
