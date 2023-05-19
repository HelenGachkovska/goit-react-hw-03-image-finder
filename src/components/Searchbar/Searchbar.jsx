import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImSearch } from 'react-icons/im';
import {
  SearchHeader,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './styled';
// import Notiflix from 'notiflix';

class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  handleChangeValue = e => {
    this.setState({ searchValue: e.currentTarget.value.toLowerCase() });
  };

  hanlerSubmitForm = e => {
    e.preventDefault();
    if (this.state.searchValue.trim() === '') {
      toast.error('Please, enter a word to search for.', {
        position: 'top-right',
        theme: 'light',
      });
      return;
    }
    this.props.onSubmit(this.state.searchValue);
    this.setState({ searchValue: '' });
  };

  render() {
    return (
      <SearchHeader>
        <SearchForm onSubmit={this.hanlerSubmitForm}>
          <SearchFormButton type="submit">
            <ImSearch size={25} />
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchValue}
            onChange={this.handleChangeValue}
          />
        </SearchForm>
      </SearchHeader>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
