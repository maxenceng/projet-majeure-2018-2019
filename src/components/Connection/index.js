import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import Button from '../Button';
import InputList from '../InputList';

const Connection = ({ inputList, onChange, onSubmit }) => (
  <div className="Connection">
    <div className="connexionForm">
      <form onSubmit={onSubmit} className="formulaire">
        <div className="connexion">Connexion</div>
        <InputList list={inputList} onChange={onChange} />
        <div className="validation">
          <Button type="submit">Connexion</Button>
        </div>
      </form>
    </div>
  </div>
);

Connection.propTypes = {
  inputList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Connection;
