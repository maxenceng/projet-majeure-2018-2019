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

  onChange = name => ({ target: { value } }) => this.setState({ [name]: value });

  render() {
    return (
      <Subscribe
        inputList={this.inputList}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
      />
    );
  }
}

export default connect(null, actions)(Inscription);
