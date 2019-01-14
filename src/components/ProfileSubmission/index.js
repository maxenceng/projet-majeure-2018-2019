import React from 'react';
import PropTypes from 'prop-types';
import ButtonProfile from '../../containers/ButtonProfile';
import Input from '../Input';
import TextArea from '../TextArea';

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
              <Input
                key="linkPicture"
                type="text"
                name="inputLinkPicture"
                value={userInfo.linkPicture}
                placeholder="LinkPicture"
                onChange={onChange('linkPicture')}
              />
            </div>
            <div className="description">
              <TextArea
                key="description"
                name="inputDescription"
                value={userInfo.description}
                placeholder="description"
                onChange={onChange('description')}
              />
            </div>
          </div>
          <div className="bottomProfile">
            <div className="userInfo">
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
              <TextArea
                key="tags"
                name="inputTags"
                value={userInfo.tags}
                placeholder="tags"
                onChange={onChange('tags')}
              />
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
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    linkPicture: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProfileSubmission;
