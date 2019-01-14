import React from 'react';
import { connect } from 'react-redux';
import Wrapper from '../src/helpers/Wrapper';
import actions, { actionPropTypes } from '../src/actions';
import '../styles/profilePage.scss';
import ProfileSubmission from '../src/components/ProfileSubmission';
import PictureProfile from '../src/assets/images/mario_profile.jpg';

class profilePage extends React.Component {
  static propTypes = {
    actions: actionPropTypes.isRequired,
  };

  state = {
    description: '',
    linkPicture: '',
    firstname: '',
    lastname: '',
    tags: '',
  };

  get userInfo() {
    const {
      description,
      linkPicture,
      firstname,
      lastname,
      tags,
    } = this.state;
    return {
      description,
      linkPicture,
      firstname,
      lastname,
      tags,
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { actions: { profileSaveAction } } = this.props;
    const {
      description,
      linkPicture,
      firstname,
      lastname,
      tags,
    } = this.state;
    profileSaveAction({
      description,
      linkPicture,
      firstname,
      lastname,
      tags,
    });
  }

  onChange = name => ({ target: { value } }) => this.setState({ [name]: value });

  render() {
    return (
      <div className="profilePage">
        <ProfileSubmission
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          userInfo={this.userInfo}
        />
      </div>
    );
  }
}

export default Wrapper(connect(null, actions)(profilePage));
