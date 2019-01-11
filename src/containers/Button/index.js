import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ButtonComponent from '../../components/Button';
import actions, { actionPropTypes } from '../../actions';

class Button extends React.Component {
  static propTypes = {
    actions: actionPropTypes.isRequired,
    children: PropTypes.string.isRequired,
  };

  handleClick = () => {
    const { actions: { loginAction } } = this.props;
    loginAction('test@test.com', 'test');
  }

  render() {
    const { children } = this.props;
    return (
      <ButtonComponent onClick={this.handleClick}>
        {children}
      </ButtonComponent>
    );
  }
}

export default connect(null, actions)(Button);
