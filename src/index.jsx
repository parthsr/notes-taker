import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board/board';

const render = () => {
  ReactDOM.render(
    <Board />,
    document.getElementById('root'),
  );
};

export default render;
