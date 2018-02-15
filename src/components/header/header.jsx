import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
  <header><b>{props.text}</b></header>
);

export default Header;

Header.propTypes = {
  text: PropTypes.string.isRequired,
};
