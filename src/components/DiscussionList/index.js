import React from 'react';
import PropTypes from 'prop-types';
import DiscussionDetails from '../DiscussionDetails';
import './index.scss';

const DiscussionList = ({ className, list, onClick }) => (
  <div className={`DiscussionList ${className}`}>
    {list.map(({
      active,
      lastMessage,
      person,
      time,
    }) => (
      <DiscussionDetails
        active={active}
        key={person}
        person={person}
        time={time}
        lastMessage={lastMessage}
        onClick={onClick}
      />
    ))}
  </div>
);

DiscussionList.propTypes = {
  className: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.shape({
    active: PropTypes.bool.isRequired,
    person: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    lastMessage: PropTypes.string.isRequired,
  })),
  onClick: PropTypes.func.isRequired,
};

DiscussionList.defaultProps = {
  className: '',
  list: [],
};

export default DiscussionList;
