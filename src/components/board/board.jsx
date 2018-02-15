import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import BoardContent from '../boardContent/boardContent';
import './board.css';

const Board = () => (
  <div className="board">
    <Header text="Start taking Notes" />
    <BoardContent />
    <Footer text="AboutUs" />
  </div>
);

export default Board;
