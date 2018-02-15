import React from 'react';
import PropTypes from 'prop-types';
import './topic.css';

const Topic = props => (
  <div className="topic">
    <input placeholder={props.placeholder} />
  </div>
);

export default Topic;

Topic.propTypes = {
  placeholder: PropTypes.string.isRequired,
};
