import React from 'react';
import { connect } from 'react-redux';
import SearchComponent from '../../components/SearchBar';
import actions, { actionPropTypes } from '../../actions';

class SearchBar extends React.Component {
  static propTypes = {
    actions: actionPropTypes.isRequired,
  };


  handleResearchButton = () => {
    const { actions: { getEventByFilterAction } } = this.props;
    getEventByFilterAction();
  }

  render() {
    return (
      <SearchComponent onclicktype={this.handleResearchButton} />
    );
  }
}

export default connect(null, actions)(SearchBar);
