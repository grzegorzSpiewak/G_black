import React, { Component } from 'react';
import FlexWrap from 'components/FlexWrap';
import BoxWithText from 'components/BoxWithText';
import BoxWithImage from 'components/Image';
import Blocks from 'styles/images/desk.jpg';

class CaruselSlide extends Component {

  render() {
    const SlideSmall = () => {
      return (
        <h1>Render Small</h1>
      )
    };
    const SlideBig = () => {
      return (
        <div className="slide">
          <FlexWrap>
            <BoxWithText
              shape={'bottom-right'}
              reverse={false}
              align={'center'}
              hideOnMobie={false}
              withShape={false}
              hasButton={false}
              header={this.props.content.header}
              paragraph={this.props.content.paragraph}
            />
          </FlexWrap>
        </div>
      )
    };
    return (
      <li
        className={
          this.props.currentSlide === this.props.renderedSlideId ?
            'carusel__list__item carusel__list__item__active'
          :
            'carusel__list__item'
        }
        role="slider-info"
      >
      {
        this.props.fullWidth ?
          <SlideBig />
        :
          <SlideSmall />
      }
      {console.log(this.props)}
      </li>
    );
  }
}


export default CaruselSlide;
