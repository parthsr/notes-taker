import React from 'react';
import PropTypes from 'prop-types';
import './Save.css';

const Save = props => (
  <div className="save">
    <button onClick={() => props.onSave()}><b>Save</b></button>
    <p>{props.length} Characters</p>
  </div>
);

Save.propTypes = {
  length: PropTypes.number.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default Save;
