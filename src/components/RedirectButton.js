import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class RedirectButton extends Component {

  redirect(e) {
    e.preventDefault();
    this.props.history.push(this.props.redirect);
  }

  render() {
    return (
      <button
        onClick={this.redirect.bind(this)}
        className={`${this.props.className}__btn`}
        dangerouslySetInnerHTML={ {__html: this.props.anchor} }
      />
    )
  }
}

RedirectButton.propTypes = {

};

export default withRouter(RedirectButton);
