import React, { Component } from 'react';
import axios from 'axios';
import { API_BASE_URL, API_SPACE_ID, API_TOKEN } from 'config/client';
import Loading from 'components/Loading';

class BoxImage extends Component {
  constructor() {
    super();
    this.state = {
      imagePath: '',
      imageAlt: '',
      error: '',
      imageLoaded: false
    };
  }

  componentDidMount() {
    const assetId = this.props.imageId ? this.props.imageId : false;
    assetId ? this.fetchAssets(assetId) : null;
  }

  fetchAssets(id) {
    axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/assets/${id}?access_token=${API_TOKEN}`).then((images) => {
      this.setState({
        imagePath: images.data.fields.file.url,
        imagesAlt: images.data.fields.description,
        imageLoaded: true
      })
    }).catch((error) => {
      this.setState({
        error: true,
        imageLoaded: false
      })
    });
  }

  render() {
    return (
      <section
        className={
          this.props.hideOnMobie ?
            `${this.props.classType}__image--hide`
          :
            `${this.props.classType}__image`
        }
      >
        {
          this.state.imageLoaded ?
            <img
              src={this.state.imagePath}
              alt={this.state.imageAlt}
              className={
                this.state.imageLoaded ?
                  `${this.props.classType}__image__pic ${this.props.classType}__image__pic__loaded`
                :
                  `${this.props.classType}__image__pic`
              }
            />
          :
            <Loading />
        }
      </section>
    );
  }
}

export default BoxImage;
