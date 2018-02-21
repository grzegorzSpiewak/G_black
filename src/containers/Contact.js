import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuActions from 'modules/menu/actions';
import * as fetchActions from 'modules/fetchContent/actions';
import PageWrap from 'components/PageWrap';
import Intro from 'components/Intro';
import Loading from 'components/Loading';

const mapStateToProps = ({ menu, content }) => ({
  menuState: menu,
  contentState: content
});

const mapDispatchToProps = (dispatch) => ({
  menu: bindActionCreators(menuActions, dispatch),
  content: bindActionCreators(fetchActions, dispatch),
});

class Contact extends Component {

  componentWillReciveProps() {
    const contentType = location.pathname.split('/')[ 1 ];
    this.props.content.fetchContent(contentType);
  }

  componentDidMount() {
    setTimeout(() => this.props.menu.menuClosed(), 2000)
  }

  render() {
    return (
      <PageWrap>
        <a href="mailto:grzegorz.spiewak1986@gmail.com">Contact us!</a>
      </PageWrap>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
