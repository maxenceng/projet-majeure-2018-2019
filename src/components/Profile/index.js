import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import Button from '../Button';

const Profile = ({
  onCLickEditProfile,
  profile: {
    PROFILE_AVATAR,
    PROFILE_DESC,
    tags,
    USER_FIRSTNAME,
    USER_NAME,
  },
}) => (
  <div className="profilePage">
    <div className="profile">
      <h2 className="yourProfile">Mon Profil:</h2>
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
            <h4>Prénom:</h4>
            <p>{USER_FIRSTNAME}</p>
          </div>
          <div className="lastname">
            <h4>Nom de Famille:</h4>
            <p>{USER_NAME}</p>
          </div>
        </div>
        <div className="profilePart tags">
          <h4>Mes Tags:</h4>
          <p>{typeof tags === 'string' ? tags : tags.join(' ')}</p>
        </div>
      </div>
      <div className="profilePart btnEdit">
        <div className="buttonEdit">
          <Button className="inverse event_participate" onClick={onCLickEditProfile}>Editer Profil</Button>
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
