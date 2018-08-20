import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

const input = ({
  type,
  onTextChange,
  placeholder,
}) => (
  <input
    placeholder={placeholder}
    onChange={e => onTextChange(e.target.value)}
    type={type}
  />
);

input.propTypes = {
  type: PropTypes.string.isRequired,
  onTextChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default input;
