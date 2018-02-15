import React from 'react';
import PropTypes from 'prop-types';
import './save.css';

const Save = props => (
  <div className="save">
    <button onClick={() => props.onSaveContent()}><b>Save</b></button>
    <p>{props.length} Characters</p>
  </div>
);

Save.propTypes = {
  length: PropTypes.number.isRequired,
  onSaveContent: PropTypes.func.isRequired,
};

export default Save;
