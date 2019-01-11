import React from 'react';
import './index.scss';
import PictureProfile from '../../assets/images/mario_profile.jpg';
import Button from '../LinkButton';

const Profile = () => (
  <div className="profilePage">
    <div className="profile">
      <div className="yourProfile">Mon profil:</div>
      <div className="topProfile">
        <img src={PictureProfile} alt="imageProfil" className="pictureProfile" />
        <div className="description">
          <textarea className="descriptionBox" cols="40" rows="7" placeholder="Ma description" />
        </div>
      </div>
      <div className="bottomProfile">
        <div className="userInfo">
          <div className="textbox">
            <input type="text" className="inputUsername" placeholder="Username" />
          </div>
          <div className="textbox">
            <input type="text" className="inputFirstname" placeholder="Firstname" />
          </div>
          <div className="textbox">
            <input type="text" className="inputLastname" placeholder="Lastname" />
          </div>
        </div>
        <div className="tags">
          <textarea id="tagsBox" cols="30" rows="10" placeholder="Mes tags" />
        </div>
      </div>
      <div className="buttonSave">
        <Button content="Enregistrer" route="/about" />
      </div>
    </div>
  </div>
);

export default Profile;
