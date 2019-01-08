import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const DiscussionBox = ({
  active,
  person,
  time,
  lastMessage,
  onClick,
}) => (
  <button
    className={`DiscussionBox ${active ? 'active' : ''}`}
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

DiscussionBox.propTypes = {
  active: PropTypes.bool,
  person: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  lastMessage: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

DiscussionBox.defaultProps = {
  active: false,
};

export default DiscussionBox;
