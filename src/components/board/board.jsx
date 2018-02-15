import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import BoardContent from '../boardContent/boardContent';
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
        <Header text="Start taking Notes" />
        <BoardContent onSave={(title, textAreaContent) => this.onSave(title, textAreaContent)} />
        <Footer text="AboutUs" />
      </div>
    );
  }
}
export default Board;
