import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuActions from 'modules/menu/actions';
import * as fetchActions from 'modules/fetchContent/actions';
import PageWrap from 'components/PageWrap';
import FlexWrap from 'components/FlexWrap';
import Loading from 'components/Loading';
import Carusel from 'components/Carusel';
import Header from 'components/Header';
import TransitionPlaceholder from 'components/TransitionPlaceholder';
import CaruselContent from 'data/SliderBig';


const mapStateToProps = ({ menu, content }) => ({
  menuState: menu,
  contentState: content
});

const mapDispatchToProps = (dispatch) => ({
  menu: bindActionCreators(menuActions, dispatch),
  content: bindActionCreators(fetchActions, dispatch),
});

class Example extends Component {

  componentWillMount() {
    const currentPageName = location.pathname.split('/')[ 1 ];
    this.props.content.fetchContent(currentPageName);
    this.currentPageName = currentPageName;
  }

  render() {
    let content = this.props.contentState.content;
    const currenPageName = this.currentPageName;

    return (
      <PageWrap>
        {
          this.props.contentState.contentLoaded && content.fields.page === currenPageName ?
            this.props.menuState.isOpen ?
              <TransitionPlaceholder
                icon={content.fields.placeholderIcon}
                text={content.fields.placeholderText}
              />
            :
              <div>
                <Header
                  imageId={content.fields.headerImage.sys.id}
                />
                <Carusel
                  fullWidth={true}
                  hasButtons={false}
                  hasIndicators={true}
                  slidesContent={content.fields.sliderBig}
                  automatedTransition={false}
                />
              </div>
          :
            <Loading />
        }
      </PageWrap>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Example);
