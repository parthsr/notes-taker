import PropTypes from 'prop-types';
import React from 'react';
import Title from '../Title/Title';
import Canvaas from '../Canvaas/canvaas';
import './ManyNotes.css';
import ButtonEn from '../ButtonEn/ButtonEn';

class ManyNotes extends React.Component {
  constructor(props) {
    super(props);
    ManyNotes.propTypes = {
      totalContent: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        noteid: PropTypes.number.isRequired,
      })).isRequired,
      onHistoryClick: PropTypes.func.isRequired,
      onClicks: PropTypes.func.isRequired,

    };
  }
  render = () => {
    const { totalContent } = this.props;
    const contentToDisplay = totalContent.map(content => (
      <div className="ManyNotes-indiv" key={new Date() + content.noteid}>
        <Title title={content.title} onClick={() => this.props.onHistoryClick(content.noteid)} />
        <Canvaas onClick={() => this.props.onHistoryClick(content.noteid)}realText={content.content} />
      </div>
    ));
    return (
      <div className="ManyNotes-sync">
        <ButtonEn buttonText="sync" onClicks={() => this.props.onClicks()} />
        <div className="ManyNotes-notes">
          {contentToDisplay}
        </div>
      </div>);
  }
}


export default ManyNotes;
