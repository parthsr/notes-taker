import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BoardContent from '../BoardContent/BoardContent';
import './Board.css';

class Board extends React.Component {
  state = {
    totalContent: [],
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
    });
  }
  render() {
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
}
export default Board;
