import React from 'react';
import Proptypes from 'prop-types';

const ButtonEn = props => (
  <button><b>{props.buttonText}</b></button>
);

ButtonEn.propTypes = {
  buttonText: Proptypes.string.isRequired,
};

export default ButtonEn;

