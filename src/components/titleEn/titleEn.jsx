import React from 'react';
import PropTypes from 'prop-types';
import './TitleEn.css';

const TitleEn = props => (
  <div className="titleEn">
    <p><b>{props.title}</b></p>
    <button><b>{props.buttonText}</b></button>
  </div>
);

TitleEn.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default TitleEn;
