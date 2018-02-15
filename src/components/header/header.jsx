import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = props => (
  <header className="Header-header"><b>{props.text}</b></header>
);

export default Header;

Header.propTypes = {
  text: PropTypes.string.isRequired,
};
