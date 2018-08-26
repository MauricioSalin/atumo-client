import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const validateTypeButton = (type) => {
  switch (type) {
    case 'warning':
      return 'btn btn-warning';
    case 'danger':
      return 'btn btn-danger';
    case 'success':
      return 'btn btn-success';
    default:
      return 'btn btn-primary';
  }
};

const BaseButton = ({
  click,
  name,
  icon,
  type,
  disabled,
}) => (
  <button onClick={() => click()} type="button" disabled={disabled} className={validateTypeButton(type)}>
    <span className={`icon ${icon}`} />
    <span>{name}</span>
  </button>
);

BaseButton.propTypes = {
  click: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

BaseButton.defaultProps = {
  disabled: false,
  icon: '',
  type: 'btn-primary',
};

export default BaseButton;
