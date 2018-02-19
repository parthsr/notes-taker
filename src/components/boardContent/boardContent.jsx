import PropTypes from 'prop-types';
import React from 'react';
import TitleEn from '../TitleEn/TitleEn';
import Topic from '../Topic/Topic';
import Note from '../Note/Note';
import Canvaas from '../Canvaas/canvaas';
import Save from '../Save/save';
import './BoardContent.css';


class BoardContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 0,
      title: '',
      textAreaContent: '',
      limit: false,
    };
    BoardContent.propTypes = {
      onSave: PropTypes.func.isRequired,
      savedNote: PropTypes.instanceOf({ }),
    };
    BoardContent.defaultProps = {
      savedNote: {
        title: this.state.title,
        content: this.state.textAreaContent,
      },
    };
  }
  onLengthChange= (event) => {
    let note = event.target.value;
    if (note.length > 119) {
      note = note.slice(0, 119);
      this.setState({
        limit: true,
        length: note.length,
      });
    } else {
      this.setState({
        limit: false,
        length: note.length,
      });
    }
    this.props.onLengthChange(note);
  }

  render() {
    return (
      <div className="BoardContent-boardcontent">
        <TitleEn title="Note Title" buttonText="en" />
        <Topic
          placeholder="Tasks for Today"
          realText={this.props.realText}
          onTopicChange={event => this.props.onTopicChange(event)}
        />
        <Note text="Please type your note below" />
        <Canvaas
          realText={this.props.realContent}
          onLengthChange={event => this.onLengthChange(event)}
          limit={this.state.limit}
          onClick={() => {}}
        />
        <Save
          onSave={() => this.props.onSave()}
          length={this.state.length}
        />
      </div>
    );
  }
}
export default BoardContent;
