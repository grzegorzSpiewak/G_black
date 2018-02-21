import React from 'react';
import PropTypes from 'prop-types';
import RedirectButton from 'components/RedirectButton';

const BoxWithText = (props) => {
  return (
    <section className={props.hideOnMobie ? 'box box__hide' : props.align === 'center' ? 'box__full' : 'box'}>
      {
        props.reverse ?
        <div className={`information__reverse--${props.align}`}>
          {
            props.hasButton ?
              <RedirectButton
                className={'information'}
                {...props.button}  
              />
            :
              null
          }
          <div className="information__wrap">
            {
              props.withShape ? <div className={`information__wrap__shape--${props.shape}`} /> : null
            }
            <p className="information__wrap__content">
              {props.paragraph}
            </p>
          </div>
          <h1 className="information__header">{props.header}</h1>
        </div>
        :
        <div className={`information--${props.align}`}>
          <h1 className="information__header">{props.header}</h1>
          <div className="information__wrap">
            {
              props.withShape ? <div className={`information__wrap__shape--${props.shape}`} /> : null
            }
            <p className="information__wrap__content">
              {props.paragraph}
            </p>
          </div>
          {
            props.hasButton ?
              <RedirectButton
                className={'information'}
                {...props.button}
              />
            :
              null
          }
        </div>
      }
    </section>
  )
}

BoxWithText.propTypes = {

};

export default BoxWithText;
