import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Wrapper from '../src/helpers/Wrapper';
import '../styles/profilePage.scss';
import ProfileGet from '../src/components/Profile';

class Profile extends React.Component {
  static propTypes = {
    profile: PropTypes.instanceOf(Object).isRequired,
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
        <ProfileGet
          profile={this.profile}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ profile }) => ({ profile: profile.data });

export default Wrapper(connect(mapStateToProps, null)(Profile));
