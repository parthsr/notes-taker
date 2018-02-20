import axios from 'axios';

const initialState = {
  totalContent: [],
  noteid: 0,
  saved: false,
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_NOTE': {
      const note = action.payload;
      return ({
        ...state,
        totalContent: note.totalContent,
        saved: note.saved,
        noteid: note.noteid,
      });
    }
    case 'EDIT_NOTE': {
      const note = action.payload;
      return ({
        ...state,
        saved: false,
        noteid: note.noteid,
      });
    }
    case 'NEW_NOTE': {
      const note = action.payload;
      return ({
        ...state,
        saved: note.saved,
        noteid: note.noteid,
      });
    }
    case 'GET_NOTE': {
      const notes = action.payload;
      return ({
        ...state,
        totalContent: notes,
        noteid: notes.length,
      });
    }
    case 'PUT_NOTE': {
      const options = {
        url: '/notes',
        method: 'POST',
        data: state.totalContent,
      };
      axios(options);
      return (state);
    }
    default: {
      return state;
    }
  }
};

export default noteReducer;
