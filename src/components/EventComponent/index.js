import React from 'react';
import Link from 'next/link';
import './index.scss';
import PropTypes from 'prop-types';
import PictureEvent from '../PictureEvent';
import DateBox from '../DateBox';
import pictureBox from '../../assets/images/party.jpg';

const EventComponent = ({ routeSelected }) => (
  <div className="boxEvent">
    <Link href={routeSelected}>
      <button type="button" className="clickedEvent">
        <PictureEvent pictureEvent={pictureBox} />
        <DateBox />
      </button>
    </Link>
  </div>
);

EventComponent.propTypes = {
  routeSelected: PropTypes.string.isRequired,
};

export default EventComponent;
