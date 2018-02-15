import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => (
  <footer className="footer"><b>{props.text}</b></footer>
);

export default Footer;

Footer.propTypes = {
  text: PropTypes.string.isRequired,
};
