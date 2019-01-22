import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import PictureEvent from '../PictureEvent';
import DateBox from '../DateBox';

/**
 * Composant qui affiche la miniature de l'événement sur la apge 'index'.
 * @param {object} event : les propriétés de l'événement
 */
const EventComponent = ({
  event: {
    EVENT_DATE,
    EVENT_NAME,
    LOC_DISTRICT,
    MEDIA_CONTENT,
  },
  onClick,
}) => (
  <div className="boxEvent">
    <button type="button" onClick={onClick} className="clickedEvent">
      <PictureEvent pictureEvent={MEDIA_CONTENT} />
      <DateBox
        date={EVENT_DATE}
        name={EVENT_NAME}
        district={LOC_DISTRICT}
      />
    </button>
  </div>
);

EventComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  event: PropTypes.shape({
    EVENT_DATE: PropTypes.string.isRequired,
    EVENT_DESC: PropTypes.string.isRequired,
    EVENT_NAME: PropTypes.string.isRequired,
    ID_EVENT: PropTypes.string.isRequired,
    LOC_DISTRICT: PropTypes.string.isRequired,
    LOC_LATITUDE: PropTypes.string.isRequired,
    LOC_LONGITUDE: PropTypes.string.isRequired,
    MEDIA_CONTENT: PropTypes.string.isRequired,
  }),
};

EventComponent.defaultProps = {
  event: {},
};

export default EventComponent;
