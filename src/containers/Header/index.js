import React from 'react';
import { connect } from 'react-redux';
import actions, { actionPropTypes } from '../../actions';
import TopFrame from '../../components/TopFrame';

class Header extends React.Component {
  static propTypes = {
    actions: actionPropTypes.isRequired,
  }

  componentWillMount() {
    const { actions: { messageAction } } = this.props;
    console.log(messageAction);
  }

  render() {
    return <TopFrame />;
  }
}

export default connect(null, actions)(Header);
