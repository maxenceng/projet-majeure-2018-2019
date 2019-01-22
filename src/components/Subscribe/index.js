import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import Button from '../Button';
import InputList from '../InputList';

const Subscribe = ({
  inputList,
  onChange,
  onSubmit,
}) => (
  <div className="subPage">
    <div className="subForm">
      <form onSubmit={onSubmit} className="formulaire">
        <div className="inscription">Inscription</div>
        <InputList list={inputList} onChange={onChange} />
        <div className="validationAuth">
          <Button type="submit">Confirmer</Button>
        </div>
      </form>
    </div>
  </div>
);

Subscribe.propTypes = {
  inputList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Subscribe;
