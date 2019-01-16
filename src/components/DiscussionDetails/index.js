import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const DiscussionDetails = ({
  active,
  person,
  time,
  lastMessage,
  onClick,
}) => (
  <button
    className={`DiscussionDetails ${active ? 'active' : ''}`}
    type="button"
    onClick={onClick}
  >
    <div className="first-line">
      <span className="person">{person}</span>
      <span className="time">{time}</span>
    </div>
    <div className="second-line">{lastMessage}</div>
  </button>
);

DiscussionDetails.propTypes = {
  active: PropTypes.bool,
  person: PropTypes.string.isRequired,
  time: PropTypes.string,
  lastMessage: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

DiscussionDetails.defaultProps = {
  active: false,
  time: '',
  lastMessage: '',
};

export default DiscussionDetails;
