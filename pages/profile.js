import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Wrapper from '../src/helpers/Wrapper';
import '../styles/profilePage.scss';
import actions, { actionPropTypes } from '../src/actions';
import ProfilePage from '../src/components/Profile';

class Profile extends React.Component {
  static propTypes = {
    actions: actionPropTypes.isRequired,
    profile: PropTypes.instanceOf(Object).isRequired,
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { actions: { getProfileAction } } = this.props;
    getProfileAction();
  }


  onChange = name => ({ target: { value } }) => this.setState({ [name]: value });

  get profile() {
    const { profile: { profile } } = this.props;
    if (!profile) {
      return {
        PROFILE_AVATAR: '',
        PROFILE_DESC: '',
        TAG_TEXT: '',
        USER_FIRSTNAME: '',
        USER_NAME: '',
      };
    }
    const {
      PROFILE_AVATAR,
      PROFILE_DESC,
      TAG_TEXT,
      USER_FIRSTNAME,
      USER_NAME,
    } = profile[0];
    return {
      PROFILE_AVATAR,
      PROFILE_DESC,
      TAG_TEXT,
      USER_FIRSTNAME,
      USER_NAME,
    };
  }

  render() {
    return (
      <div>
        <ProfilePage
          onSubmit={this.onSubmit}
          profile={this.profile}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ profile }) => ({ profile: profile.data });

export default Wrapper(connect(mapStateToProps, actions)(Profile));
