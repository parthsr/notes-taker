import React from 'react';
import PropTypes from 'prop-types';
import './titleEn.css';

const TitleEn = props => (
  <div className="titleEn">
    <p>{props.title}</p>
    <button><b>{props.buttonText}</b></button>
  </div>
);

TitleEn.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default TitleEn;
