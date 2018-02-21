import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuActions from 'modules/menu/actions';
import * as fetchActions from 'modules/fetchContent/actions';
import PageWrap from 'components/PageWrap';
import Loading from 'components/Loading';
import FlexWrap from 'components/FlexWrap';
import BoxWithText from 'components/BoxWithText';
import Image from 'components/Image';
import DiamondGrid from 'components/DiamondGrid';
import TransitionPlaceholder from 'components/TransitionPlaceholder';

const mapStateToProps = ({ menu, content }) => ({
  menuState: menu,
  contentState: content,
});

const mapDispatchToProps = (dispatch) => ({
  menu: bindActionCreators(menuActions, dispatch),
  content: bindActionCreators(fetchActions, dispatch),
});

class Experience extends Component {

  componentWillMount() {
    const currentPageName = location.pathname.split('/')[ 1 ];
    this.props.content.fetchContent(currentPageName);
    this.currentPageName = currentPageName;
  }

  componentDidMount() {
    setTimeout(() => this.props.menu.menuClosed(), 1800)
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
              <FlexWrap>
                <BoxWithText
                  shape={'bottom-right'}
                  reverse={false}
                  align={'left'}
                  hasButton={true}
                  withShape={true}
                  hideOnMobie={false}
                  header={content.fields.skillsHeader}
                  paragraph={content.fields.skillsParagraph}
                  button={content.fields.skillsButton}
                />
                <Image
                  hideOnMobie={false}
                  imageId={content.fields.skillsImage.sys.id}
                  classType="box"
                />
                <Image
                  hideOnMobie={true}
                  imageId={content.fields.socialImage.sys.id}
                  classType="box"
                />
                <BoxWithText
                  shape={'top-left'}
                  reverse={true}
                  align={'right'}
                  withShape={true}
                  hasButton={true}
                  hideOnMobie={true}
                  header={content.fields.socialHeader}
                  paragraph={content.fields.socialParagraph}
                  button={content.fields.socialButton}
                />
                <DiamondGrid />
              </FlexWrap>
          :
          <Loading />
        }
      </PageWrap>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Experience);
