import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Router from 'next/router';
import actions, { actionPropTypes } from '../src/actions';
import '../styles/profilePage.scss';
import ProfileGet from '../src/components/Profile';

class Profile extends React.Component {
  static propTypes = {
    actions: actionPropTypes.isRequired,
    profile: PropTypes.instanceOf(Object).isRequired,
  }

  componentWillMount() {
    const { actions: { getProfileAction } } = this.props;
    getProfileAction();
  }

  componentWillReceiveProps(newProps) {
    const { profile } = this.props;
    const { profile: newProfile } = newProps;
    console.log('1');
    console.log(newProfile);
    console.log('2');
    console.log(profile);
    if (newProfile.length !== profile.length) {
      this.getProfile(newProfile);
    }
  }

  getProfile = (newProfile) => {
    if (!newProfile) {
      return {
        PROFILE_AVATAR: '',
        PROFILE_DESC: '',
        tags: [],
        USER_FIRSTNAME: '',
        USER_NAME: '',
      };
    }
    const {
      PROFILE_AVATAR,
      PROFILE_DESC,
      tags,
      USER_FIRSTNAME,
      USER_NAME,
    } = newProfile;
    return {
      PROFILE_AVATAR,
      PROFILE_DESC,
      tags,
      USER_FIRSTNAME,
      USER_NAME,
    };
  }

  onChange = name => ({ target: { value } }) => this.setState({ [name]: value });

  get profile() {
    const { profile: { profile } } = this.props;
    if (!profile) {
      return {
        PROFILE_AVATAR: '',
        PROFILE_DESC: '',
        USER_FIRSTNAME: '',
        USER_NAME: '',
        tags: [],
      };
    }
    const {
      PROFILE_AVATAR,
      PROFILE_DESC,
      USER_FIRSTNAME,
      USER_NAME,
      tags,
    } = profile[0];
    return {
      PROFILE_AVATAR,
      PROFILE_DESC,
      USER_FIRSTNAME,
      USER_NAME,
      tags,
    };
  }

  onCLickEditProfile = () => {
    Router.push('/profilePage');
  }

  render() {
    return (
      <div>
        <ProfileGet
          profile={this.profile}
          onChange={this.onChange}
          onCLickEditProfile={this.onCLickEditProfile}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ profile }) => ({ profile: profile.data });

export default (connect(mapStateToProps, actions)(Profile));
