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

  state = {
    idUser: 'a3a1b630-7343-4ed9-a2ac-770274a45b7e',
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { actions: { getProfile } } = this.props;
    const {
      idUser,
    } = this.state;
    getProfile({
      idUser,
    });
  }


  onChange = name => ({ target: { value } }) => this.setState({ [name]: value });

  render() {
    const { profile } = this.props;
    return (
      <div>
        <ProfilePage
          onSubmit={this.onSubmit}
          avatar={profile.profile && profile.profile[0].PROFILE_AVATAR}
          description={profile.profile && profile.profile[0].PROFILE_DESC}
          tag={profile.profile && profile.profile[0].TAG_TEXT}
          firstname={profile.profile && profile.profile[0].USER_FIRSTNAME}
          name={profile.profile && profile.profile[0].USER_NAME}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ profile }) => ({ profile: profile.data });

export default Wrapper(connect(mapStateToProps, actions)(Profile));
