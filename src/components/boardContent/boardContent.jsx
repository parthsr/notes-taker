import React from 'react';
import TitleEn from '../titleEn/titleEn';
import Topic from '../topic/topic';
import Note from '../note/note';
import Canvaas from '../canvaas/canvaas';
import Save from '../save/save';
import './boardContent.css';

class BoardContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 0,
      title: '',
      textAreaContent: '',
      titleArray: [],
      textAreaArray: [],
      limit: false,
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
  onSave() {
    const titleArrays = this.state.titleArray;
    titleArrays.push(this.state.title);
    const textAreaArrays = this.state.textAreaArray;
    textAreaArrays.push(this.state.textAreaContent);
    this.setState({
      length: 0,
      title: '',
      textAreaContent: '',
      titleArray: titleArrays,
      textAreaArray: textAreaArrays,
      limit: false,
    });
  }
  render() {
    return (
      <div className="boardcontent">
        <TitleEn title="Note Title" buttonText="en" />
        <Topic placeholder="Tasks for Today" realText={this.state.title} onTopicChange={event => this.onTopicChange(event)} />
        <Note text="Please type your note below" />
        <Canvaas realText={this.state.textAreaContent} onLengthChange={event => this.onLengthChange(event)} limit={this.state.limit} />
        <Save onSave={() => this.onSave()} length={this.state.length} />
      </div>
    );
  }
}
export default BoardContent;
