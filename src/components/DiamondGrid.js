import React from 'react';
import PropTypes from 'prop-types';

const DiamondGrid = (props) => {
  return (
    <section className="diamond">
      <ul className="diamond__wrap">
        <li className="diamond__item"><p className="diamond__item__test">1</p></li>
        <li className="diamond__item"><p className="diamond__item__test">1</p></li>
        <li className="diamond__item"><p className="diamond__item__test">1</p></li>
        <li className="diamond__item"><p className="diamond__item__test">1</p></li>
        <li className="diamond__item"><p className="diamond__item__test">1</p></li>
        <li className="diamond__item"><p className="diamond__item__test">1</p></li>
        <li className="diamond__item"><p className="diamond__item__test">1</p></li>
        <li className="diamond__item"><p className="diamond__item__test">1</p></li>
        <li className="diamond__item"><p className="diamond__item__test">1</p></li>
      </ul>
    </section>
  )
}

DiamondGrid.propTypes = {

};

export default DiamondGrid;
