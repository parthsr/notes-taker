import React from 'react';
import Header from './header';
import Footer from './footer';
import BoardContent from './boardContent';

const Board = () => (
  <div className="board">
    <Header />
    <BoardContent />
    <Footer />
  </div>
);

export default Board;
