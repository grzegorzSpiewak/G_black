import React from 'react';
import PropTypes from 'prop-types';
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
