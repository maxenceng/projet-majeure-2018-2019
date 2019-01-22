import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Input from '../Input';
import TextArea from '../TextArea';
import './index.scss';

const ProfileSubmission = ({
  onChange,
  onSubmit,
  profile: {
    PROFILE_AVATAR,
    PROFILE_DESC,
    tags,
    USER_FIRSTNAME,
    USER_NAME,
  },
}) => (
  <div className="subForm">
    <form onSubmit={onSubmit} className="formulaire">
      <div className="profilePage">
        <div className="profile">
          <h2 className="yourProfile">Mon Profil:</h2>
          <div className="topProfile">
            <div className="profilePart image">
              <h4>Changer ma photo de profil:</h4>
              <img src={PROFILE_AVATAR} alt="pp" className="profilePart avatar" />
              <Input
                type="text"
                name="inputLinkPicture"
                value={PROFILE_AVATAR}
                placeholder="LinkPicture"
                onChange={onChange('PROFILE_AVATAR')}
              />
            </div>
            <div className="profilePart description">
              <h4>Description:</h4>
              <TextArea
                name="inputDescription"
                value={PROFILE_DESC}
                placeholder="description"
                onChange={onChange('PROFILE_DESC')}
              />
            </div>
          </div>
          <div className="bottomProfile">
            <div className="profilePart userInfo">
              <div className="firstname">
                <h4>Firstname:</h4>
                <Input
                  type="text"
                  name="inputFirstname"
                  value={USER_FIRSTNAME}
                  placeholder="Firstname"
                  onChange={onChange('USER_FIRSTNAME')}
                />
              </div>
              <div className="lastname">
                <h4>Lastname:</h4>
                <Input
                  key="lastname"
                  type="text"
                  name="inputLastname"
                  value={USER_NAME}
                  placeholder="Lastname"
                  onChange={onChange('USER_NAME')}
                />
              </div>
            </div>
            <div className="profilePart tags">
              <h4>My Tags:</h4>
              <TextArea
                key="tags"
                name="inputTags"
                value={typeof tags === 'string' ? tags : tags.join(' ')}
                placeholder="tags"
                onChange={onChange('tags')}
              />
            </div>
          </div>
          <div className="buttonSave">
            <Button type="submit" className="inverse event_participate">Envoyer</Button>
          </div>
        </div>
      </div>
    </form>
  </div>
);

ProfileSubmission.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    PROFILE_AVATAR: PropTypes.string.isRequired,
    PROFILE_DESC: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    USER_FIRSTNAME: PropTypes.string.isRequired,
    USER_NAME: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProfileSubmission;
