import React from 'react';
import { connect } from 'react-redux';
import Wrapper from '../src/helpers/Wrapper';
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

  onChange = name => ({ target: { value } }) => this.setState({ [name]: value });

  render() {
    return (
      <Connection
        inputList={this.inputList}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
      />
    );
  }
}

export default Wrapper(connect(null, actions)(Connexion));
