import React from 'react';
import PropTypes from 'prop-types';
import RedirectButton from './RedirectButton';

const renderItems = (items) => {
  return items.map(item => (
    <div className="services__skill" key={item.id}>
      <div className="services__skill__icon">
        <i className={`${item.icon}`} />
      </div>
      <h1 className="services__skill__heading">{item.heading}</h1>
      <p className="services__skill__text">{item.text}</p>
      {
        item.redirect ?
          <RedirectButton
            redirect={item.redirect}
            anchor={item.anchor}
            className={'services__skill'}
          />
        :
          null
      }
    </div>
  ));
};

const Services = (props) => {
  return (
    <section className="services" name="services">
      <h1 className="services__heading">{props.heading}</h1>
      <div className="services__wrap">
        {renderItems(props.items)}
      </div>
    </section>
  );
};

Services.propTypes = {
  heading: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      heading: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    }).isRequired,
  ).isRequired
};

export default Services;
