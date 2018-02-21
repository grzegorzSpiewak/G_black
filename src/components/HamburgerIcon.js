import React from 'react';

const HamburgerIcon = (props) => {
  return (
    <a
      className={props.isOpen ? 'hamburger__active hamburger' : 'hamburger'}
      onClick={props.forOpen}
    >
      <span className={props.isOpen ? 'hamburger__bar__active hamburger__bar' : 'hamburger__bar'} />
      {
        props.isOpen ? document.body.classList.add('overflow') : document.body.classList.remove('overflow')
      }
    </a>
  );
};

export default HamburgerIcon;
