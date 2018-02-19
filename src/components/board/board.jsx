import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BoardContent from '../BoardContent/boardContent';
import ManyNotes from '../ManyNotes/ManyNotes';
import './Board.css';

class Board extends React.Component {
  state = {
    totalContent: [],
    saved: false,
    title: '',
    content: '',
    id: 0,
    history: false,
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
    const totalContents = this.state.totalContent;
    if (this.state.history) {
      totalContents[this.state.id] = {
        title: this.state.title,
        content: this.state.content,
        id: totalContents[this.state.id].id,
      };
    } else {
      const toInsertObject = {
        title: this.state.title,
        content: this.state.content,
        id: this.state.totalContent.length,
      };
      totalContents.push(toInsertObject);
    }
    this.setState({
      totalContent: totalContents,
      saved: true,
      id: this.state.totalContent.length,
      history: false,
    });
  }
  onHistoryClick = (id) => {
    this.setState({
      title: this.state.totalContent[id].title,
      content: this.state.totalContent[id].content,
      saved: false,
      history: true,
      id,
    });
  }
  comingBack = () => {
    this.setState({
      saved: false,
      history: false,
      title: '',
      content: '',
      id: this.state.totalContent.length,
    });
  };
  renderingPage = () => {
    if (this.state.saved === false) {
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
          totalContent={this.state.totalContent}
        />
        <Footer text="Create New Note" onClicks={() => this.comingBack()} />
      </div>
    );
  }
  render() {
    return (this.renderingPage());
  }
}
export default Board;
