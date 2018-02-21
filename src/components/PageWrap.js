/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = ({ menu }) => ({
  menu: menu
});

class PageWrap extends Component {

  render() {
    return (
      <div className={this.props.menu.isOpen ? 'active page' : 'page'}>
        <div className={this.props.menu.isOpen ? 'overlay page__main' : 'page__main'}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(PageWrap);
