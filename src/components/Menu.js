/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuActions from 'modules/menu/actions';
import HamburgerIcon from 'components/HamburgerIcon';
import Navigation from 'components/Navigation';

const mapStateToProps = ({ menu }) => ({
  menu: menu
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(menuActions, dispatch);
};

class Menu extends Component {

  render() {
    return (
      <div className="menu">
        <HamburgerIcon
          isOpen={this.props.menu.isOpen}
          forOpen={this.props.menuOpen.bind(this)}
        />
        <Navigation
          isOpen={this.props.menu.isOpen}
          forClose={this.props.menuClosed.bind(this)}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
