import React from 'react';
import PropTypes from 'prop-types';
import img from '../../assets/notepad.png';
import './note.css';

const Note = props => (
  <div className="note">
    <p><em>{props.text}</em></p>
    <img src={img} alt="img" />
  </div>
);

Note.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Note;
