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
  }
  onSave = (title, textAreaContent) => {
    const toInsertObject = {
      title,
      content: textAreaContent,
    };
    const totalContents = this.state.totalContent;
    totalContents.push(toInsertObject);
    this.setState({
      totalContent: totalContents,
      saved: true,
    });
  }
  comingBack = () => {
    this.setState({
      saved: false,
    });
  };
  renderingPage = () => {
    if (this.state.saved === false) {
      return (
        <div className="Board-board">
          <Header className="Board-header" text="Start taking Notes" />
          <BoardContent
            onSave={(title, textAreaContent) => this.onSave(title, textAreaContent)}
          />
          <Footer className="Board-footer"text="AboutUs" />
        </div>
      );
    }
    return (
      <div className="Board-board">
        <Header text="Saved Notes" />
        <ManyNotes totalContent={JSON.stringify(this.state.totalContent)} />
        <Footer text="Create New Note" onClicks={() => this.comingBack()} />
      </div>
    );
  }
  render() {
    return (this.renderingPage());
  }
}
export default Board;
