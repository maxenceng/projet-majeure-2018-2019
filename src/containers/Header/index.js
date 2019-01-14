import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions, { actionPropTypes } from '../../actions';
import TopFrame from '../../components/TopFrame';

class Header extends React.Component {
  static propTypes = {
    actions: actionPropTypes.isRequired,
    connectionStatus: PropTypes.bool,
    profile: PropTypes.arrayOf(PropTypes.shape({
      PROFILE_AVATAR: PropTypes.string.isRequired,
      PROFILE_DESC: PropTypes.string.isRequired,
      TAG_TEXT: PropTypes.string.isRequired,
      USER_FIRSTNAME: PropTypes.string.isRequired,
      USER_NAME: PropTypes.string.isRequired,
    })),
  }

  static defaultProps = {
    connectionStatus: false,
    profile: [],
  }

  componentWillMount() {
    const { actions: { getProfileAction } } = this.props;
    if (process.browser) {
      getProfileAction();
    }
  }

  componentWillReceiveProps(newProps) {
    const { profile, actions: { connectionStatusAction } } = this.props;
    const { profile: newProfile } = newProps;
    // If the condition is satisfied, then displays the user as connected
    if (newProfile.length !== profile.length && newProfile.length !== 0) {
      connectionStatusAction(true);
    }
  }

  render() {
    const { connectionStatus } = this.props;
    return <TopFrame isConnected={connectionStatus} />;
  }
}

const mapStateToProps = ({ profile, connectionStatus }) => ({
  profile: profile.data.profile,
  connectionStatus,
});

export default connect(mapStateToProps, actions)(Header);
