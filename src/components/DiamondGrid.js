import React from 'react';
import PropTypes from 'prop-types';
import bootstrap from 'styles/images/icons/bootstrap.png';
import github from 'styles/images/icons/github.png';
import js from 'styles/images/icons/js.png';
import node from 'styles/images/icons/node.png';
import jquery from 'styles/images/icons/jquery.png';
import react from 'styles/images/icons/react.png';
import redux from 'styles/images/icons/redux.png';
import sass from 'styles/images/icons/sass.png';
import webpack from 'styles/images/icons/webpack.png';

const icons = [
  { src: bootstrap, alt: "bootrstap icon", id: "icon 1" },
  { src: github, alt: "github icon", id: "icon 2" },
  { src: js, alt: "javascript icon", id: "icon 3" },
  { src: node, alt: "node icon", id: "icon 4" },
  { src: jquery, alt: "jquery icon", id: "icon 5" },
  { src: react, alt: "react icon", id: "icon 6" },
  { src: redux, alt: "redux icon", id: "icon 7" },
  { src: sass, alt: "sass icon", id: "icon 8" },
  { src: webpack, alt: "webpack icon", id: "icon 9" },
];

const renderList = (items) => {
  return items.map(item =>
    <li className="diamond__item" key={item.id}>
      <img src={item.src} className="diamond__item__icon" alt={item.alt} />
    </li>
  )
};

const DiamondGrid = (props) => {
  return (
    <section className="diamond">
      <ul className="diamond__wrap">
        {
          renderList(icons)
        }
      </ul>
    </section>
  )
};

DiamondGrid.propTypes = {

};

export default DiamondGrid;
