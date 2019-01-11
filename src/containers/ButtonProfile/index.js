import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ButtonComponent from '../../components/Button';
import actions, { actionPropTypes } from '../../actions';

class ButtonProfile extends React.Component {
  static propTypes = {
    actions: actionPropTypes.isRequired,
    children: PropTypes.string.isRequired,
    profile: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  handleClick = () => {
    const { actions: { profileSaveAction }, description } = this.props;
    profileSaveAction(description);
  }

  render() {
    const { children, profile } = this.props;
    return (
      <div>
        <ButtonComponent onClick={this.handleClick}>
          {children}
        </ButtonComponent>
        <div>{ profile }</div>
      </div>
    );
  }
}

const mapStateToProps = ({ profile }) => ({ profile: profile.data });

export default connect(mapStateToProps, actions)(ButtonProfile);
