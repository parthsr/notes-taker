import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import BoardContent from '../boardContent/boardContent';
import './Board.css';

const Board = () => (
  <div className="Board-board">
    <Header text="Start taking Notes" />
    <BoardContent />
    <Footer text="AboutUs" />
  </div>
);

export default Board;
