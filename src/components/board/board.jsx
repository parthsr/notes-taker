import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BoardContent from '../BoardContent/boardContent';
import ManyNotes from '../ManyNotes/ManyNotes';
import './Board.css';
import { saveNote, editNote, newNote } from '../../redux/actions/actions';


class Board extends React.Component {
  state = {
    title: '',
    content: '',
  }
  onTopicChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  }
  onLengthChange = (note) => {
    this.setState({
      content: note,
    });
  }

  onSave = () => {
    const totalContents = this.props.totalContent;
    totalContents[this.props.id] = {
      title: this.state.title,
      content: this.state.content,
      id: this.props.id,
    };
    // this.setState({
    //   totalContent: totalContents,
    //   saved: true,
    //   id: this.state.totalContent.length,
    // });
    this.props.onSaveNote({
      totalContent: totalContents,
      saved: true,
      id: this.props.totalContent.length,
    });
  }
  onHistoryClick = (id) => {
    this.setState({
      title: this.props.totalContent[id].title,
      content: this.props.totalContent[id].content,
    });
    this.props.onHistoryClick({ id });
  }
  comingBack = () => {
    this.setState({
      title: '',
      content: '',
    });
    this.props.onNewNote({
      saved: false,
      id: this.props.totalContent.length,
    });
  };
  renderingPage = () => {
    if (this.props.saved === false) {
      return (
        <div className="Board-board">
          <Header className="Board-header" text="Start taking Notes" />
          <BoardContent
            realText={this.state.title}
            onTopicChange={event => this.onTopicChange(event)}
            onLengthChange={note => this.onLengthChange(note)}
            onSave={() => this.onSave()}
            realContent={this.state.content}
          />
          <Footer className="Board-footer"text="AboutUs" />
        </div>
      );
    }
    return (
      <div className="Board-board">
        <Header text="Saved Notes" />
        <ManyNotes
          onHistoryClick={(id) => { this.onHistoryClick(id); }}
          totalContent={this.props.totalContent}
        />
        <Footer text="Create New Note" onClicks={() => this.comingBack()} />
      </div>
    );
  }
  render() {
    return (this.renderingPage());
  }
}
const mapStateToProps = state => ({
  totalContent: state.notes.totalContent,
  id: state.notes.id,
  saved: state.notes.saved,
});

const mapDispatchToProps = dispatch => ({
  onSaveNote: note => dispatch(saveNote(note)),
  onHistoryClick: note => dispatch(editNote(note)),
  onNewNote: note => dispatch(newNote(note)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
