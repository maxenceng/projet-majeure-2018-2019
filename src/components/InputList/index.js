import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';


const InputList = ({ list, onChange }) => (
  <div className="InputList">
    {list && list.map(({
      name,
      type,
      value,
      placeholder,
    }) => (
      <Input
        key={name}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange(name)}
      />
    ))}
  </div>
);

InputList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputList;
