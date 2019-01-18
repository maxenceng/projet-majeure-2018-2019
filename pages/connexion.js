import React from 'react';
import { connect } from 'react-redux';
import actions, { actionPropTypes } from '../src/actions';
import Connection from '../src/components/Connection';

class Connexion extends React.Component {
  static propTypes = {
    actions: actionPropTypes.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  get inputList() {
    const {
      email,
      password,
    } = this.state;
    return [
      {
        name: 'email',
        type: 'email',
        value: email,
        placeholder: 'Adresse Email',
      },
      {
        name: 'password',
        type: 'password',
        value: password,
        placeholder: 'Mot de passe',
      },
    ];
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { actions: { loginAction } } = this.props;
    const {
      email,
      password,
    } = this.state;
    loginAction({
      email,
      password,
    });
  }

  googleLogin = (event) => {
    console.log(event);
    const { actions: { openIdLoginAction } } = this.props;
    const {
      email,
      givenName,
      googleId,
      familyName,
    } = event.profileObj;
    openIdLoginAction({
      email,
      name: familyName,
      firstname: givenName,
      password: googleId,
      passwordVerif: googleId,
    });
  };

  onChange = name => ({ target: { value } }) => this.setState({ [name]: value });

  render() {
    return (
      <Connection
        inputList={this.inputList}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        googleLogin={this.googleLogin}
      />
    );
  }
}

export default connect(null, actions)(Connexion);
