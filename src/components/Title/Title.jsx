import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

const Title = props => (
  <p onClick={() => { props.onClick(); }} className="Title-title"><b>{props.title}</b></p>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
