import React from 'react';

const CaruselIndicators = (props) => {

  return (
    <span
      className={
        props.currentSlide === props.renderedSlideId ?
          'carusel__indicators__circle__current'
        :
          'carusel__indicators__circle'
      }
      data-slide={props.slide}
      onClick={props.onClick}
    />
  );
};

export default CaruselIndicators;
