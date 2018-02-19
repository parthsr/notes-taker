import PropTypes from 'prop-types';
import React from 'react';
import Title from '../Title/Title';
import Canvaas from '../Canvaas/canvaas';
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
      onHistoryClick: PropTypes.func.isRequired,
    };
  }
  render = () => {
    const totalContent = this.props.totalContent;
    const contentToDisplay = totalContent.map(content => (
      <div className="ManyNotes-indiv" key={new Date() + content.id}>
        <Title title={content.title} onClick={() => this.props.onHistoryClick(content.id)} />
        <Canvaas onClick={() => this.props.onHistoryClick(content.id)}realText={content.content} />
      </div>
    ));
    return (
      <div className="ManyNotes-notes">
        {contentToDisplay}
      </div>);
  }
}


export default ManyNotes;
