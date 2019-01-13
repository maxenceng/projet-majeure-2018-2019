import React from 'react';
import { connect } from 'react-redux';
import Wrapper from '../src/helpers/Wrapper';
import actions, { actionPropTypes } from '../src/actions';
import '../styles/profilePage.scss';
import ProfileSubmission from '../src/components/ProfileSubmission';

class profilePage extends React.Component {
  static propTypes = {
    actions: actionPropTypes.isRequired,
  };

  state = {
    description: '',
    username: '',
    firstname: '',
    lastname: '',
    tags: '',
  };

  get userInfo() {
    const {
      description,
      username,
      firstname,
      lastname,
      tags,
    } = this.state;
    return {
      description,
      username,
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
      username,
      firstname,
      lastname,
      tags,
    } = this.state;
    profileSaveAction({
      description,
      username,
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
