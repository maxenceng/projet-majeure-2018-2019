import React from 'react';
import Wrapper from '../src/helpers/Wrapper';
import PictureProfile from '../src/assets/images/mario_profile.jpg';
import ButtonProfile from '../src/containers/ButtonProfile';
import '../styles/profilePage.scss';

const ProfilePage = () => (
  <div className="profilePage">
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
        <ButtonProfile description="description">BOB</ButtonProfile>
      </div>
    </div>
  </div>
);

export default Wrapper(ProfilePage);
