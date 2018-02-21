import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CaruselSlide from 'components/CaruselSlide';
import CaruselIndicator from 'components/CaruselIndicator';

class Carusel extends Component {
  constructor() {
    super();
    this.state = {
      currentSlide: 0,
      transitionTime: 10000,
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.selectedSlide = this.selectedSlide.bind(this);
  }

  componentDidMount() {
    this.props.automatedTransition ?
      this.interval = setInterval(() => this.nextSlide(), this.state.transitionTime)
    :
      null
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  nextSlide() {
    let currentSlide = this.state.currentSlide;
    const slidesLength = this.props.slidesContent.length;

    currentSlide++;
    currentSlide >= slidesLength ? currentSlide = 0 : null;
    this.setState({
      currentSlide: currentSlide
    });
  }

  prevSlide() {
    let currentSlide = this.state.currentSlide;
    const slidesLength = this.props.slidesContent.length;

    --currentSlide;
    currentSlide < 0 ? currentSlide = slidesLength - 1 : null;
    this.setState({
      currentSlide: currentSlide
    })
  }

  selectedSlide(e) {
    const selected = parseInt(e.target.getAttribute('data-slide'));
    this.setState({
      currentSlide: selected
    })
  }

  render() {

    const renderSlides = (items) => {
      return items.map((item) =>
        <CaruselSlide
          key={item.id}
          renderedSlideId={item.id}
          currentSlide={this.state.currentSlide}
          onTouchStart={this.nextSlide}
          content={item.content}
          fullWidth={item.fullWidth}
        />
      )
    }

    const renderIndicators = (items) => {
      return items.map((item) =>
        <CaruselIndicator
          key={item.id}
          renderedSlideId={item.id}
          currentSlide={this.state.currentSlide}
          slide={item.id}
          onClick={this.selectedSlide}
        />
      )
    }

    return (
      <section className={this.props.fullWidth ? 'carusel carusel__page' : 'box carusel'}>
        <div className={this.props.fullWidth ? 'carusel__wrap--page' : 'carusel__wrap'}>
          <ul className="carusel__list">
            {
              this.props.slidesContent ?
                renderSlides(this.props.slidesContent)
              :
               null
            }
          </ul>
        </div>
        {
          this.props.hasButtons ?
            <div className="carusel__buttons">
              <a className="carusel__buttons__left" onClick={this.prevSlide}>
                <i className="fa fa-chevron-left" aria-hidden="true" />
              </a>
              <a className="carusel__buttons__right" onClick={this.nextSlide}>
                <i className="fa fa-chevron-right" aria-hidden="true" />
              </a>
            </div>
          :
            null
        }
        {
          this.props.hasIndicators ?
            <div className="carusel__indicators">
              {
                this.props.slidesContent ?
                  renderIndicators(this.props.slidesContent)
                :
                  null
              }
            </div>
          :
            null
        }
      </section>
    );
  }
}

export default Carusel;
