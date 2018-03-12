import React, { Component } from 'react';
import RedirectButton from 'components/RedirectButton';

class CaruselSlide extends Component {

  render() {
    const SlideSmall = () => {
      return (
        <div className="slideSmall">
          <i className={`slideSmall__icon ${this.props.content.icon}`} aria-hidden="true" />
          <h1 className="slideSmall__header">{this.props.content.header}</h1>
          <article className="slideSmall__paragraph">
            {this.props.content.paragraph}
          </article>
          <RedirectButton
            {...this.props.content.button}
            className={'slideSmall'}
          />
        </div>
      )
    };
    const SlideBig = () => {
      return (
        <div className="slideBig">
          <h1 className="slideBig__header">{this.props.content.header}</h1>
          <div className="slideBig__wrap">
            <article className="slideBig__wrap__paragraph">
              {this.props.content.paragraph}
            </article>
            <div className="slideBig__wrap__buttons">
              <button
                className="slideBig__wrap__buttons__btn"
                onClick={this.props.nextSlide}>
                  See more
              </button>
              {
                this.props.content.button ?
                  <RedirectButton
                    {...this.props.content.button}
                    className={'slideBig__wrap__buttons'}
                  />
                :
                 null
              }
            </div>
          </div>
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
      </li>
    );
  }
}


export default CaruselSlide;
