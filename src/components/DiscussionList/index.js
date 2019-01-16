import React from 'react';
import PropTypes from 'prop-types';
import DiscussionDetails from '../DiscussionDetails';
import './index.scss';

const DiscussionList = ({
  currentIdUser,
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
        active={currentIdUser === idUser}
        key={person}
        person={person}
        time={time}
        lastMessage={lastMessage}
        onClick={onClick({ idUser, person })}
      />
    ))}
  </div>
);

DiscussionList.propTypes = {
  currentIdUser: PropTypes.string.isRequired,
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
