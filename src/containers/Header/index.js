import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions, { actionPropTypes } from '../../actions';
import TopFrame from '../../components/TopFrame';

class Header extends React.Component {
  static propTypes = {
    actions: actionPropTypes.isRequired,
    auth: PropTypes.shape({
      message: PropTypes.string,
      token: PropTypes.string,
      idUser: PropTypes.string,
    }),
    connectionStatus: PropTypes.bool,
    profile: PropTypes.arrayOf(PropTypes.shape({
      PROFILE_AVATAR: PropTypes.string.isRequired,
      PROFILE_DESC: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(String).isRequired,
      USER_FIRSTNAME: PropTypes.string.isRequired,
      USER_NAME: PropTypes.string.isRequired,
    })),
  }

  static defaultProps = {
    auth: {
      message: '',
      token: '',
      idUser: '',
    },
    connectionStatus: false,
    profile: [],
  }

  componentWillMount() {
    const { profile, actions: { connectionStatusAction } } = this.props;
    if (profile.length !== 0) {
      connectionStatusAction(true);
    }
  }

  componentWillReceiveProps(newProps) {
    const { profile, actions: { connectionStatusAction }, auth } = this.props;
    const { profile: newProfile, auth: newAuth } = newProps;
    // If the condition is satisfied, then displays the user as connected
    if (
      (newProfile.length !== profile.length && newProfile.length !== 0)
      || newAuth.message !== auth.message
    ) {
      connectionStatusAction(true);
    }
  }

  onClickDeco = () => {
    const { actions: { connectionStatusAction } } = this.props;
    connectionStatusAction(false);
  };

  render() {
    const { connectionStatus } = this.props;
    return (
      <TopFrame
        isConnected={connectionStatus}
        onClickDeco={this.onClickDeco}
      />
    );
  }
}

const mapStateToProps = ({
  profile,
  connectionStatus,
  auth,
}) => ({
  profile: profile.data.profile,
  connectionStatus,
  auth: auth.data,
});

export default connect(mapStateToProps, actions)(Header);
