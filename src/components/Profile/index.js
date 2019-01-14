import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
// import PictureProfile from '../../assets/images/mario_profile.jpg';
import Button from '../Button';

const Profile = ({
  onSubmit,
  avatar,
  description,
  tag,
  firstname,
  name,
}) => (
  <div className="profilePage">
    <div className="profile">
      <div className="yourProfile">Mon profil:</div>
      <form onSubmit={onSubmit} className="formulaire">
        <div className="topProfile">
          <img src={null} alt="imageProfil" className={avatar} />
          <div className="description">
            <textarea className="descriptionBox" cols="40" rows="7" placeholder="Ma description" value={description}>
              {description}
            </textarea>
          </div>
        </div>
        <div className="bottomProfile">
          <div className="userInfo">
            <div className="firstname">
              <input type="text" className="firstnameInput" value={firstname} />
            </div>
            <div className="username">
              <input type="text" className="usernameInput" value={name} />
            </div>
          </div>
          <div className="tags">
            <textarea id="tagsBox" cols="30" rows="10" placeholder="Mes tags" value={tag}>
              {tag}
            </textarea>
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
  avatar: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Profile;
