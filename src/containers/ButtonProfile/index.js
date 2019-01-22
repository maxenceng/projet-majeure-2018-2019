import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ButtonComponent from '../../components/Button';
import actions, { actionPropTypes } from '../../actions';

class ButtonProfile extends React.Component {
  static propTypes = {
    actions: actionPropTypes.isRequired,
    children: PropTypes.string.isRequired,
    profile: PropTypes.instanceOf(Object).isRequired,
  };

  handleClick = () => {
    const { actions: { profileSaveAction }, profile } = this.props;
    profileSaveAction(profile.profile[0]);
  }

  render() {
    const {
      children,
      profile: {
        PROFILE_AVATAR,
        PROFILE_DESC,
        tags,
        USER_FIRSTNAME,
        USER_NAME,
      },
    } = this.props;
    return (
      <div>
        <ButtonComponent onClick={this.handleClick}>
          {children}
        </ButtonComponent>
        <div>{ PROFILE_AVATAR }</div>
        <div>{ PROFILE_DESC }</div>
        <div>{ tags }</div>
        <div>{ USER_FIRSTNAME }</div>
        <div>{ USER_NAME }</div>
      </div>
    );
  }
}

const mapStateToProps = ({ profile }) => ({ profile: profile.data });

export default connect(mapStateToProps, actions)(ButtonProfile);
