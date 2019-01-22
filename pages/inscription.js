import React from 'react';
import { connect } from 'react-redux';
import Subscribe from '../src/components/Subscribe';
import actions, { actionPropTypes } from '../src/actions';

class Inscription extends React.Component {
  static propTypes = {
    actions: actionPropTypes.isRequired,
  };

  state = {
    name: '',
    firstname: '',
    email: '',
    password: '',
    passwordVerif: '',
  };

  get inputList() {
    const {
      name,
      firstname,
      email,
      password,
      passwordVerif,
    } = this.state;
    return [
      {
        name: 'name',
        type: 'text',
        value: name,
        placeholder: 'Nom',
      },
      {
        name: 'firstname',
        type: 'text',
        value: firstname,
        placeholder: 'Prénom',
      },
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
      {
        name: 'passwordVerif',
        type: 'password',
        value: passwordVerif,
        placeholder: 'Confirmer mot de passe',
      },
    ];
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { actions: { registerAction } } = this.props;
    const {
      name,
      firstname,
      email,
      password,
      passwordVerif,
    } = this.state;
    registerAction({
      name,
      firstname,
      email,
      password,
      passwordVerif,
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


  facebookLogin = (event) => {
    console.log(event);
    const { actions: { openIdLoginAction } } = this.props;
    const {
      email,
      name,
      id,
    } = event;
    openIdLoginAction({
      email,
      name: name.split(' ')[1],
      firstname: name.split(' ')[0],
      password: id,
      passwordVerif: id,
    });
  };

  onChange = name => ({ target: { value } }) => this.setState({ [name]: value });

  render() {
    return (
      <Subscribe
        inputList={this.inputList}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        googleLogin={this.googleLogin}
        facebookLogin={this.facebookLogin}
      />
    );
  }
}

export default connect(null, actions)(Inscription);
