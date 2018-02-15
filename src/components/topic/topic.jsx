import React from 'react';
import PropTypes from 'prop-types';
import './topic.css';

const Topic = props => (
  <div className="topic">
    <input
      value={props.realText}
      placeholder={props.placeholder}
      onChange={(event) => { props.onTopicChange(event); }}
    />
  </div>
);

export default Topic;

Topic.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onTopicChange: PropTypes.func.isRequired,
};

Topic.propTypes = {
  realText: PropTypes.string.isRequired,
};
