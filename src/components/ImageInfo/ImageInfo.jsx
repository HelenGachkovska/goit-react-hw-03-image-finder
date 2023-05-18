import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorMassage from 'components/ErrorMassage/index';
import { fetchImage } from 'servise/imgApi';
import ImageGallery from 'components/ImageGallery/index';
import Loader from 'components/Loader/index';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class ImageInfo extends Component {
  state = {
    error: null,
    status: Status.IDLE,
    images: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const prevValue = prevProps.searchValue;
    const nextValue = this.props.searchValue;

    if (prevValue !== nextValue) {
      this.setState({ status: Status.PENDING });

      fetchImage(nextValue)
        .then(images =>
          this.setState({ images: images.hits, status: Status.RESOLVED })
        )
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
  }

  render() {
    const { images, error, status } = this.state;

    if (status === 'idle') {
      return;
    }

    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <ErrorMassage massage={error.massage} />;
    }

    if (images.length === 0) {
      return <ErrorMassage massage={`Nothing was found for your request.`} />;
    }

    if (status === 'resolved') {
      return <ImageGallery images={this.state.images} />;
    }
  }
}

export default ImageInfo;
