import React from 'react';
import './index.scss';
import Router from 'next/router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions, { actionPropTypes } from '../../actions';

class Pin extends React.Component {
  static propTypes = {
    actions: actionPropTypes.isRequired,
    idEvent: PropTypes.string.isRequired,
    EVENT_NAME: PropTypes.string.isRequired,
  };

  state = {
    show: false,
  }

  handleOnClick = () => {
    const { idEvent } = this.props;
    const {
      actions: {
        currentEventAction,
        getParticipantEventAction,
        getInterestedEventAction,
      },
    } = this.props;
    currentEventAction(idEvent);
    getParticipantEventAction({
      idEvent,
    });
    getInterestedEventAction({
      idEvent,
    });
    Router.push('/eventPage');
  }

  handleOnMouseOver = () => {
    this.setState({ show: true });
  }

  handleOnMouseLeave = () => {
    this.setState({ show: false });
  }

  getDate = (dateEv) => {
    const date = new Date(dateEv * 1);
    const dateS = date.toString().split(' ');
    return `${dateS[1]} ${dateS[2]} ${dateS[3]}`;
  }

  render() {
    const { show } = this.state;
    const {
      EVENT_NAME,
    } = this.props;

    return (
      <div className="Pin" onMouseOver={this.handleOnMouseOver} onMouseLeave={this.handleOnMouseLeave} onClick={this.handleOnClick}>
        {show ? <div className="Event">{EVENT_NAME}</div> : <div className="Marker" />}
      </div>
    );
  }
}

export default connect(null, actions)(Pin);
