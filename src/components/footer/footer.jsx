import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

const Footer = props => (
  <footer className="Footer-footer" onClick={() => props.onClicks()}><b>{props.text}</b></footer>
);

export default Footer;

Footer.propTypes = {
  text: PropTypes.string,
  onClicks: PropTypes.func,
};
Footer.defaultProps = {
  text: 'parth',
  onClicks: () => {
  },
};
