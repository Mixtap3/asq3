import React from 'react';
import PropTypes from 'prop-types';

const ButtonView = ({ label, value, styleType, onClick, disabled }) => (
  <button className={styleType} onClick={() => onClick(value)} disabled={disabled}>
    { label }
  </button>
);

ButtonView.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.shape(),
  ]),
  styleType: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

ButtonView.defaultProps = {
  label: '',
  value: null,
  styleType: 'btn-standard',
  onClick() {
  },
  disabled: false,
};

export default ButtonView;