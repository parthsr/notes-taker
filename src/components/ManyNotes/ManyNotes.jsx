import PropTypes from 'prop-types';
import React from 'react';
import Title from '../Title/Title';
import Canvaas from '../Canvaas/Canvaas';
import './ManyNotes.css';

const ManyNotes = (props) => {
  const { totalContent } = props;
  const contentToDisplay = JSON.parse(totalContent).map(content => (
    <div className="ManyNotes-indiv" key={new Date()}>
      <Title title={content.title} />
      <Canvaas realText={content.content} />
    </div>
  ));
  return (
    <div className="ManyNotes-notes">
      {contentToDisplay}
    </div>);
};

ManyNotes.propTypes = {
  totalContent: PropTypes.string.isRequired,
};


export default ManyNotes;
