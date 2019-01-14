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
    const { actions: { getAllEventsAction } } = this.props;
    const location = { lng: 4.869803, lat: 45.784816 };
    getAllEventsAction({
      location,
    });
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
