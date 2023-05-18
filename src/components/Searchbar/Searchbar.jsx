import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchHeader, SearchForm, SearchFormButton, SearchFormInput, SearchFormButtonLabel } from './styled';
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
      toast.info('Please, enter a word to search for.');
      return;
    }
    this.props.onSubmit(this.state.searchValue);
    //   this.setState({ searchValue: '' });
  };

  render() {
    return (
      <SearchHeader className="searchbar">
        <SearchForm className="form" onSubmit={this.hanlerSubmitForm}>
          <SearchFormButton type="submit" className="button">
            <SearchFormButtonLabel className="button-label">Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            className="input"
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
