export const PATHS = {
  HOME: 'home',
  NOTE_ADD: 'note-add',
  NOTE_LIST: 'note-list',
  NOTE_DETAILS: 'note-details/:id'
};

export const TABS = [
  {title: 'Home', path: PATHS.HOME},
  {title: 'Note List', path: PATHS.NOTE_LIST},
  {title: 'Add Note', path: PATHS.NOTE_ADD}
];

export const DATA_STATES = {
  LOADING: 'loading',
  EMPTY: 'empty',
  LOADED: 'loaded',
  ERROR: 'error'
};
