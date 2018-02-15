import React from 'react';
import PropTypes from 'prop-types';
import './save.css';

const Save = props => (
  <div className="save">
    <button><b>Save</b></button>
    <p>{props.length} Characters</p>
  </div>
);

Save.propTypes = {
  length: PropTypes.number.isRequired,
};

export default Save;
