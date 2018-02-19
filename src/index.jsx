import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import Board from './components/Board/board';
import initStore from './redux/store';

const Container = () => (
  <Provider store={initStore()}>
    <Board />
  </Provider>
);
const render = () => {
  ReactDOM.render(
    <Container />,
    document.getElementById('root'),
  );
};

export default render;
