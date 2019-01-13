import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ButtonComponent from '../../components/Button';
import actions, { actionPropTypes } from '../../actions';

class ButtonProfile extends React.Component {
  static propTypes = {
    actions: actionPropTypes.isRequired,
    children: PropTypes.string.isRequired,
    userInfo: PropTypes.instanceOf(Object).isRequired,
  };

  handleClick = () => {
    const { actions: { profileSaveAction }, userInfo } = this.props;
    profileSaveAction(userInfo);
  }

  render() {
    const {
      children,
      userInfo: {
        description,
        username,
        firstname,
        lastname,
        tags,
      },
    } = this.props;
    return (
      <div>
        <ButtonComponent onClick={this.handleClick}>
          {children}
        </ButtonComponent>
        <div>{ description }</div>
        <div>{ username }</div>
        <div>{ firstname }</div>
        <div>{ lastname }</div>
        <div>{ tags }</div>
      </div>
    );
  }
}

const mapStateToProps = ({ profile }) => ({ profile: profile.data });

export default connect(mapStateToProps, actions)(ButtonProfile);
