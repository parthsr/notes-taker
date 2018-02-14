import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import BoardContent from '../boardContent/boardContent';
import './board.css';

const Board = () => (
  <div className="board">
    <Header />
    <BoardContent />
    <Footer />
  </div>
);

export default Board;
