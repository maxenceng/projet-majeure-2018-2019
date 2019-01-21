import React from 'react';
import { connect } from 'react-redux';
import SearchComponent from '../../components/SearchBar';
import actions, { actionPropTypes } from '../../actions';

/*
  Composant React qui permet de réaliser une recherche ciblée des événements.
*/
class SearchBar extends React.Component {
  static propTypes = {
    actions: actionPropTypes.isRequired,
  };

  /*
    Cette méthode est déclenché par un 'onClick' qui déclenche une action
    getEventByFilterAction(): Cette méthode permet de chercher les événements
    à partir d'un terme et prends en paramètre le terme 'nameFilter'.
  */
  handleResearchButton = (nameFilter) => {
    const { actions: { getEventByFilterAction, getAllEventsAction } } = this.props;
    if (nameFilter) getEventByFilterAction(nameFilter);
    else {
      getAllEventsAction({
        date: null,
        location: 'Lyon',
      });
    }
  }

  render() {
    return (
      <SearchComponent onclicktype={this.handleResearchButton} />
    );
  }
}

export default connect(null, actions)(SearchBar);
