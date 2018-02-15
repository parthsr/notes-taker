import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title/Title';
import ButtonEn from '../ButtonEn/ButtonEn';
import './TitleEn.css';

const TitleEn = props => (
  <div className="titleEn">
    <Title title={props.title} />
    <ButtonEn buttonText={props.buttonText} />
  </div>
);

TitleEn.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default TitleEn;
