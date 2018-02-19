import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board/board';

const render = () => {
  ReactDOM.render(
    <Board />,
    document.getElementById('root'),
  );
};

export default render;
