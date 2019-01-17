import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import Button from '../Button';

const Profile = ({
  onCLickEditProfile,
  profile: {
    PROFILE_AVATAR,
    PROFILE_DESC,
    TAG_TEXT,
    USER_FIRSTNAME,
    USER_NAME,
  },
}) => (
  <div className="profilePage">
    <div className="profile">
      <h2 className="yourProfile">My Profile:</h2>
      <div className="topProfile">
        <div className="profilePart image">
          <img src={PROFILE_AVATAR} alt="pp" className="profilePart avatar" />
        </div>
        <div className="profilePart description">
          <h4>Description:</h4>
          <p>{PROFILE_DESC}</p>
        </div>
      </div>
      <div className="bottomProfile">
        <div className="profilePart userInfo">
          <div className="firstname">
            <h4>Firstname:</h4>
            <p>{USER_FIRSTNAME}</p>
          </div>
          <div className="lastname">
            <h4>Lastname:</h4>
            <p>{USER_NAME}</p>
          </div>
        </div>
        <div className="profilePart tags">
          <h4>My Tags:</h4>
          <p>{TAG_TEXT}</p>
        </div>
      </div>
      <div className="profilePart btnEdit">
        <h4>Edit my Profile:</h4>
        <div className="buttonEdit">
          <Button onClick={onCLickEditProfile}>Edit Profile</Button>
        </div>
      </div>
    </div>
  </div>
);

Profile.propTypes = {
  onCLickEditProfile: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    PROFILE_AVATAR: PropTypes.string.isRequired,
    PROFILE_DESC: PropTypes.string.isRequired,
    TAG_TEXT: PropTypes.string.isRequired,
    USER_FIRSTNAME: PropTypes.string.isRequired,
    USER_NAME: PropTypes.string.isRequired,
  }).isRequired,
};

export default Profile;
