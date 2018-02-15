import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

const Footer = props => (
  <footer className="Footer-footer"><b>{props.text}</b></footer>
);

export default Footer;

Footer.propTypes = {
  text: PropTypes.string.isRequired,
};
