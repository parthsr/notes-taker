import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BoardContent from '../BoardContent/BoardContent';
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
  onSave = (title, textAreaContent) => {
    const toInsertObject = {
      title,
      content: textAreaContent,
      id: this.state.totalContent.length,
    };
    const totalContents = this.state.totalContent;
    if (this.state.history) {
      totalContents[this.state.id] = {
        title: this.state.title,
        content: textAreaContent,
        id: totalContents[this.state.id].id,
      };
    } else {
      totalContents.push(toInsertObject);
    }
    this.setState({
      totalContent: totalContents,
      saved: true,
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
    });
  };
  renderingPage = () => {
    if (this.state.saved === false) {
      return (
        <div className="Board-board">
          <Header className="Board-header" text="Start taking Notes" />
          <BoardContent
            onSave={(title, textAreaContent) => this.onSave(title, textAreaContent)}
            savedNote={{
              title: this.state.title,
              content: this.state.content,
              history: this.state.history,
            }}
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
