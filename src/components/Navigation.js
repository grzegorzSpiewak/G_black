import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'components/Image';
import Logo from 'styles/images/favicon.jpeg';

const links = [
  { redirect: '/', anchor: 'home', icon: 'fa fa-home', id: 'links_01' },
  { redirect: '/experience', anchor: 'about', icon: 'fa fa-book', id: 'link_02' },
  { redirect: '/example', anchor: 'example', icon: 'fa fa-pencil', id: 'link_03' },
  { redirect: '/contact', anchor: 'contact', icon: 'fa fa-phone', id: 'link_04' }
];

const renderMenu = (items) => {
  return items.map(item =>
    <Link to={item.redirect} className="nav__list__item" key={item.id}>
      <i className={`nav__list__item__icon ${item.icon}`} aria-hidden="true" />
      <p className="nav__list__item__anchor">{item.anchor}</p>
    </Link>
  )
}

const Navigation = (props) => {
  return (
    <aside className={props.isOpen ? 'nav__active nav' : 'nav'}>
      <div className="nav__close">
        <a className="nav__close__btn" onClick={props.forClose}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </a>
      </div>
      <nav className="nav__wrap">
        <ul className="nav__list">
          {renderMenu(links)}
        </ul>
      </nav>
      <div className="nav__logo">
        
      </div>
    </aside>
  );
};

export default Navigation;
