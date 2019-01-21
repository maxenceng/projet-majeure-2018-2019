import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

/*
  Ce composant React permet d'afficher la SearchBar est de récupèrer le terme à filter pour
  l'affichage des événements.
  Ce composant est appelé par: 'SearchBar' qui lui envoit la fonction handleReseachButton qui
  permet de déclencher l'action de recherche d'événement.
*/
export default class SearchBar extends React.Component {
  static propTypes = {
    onclicktype: PropTypes.func.isRequired,
  }

  state = {
    value: '',
  }

  // Cette méthode met à jour la valeur 'value' qui sera envoyé dans la méthode getFilter
  onChange = ({ target: { value } }) => {
    this.setState({ value });
  }

  /*
    Cette méthode est déclenchée par le bouton de recherche et permet de déclencher
    l'action qui va effectuer l'appel réseau.
    *onclick: méthode de SearchBar qui prend en paramètre le mot filtre.
  */
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
