import React from 'react';
import Link from 'next/link';
import './index.scss';
import SvgButton from '../SvgButton';
import pp from '../../assets/images/mario_profile.jpg';
import Enveloppe from '../../assets/images/envelope-solid.svg';

const EventContentParticipant = () => (
  <div className="event_participant">
    <div className="profilePic">
      <img className="event_participant_item pp" src={pp} alt="profile pic" />
    </div>
    <div className="event_participant_item">Mario Dupont</div>
    <div className="messageIcon">
      <Link href="/chatPage">
        <SvgButton Svg={Enveloppe} />
      </Link>
    </div>
  </div>
);

export default EventContentParticipant;
