import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuActions from 'modules/menu/actions';
import * as introActions from 'modules/intro/actions';
import * as fetchActions from 'modules/fetchContent/actions';
import PageWrap from 'components/PageWrap';
import FlexWrap from 'components/FlexWrap';
import Intro from 'components/Intro';
import Loading from 'components/Loading';
import BoxWithText from 'components/BoxWithText';
import Carusel from 'components/Carusel';
import Logo from 'components/Logo';
import CaruselContent from 'data/SliderSmall';
import TransitionPlaceholder from 'components/TransitionPlaceholder';

const mapStateToProps = ({ menu, intro, content }) => ({
  menuState: menu,
  introState: intro,
  contentState: content
});

const mapDispatchToProps = (dispatch) => ({
  menu: bindActionCreators(menuActions, dispatch),
  intro: bindActionCreators(introActions, dispatch),
  content: bindActionCreators(fetchActions, dispatch),
});

class Home extends Component {

  componentWillMount() {
    const currentPageName = this.props.history.location.pathname === '/' ? 'homepage' : null;
    this.props.content.fetchContent(currentPageName);
    this.currentPageName = currentPageName;
  }

  componentDidMount() {
    setTimeout(() => this.props.menu.menuClosed(), 1800)
  }

  componentWillUnmount() {
    this.props.intro.disableIntro();
  }

  handleIntro() {
    this.props.intro.disableIntro();
  }

  render() {
    const currentPageName = this.currentPageName;
    let content = this.props.contentState.content;

    return (
      <PageWrap>
        {
          this.props.contentState.contentLoaded && content.fields.page === currentPageName ?
            this.props.introState.showIntro ?
              <Intro
                hideIntro={this.handleIntro.bind(this)}
              />
            :
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
                    align={"left"}
                    withShape={true}
                    hasButton={true}
                    hideOnMobie={false}
                    header={content.fields.introductionHeader}
                    paragraph={content.fields.introductionParagraph}
                    button={content.fields.introductionButton}
                  />
                  <BoxWithText
                    shape={'bottom-left'}
                    reverse={false}
                    align={"right"}
                    withShape={true}
                    hasButton={true}
                    hideOnMobie={true}
                    header={content.fields.backgroundHeader}
                    paragraph={content.fields.backgroundParagraph}
                    button={content.fields.backgroundButton}
                  />
                  <Logo />
                  <Carusel
                    fullWidth={false}
                    hasButtons={true}
                    hasIndicators={true}
                    slidesContent={content.fields.sliderSmall}
                    automatedTransition={true}
                  />
              </FlexWrap>
          :
            <Loading />
        }
      </PageWrap>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
