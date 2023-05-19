import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorMassage from 'components/ErrorMassage/index';
import { fetchImage } from 'servise/imgApi';
import ImageGallery from 'components/ImageGallery/index';
import Loader from 'components/Loader/index';
import Button from 'components/Button/index';
import Modal from 'components/Modal/index';

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
    page: 1,
    totalPages: 0,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevValue = prevProps.searchValue;
    const nextValue = this.props.searchValue;


    if (prevValue !== nextValue || prevState.page !== this.state.page) {
      this.setState({ status: Status.PENDING });

      if (this.state.error) {
        this.setState({ error: null });
      }

      fetchImage(nextValue, this.state.page)
        .then(images => {
          this.setState({
            images:
              this.state.page === 1
                ? images.hits
                : [...prevState.images, ...images.hits],
            status: Status.RESOLVED,
            totalPages: Math.floor(images.totalHits / 12),
          });
        })
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  setModalData = modalData => {
    this.setState({ modalData, showModal: true });
  };

  handleModalClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { images, error, status, page, totalPages, showModal, modalData } =
      this.state;

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
      return (
        <>
          <ImageGallery
            images={this.state.images}
            onImageClick={this.setModalData}
          />
          {images.length > 0 && status !== 'pending' && page <= totalPages && (
            <Button onClick={this.handleLoadMore} />
          )}
          {showModal && (
            <Modal modalData={modalData} onModalClose={this.handleModalClose} />
          )}
        </>
      );
    }
  }
}

ImageInfo.propTypes = {
  searchValue: PropTypes.string.isRequired,
};

export default ImageInfo;
