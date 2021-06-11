import { combineReducers } from 'redux';

//reducers
import editorReducer, { handleEditorOpen } from './Editor';
import memoReducer, { createMemo, deleteMemo, updateMemo } from './Memo';

export const actions = {
  handleEditorOpen,
  createMemo,
  deleteMemo,
  updateMemo,
};

const rootReducer = combineReducers({
  editorReducer,
  memoReducer,
});

export default rootReducer;
