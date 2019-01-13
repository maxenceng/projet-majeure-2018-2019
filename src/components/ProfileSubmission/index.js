import React from 'react';
import PropTypes from 'prop-types';
import PictureProfile from '../../assets/images/mario_profile.jpg';
import ButtonProfile from '../../containers/ButtonProfile';
import Input from '../Input';

const ProfileSubmission = ({
  onChange,
  onSubmit,
  userInfo,
}) => (
  <div className="subPage">
    <div className="subForm">
      <form onSubmit={onSubmit} className="formulaire">
        <div className="profile">
          <div className="yourProfile">Mon profil:</div>
          <div className="topProfile">
            <div className="pic">
              <img src={PictureProfile} alt="imageProfil" className="pictureProfile" />
            </div>
            <div className="description">
              <textarea className="descriptionBox" cols="40" rows="7" placeholder="Ma description" />
            </div>
          </div>
          <div className="bottomProfile">
            <div className="userInfo">
              <div className="textbox">
                <Input
                  key="username"
                  type="text"
                  name="inputUsername"
                  value={userInfo.username}
                  placeholder="username"
                  onChange={onChange('username')}
                />
              </div>
              <div className="textbox">
                <Input
                  key="firstname"
                  type="text"
                  name="inputFirstname"
                  value={userInfo.firstname}
                  placeholder="Firstname"
                  onChange={onChange('firstname')}
                />
              </div>
              <div className="textbox">
                <Input
                  key="lastname"
                  type="text"
                  name="inputLastname"
                  value={userInfo.lastname}
                  placeholder="Lastname"
                  onChange={onChange('lastname')}
                />
              </div>
            </div>
            <div className="tags">
              <textarea id="tagsBox" cols="30" rows="10" placeholder="Mes tags" />
            </div>
          </div>
          <div className="buttonSave">
            <ButtonProfile type="submit" userInfo={userInfo}>Send</ButtonProfile>
          </div>
        </div>
      </form>
    </div>
  </div>
);

ProfileSubmission.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  userInfo: PropTypes.shape({
    description: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProfileSubmission;
