import PropTypes from 'prop-types';
import React from 'react';
import TitleEn from '../TitleEn/TitleEn';
import Topic from '../Topic/Topic';
import Note from '../Note/Note';
import Canvaas from '../Canvaas/Canvaas';
import Save from '../Save/Save';
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

  onTopicChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  }
  onLengthChange= (event) => {
    this.note = event.target.value;
    if (this.note.length > 119) {
      this.note = this.note.slice(0, 119);
      this.setState({ limit: true });
    } else {
      this.setState({ limit: false });
    }
    this.setState({
      length: event.target.value.length,
      textAreaContent: this.note,
    });
  }
  onSaveContent = () => {
    this.props.onSave(this.state.title, this.state.textAreaContent);
    this.setState({
      length: 0,
      title: '',
      textAreaContent: '',
      limit: false,
    });
  }
  render() {
    return (
      <div className="BoardContent-boardcontent">
        <TitleEn title="Note Title" buttonText="en" />
        <Topic
          placeholder="Tasks for Today"
          realText={this.props.savedNote.history ? this.props.savedNote.title : this.state.title}
          onTopicChange={event => this.onTopicChange(event)}
        />
        <Note text="Please type your note below" />
        <Canvaas
          realText={this.props.savedNote.history ?
            this.props.savedNote.content : this.state.content}
          onLengthChange={event => this.onLengthChange(event)}
          limit={this.state.limit}
        />
        <Save
          onSaveContent={() => this.onSaveContent()}
          length={this.state.length}
        />
      </div>
    );
  }
}
export default BoardContent;
