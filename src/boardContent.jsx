import React from 'react';
import TitleEn from './titleEn';
import Topic from './topic';
import Note from './note';
import Canvaas from './canvaas';
import Save from './save';

const BoardContent = () => (
  <div className="boardcontent">
    <TitleEn />
    <Topic />
    <Note />
    <Canvaas />
    <Save />
  </div>
);

export default BoardContent;
