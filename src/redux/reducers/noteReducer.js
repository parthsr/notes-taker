const initialState = {
  totalContent: [],
  id: 0,
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
        id: note.id,
      });
    }
    case 'EDIT_NOTE': {
      const note = action.payload;
      return ({
        ...state,
        saved: false,
        id: note.id,
      });
    }
    case 'NEW_NOTE': {
      const note = action.payload;
      return ({
        ...state,
        saved: note.saved,
        id: note.id,
      });
    }
    default: {
      return state;
    }
  }
};

export default noteReducer;
