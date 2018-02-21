import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
//Pages
import Contact from 'containers/Contact';
import Home from 'containers/Home';
import ErrorPage from 'containers/Error';
import Experience from 'containers/Experience';
import Example from 'containers/Example';
//Layout
import Menu from 'components/Menu';
import Head from 'components/Head';


const Layout = ({ location }) => {
  const currentKey = location.pathname.split('/')[ 1 ] || '/';
  const timeout = { enter: 1500, exit: 1500 };

  return (
    <div id="main-page">
      <Head page={currentKey} />
      <Menu />
      <TransitionGroup component="main" id="page-wrap">
        <CSSTransition key={currentKey} timeout={timeout} classNames="transition" appear>
          <Switch key={currentKey} location={location}>
            <Route path="/" component={Home} exact />
            <Route path="/Experience" component={Experience} exact />
            <Route path="/Example" component={Example} exact />
            <Route path="/Contact" component={Contact} exact />
            <Route component={ErrorPage} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

Layout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(Layout);
