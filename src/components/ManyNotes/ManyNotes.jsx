import PropTypes from 'prop-types';
import React from 'react';
import Title from '../Title/Title';
import Canvaas from '../Canvaas/Canvaas';
import './ManyNotes.css';

class ManyNotes extends React.Component {
  constructor(props) {
    super(props);
    ManyNotes.propTypes = {
      totalContent: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      })).isRequired,
    };
  }
  render = () => {
    const { totalContent } = this.props;
    const contentToDisplay = totalContent.map(content => (
      <div className="ManyNotes-indiv" key={new Date() + content.id}>
        <Title title={content.title} />
        <Canvaas realText={content.content} />
      </div>
    ));
    return (
      <div className="ManyNotes-notes">
        {contentToDisplay}
      </div>);
  }
}


export default ManyNotes;
