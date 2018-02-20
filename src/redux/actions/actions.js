const SAVE_NOTE = 'SAVE_NOTE';
const EDIT_NOTE = 'EDIT_NOTE';
const NEW_NOTE = 'NEW_NOTE';
const GET_NOTE = 'GET_NOTE';
const PUT_NOTE = 'PUT_NOTE';

export const saveNote = payload => ({
  type: SAVE_NOTE,
  payload,
});

export const editNote = payload => ({
  type: EDIT_NOTE,
  payload,
});

export const newNote = payload => ({
  type: NEW_NOTE,
  payload,
});

export const getNote = payload => ({
  type: GET_NOTE,
  payload,
});

export const putNote = () => ({
  type: PUT_NOTE,
});
