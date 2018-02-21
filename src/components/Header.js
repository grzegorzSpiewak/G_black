import React from 'react';
import PropTypes from 'prop-types';
import Blocks from 'styles/images/desk.jpg';
import Image from 'components/Image';

const Header = (props) => {
  return (
    <section className="header" name="header">
      <Image
        hideOnMobie={false}
        imageId={props.imageId}
        classType="header"
      />
    </section>
  );
};

Header.propTypes = {

};

export default Header;
