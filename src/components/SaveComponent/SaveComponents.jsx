import React from 'react';
import Header from '../Header/Header';
import ManyNotes from '../ManyNotes/ManyNotes';
import Footer from '../Footer/Footer';

const SavedComponent = props => (
  <div className="Board-board">
    <Header text="Saved Notes" />
    <ManyNotes
      onHistoryClick={(noteid) => { props.onHistoryClick(noteid); }}
      totalContent={props.totalContent}
      onClicks={() => props.onClicks()}
    />
    <Footer text="Create New Note" onClicks={() => props.comingBack()} />
  </div>
);
export default SavedComponent;
