const SAVE_NOTE = 'SAVE_NOTE';
const EDIT_NOTE = 'EDIT_NOTE';

export const saveNote = payload => ({
  type: SAVE_NOTE,
  payload,
});

export const editNote = payload => ({
  type: EDIT_NOTE,
  payload,
});
