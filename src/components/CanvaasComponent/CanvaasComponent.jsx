import React from 'react';
import Header from '../Header/Header';
import BoardContent from '../BoardContent/boardContent';
import Footer from '../Footer/Footer';

const CanvaasComponent = props => (
  <div className="Board-board">
    <Header className="Board-header" text="Start taking Notes" />
    <BoardContent
      realText={props.title}
      onTopicChange={event => props.onTopicChange(event)}
      onLengthChange={note => props.onLengthChange(note)}
      onSave={() => props.onSave()}
      realContent={props.content}
    />
    <Footer className="Board-footer"text="AboutUs" />
  </div>
);

export default CanvaasComponent;
