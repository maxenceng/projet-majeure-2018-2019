import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import './index.scss';
import SvgButton from '../SvgButton';
import Enveloppe from '../../assets/images/envelope-solid.svg';

const EventContentParticipant = ({ firstname, username, picture }) => (
  <div className="event_participant">
    <div className="profilePic">
      <img className="event_participant_item_pp" src={picture} alt="profile pic" />
    </div>
    <div className="event_participant_item">{username} {firstname}</div>
    <div className="messageIcon">
      <Link href="/chat">
        <SvgButton Svg={Enveloppe} />
      </Link>
    </div>
  </div>
);

EventContentParticipant.propTypes = {
  firstname: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default EventContentParticipant;
