import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const SearchBar = ({ onclicktype }) => (
  <div className="wrapSearchBar">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossOrigin="anonymous" />
    <input type="text" className="searchTerm" placeholder="Quel événement recherches tu?" />
    <button onClick={onclicktype} type="button" className="searchButton">
      <i className="fa fa-search" />
    </button>
  </div>
);

SearchBar.propTypes = {
  onclicktype: PropTypes.string.isRequired,
};

export default SearchBar;
