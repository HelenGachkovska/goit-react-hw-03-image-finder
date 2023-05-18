import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar/index';
import ImageGallery from './ImageGallery/index';
import ImageInfo from './ImageInfo/index';

export class App extends Component {
  state = {
    searchValue: '',
  };

  handleFormSubmit = searchValue => {
    this.setState({ searchValue });
  };

  render() {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageInfo searchValue={this.state.searchValue} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
