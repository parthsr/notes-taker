import React from 'react';
import TitleEn from '../titleEn/titleEn';
import Topic from '../topic/topic';
import Note from '../note/note';
import Canvaas from '../canvaas/canvaas';
import Save from '../save/save';
import './boardContent.css';

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
