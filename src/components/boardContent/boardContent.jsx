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
    };
  }
  onLengthChange= (event) => {
    this.setState({ length: event.target.value.length });
  }
  render() {
    return (
      <div className="boardcontent">
        <TitleEn title="Note Title" buttonText="en" />
        <Topic placeholder="Tasks for Today" />
        <Note text="Please type your note below" />
        <Canvaas onLengthChange={event => this.onLengthChange(event)} />
        <Save length={this.state.length} />
      </div>
    );
  }
}
export default BoardContent;
