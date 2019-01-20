import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

export default class SearchBar extends React.Component {
  static propTypes = {
    onclicktype: PropTypes.func.isRequired,
  }

  state = {
    value: '',
  }

  onChange = ({ target: { value } }) => {
    this.setState({ value });
  }

  getFilter = (event) => {
    event.preventDefault();
    const { onclicktype } = this.props;
    const { value } = this.state;
    onclicktype(value);
  }

  render() {
    const { value } = this.state;
    return (
      <div className="wrapSearchBar">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossOrigin="anonymous" />
        <input type="text" onChange={this.onChange} className="searchTerm" placeholder="Quel événement recherches tu?" value={value} />
        <button type="button" onClick={this.getFilter} className="searchButton">
          <i className="fa fa-search" />
        </button>
      </div>
    );
  }
}
