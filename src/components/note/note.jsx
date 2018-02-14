import React from 'react';
import img from '../../assets/notepad.png';
import './note.css';

const Note = () => (
  <div className="note">
    <p><em>Please type your note below </em></p>
    <img src={img} alt="img" />
  </div>
);

export default Note;
