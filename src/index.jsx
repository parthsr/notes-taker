import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Board from './components/board/Board';
import initStore from './redux/store';

const Container = () => (
  <Provider store={initStore()}>
    <BrowserRouter>
      <Board />
    </BrowserRouter>
  </Provider>
);
const render = () => {
  ReactDOM.render(
    <Container />,
    document.getElementById('root'),
  );
};

export default render;
