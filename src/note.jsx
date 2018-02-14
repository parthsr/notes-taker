import React from 'react';
import img from './assets/notepad.png';

const Note = () => (
  <div className="note">
    <p>Please type your note below </p>
    <img src={img} alt="img" />
  </div>
);

export default Note;
