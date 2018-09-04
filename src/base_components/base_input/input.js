import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

const input = ({
  type,
  onChange,
  placeholder,
}) => (
  <input
    placeholder={placeholder}
    onChange={e => onChange && onChange(e.target.value)}
    type={type}
  />
);

input.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default input;
