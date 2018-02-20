import React from 'react';
import PropTypes from 'prop-types';

const ButtonEn = props => (
  <button onClick={() => props.onClicks()}><b>{props.buttonText}</b></button>
);

ButtonEn.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default ButtonEn;

