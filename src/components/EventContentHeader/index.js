import React from 'react';
import './index.scss';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Button from '../Button';
import ChevronLeft from '../../assets/images/chevron-left-solid.svg';
import SvgButton from '../SvgButton';


const EventContentHeader = ({
  eventName,
  eventDate,
  eventLoc,
  eventSchedule,
  onClickParticipate,
  onClickUnParticipate,
  status,
}) => (
  <div className="event_header">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous" />
    <div className="buttonbox">
      <Link href="/">
        <SvgButton Svg={ChevronLeft} />
      </Link>
    </div>
    <div id="event_header_left" className="event_header_item">
      <h1 className="event_title">{eventName}</h1>
      <h2 className="event_location">{eventLoc}</h2>
      <h2 className="event_time">{eventDate} {eventSchedule}</h2>
    </div>
    <div id="event_header_right" className="event_header_item">
      {status === 'participate' ? (
        <Button className="inverse event_participate" onClick={onClickUnParticipate}>Désinscrire</Button>
      ) : (
        <Button className="inverse event_participate" onClick={onClickParticipate}>Participer</Button>
      )}
      <Button className="inverse event_addtofavorite">Add to Favorite</Button>
    </div>
  </div>
);

EventContentHeader.propTypes = {
  eventName: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  eventLoc: PropTypes.string.isRequired,
  eventSchedule: PropTypes.string.isRequired,
  onClickParticipate: PropTypes.func.isRequired,
  onClickUnParticipate: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

export default EventContentHeader;
