import React from 'react';
import PropTypes from 'prop-types';
import DiscussionDetails from '../DiscussionDetails';
import './index.scss';

const DiscussionList = ({
  currentConv,
  className,
  list,
  onClick,
}) => (
  <div className={`DiscussionList ${className}`}>
    {list.map(({
      idUser,
      lastMessage,
      person,
      time,
    }) => (
      <DiscussionDetails
        active={currentConv === idUser}
        key={person}
        person={person}
        time={time}
        lastMessage={lastMessage}
        onClick={onClick(idUser)}
      />
    ))}
  </div>
);

DiscussionList.propTypes = {
  currentConv: PropTypes.string.isRequired,
  className: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.shape({
    person: PropTypes.string.isRequired,
    time: PropTypes.string,
    lastMessage: PropTypes.string,
  })),
  onClick: PropTypes.func.isRequired,
};

DiscussionList.defaultProps = {
  className: '',
  list: [],
};

export default DiscussionList;
