import React from 'react';
import { connect } from 'react-redux';
import SearchComponent from '../../components/SearchBar';
import actions, { actionPropTypes } from '../../actions';

class SearchBar extends React.Component {
  static propTypes = {
    actions: actionPropTypes.isRequired,
  };


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
