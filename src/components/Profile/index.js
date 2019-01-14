import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
// import PictureProfile from '../../assets/images/mario_profile.jpg';
import Button from '../Button';

const Profile = ({
  onSubmit,
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
      <div className="yourProfile">Mon profil:</div>
      <form onSubmit={onSubmit} className="formulaire">
        <div className="topProfile">
          <img src={PROFILE_AVATAR} alt="imageProfil" className={PROFILE_AVATAR} />
          <div className="description">
            <textarea className="descriptionBox" cols="40" rows="7" placeholder="Ma description" value={PROFILE_DESC} />
          </div>
        </div>
        <div className="bottomProfile">
          <div className="userInfo">
            <div className="firstname">
              <input type="text" className="firstnameInput" value={USER_FIRSTNAME} />
            </div>
            <div className="username">
              <input type="text" className="usernameInput" value={USER_NAME} />
            </div>
          </div>
          <div className="tags">
            <textarea id="tagsBox" cols="30" rows="10" placeholder="Mes tags" value={TAG_TEXT} />
          </div>
        </div>
        <div className="buttonSave">
          <Button type="submit">hello</Button>
        </div>
      </form>
    </div>
  </div>
);

Profile.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    PROFILE_AVATAR: PropTypes.string.isRequired,
    PROFILE_DESC: PropTypes.string.isRequired,
    TAG_TEXT: PropTypes.string.isRequired,
    USER_FIRSTNAME: PropTypes.string.isRequired,
    USER_NAME: PropTypes.string.isRequired,
  }).isRequired,
};

export default Profile;
