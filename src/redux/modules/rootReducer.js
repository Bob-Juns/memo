import { combineReducers } from 'redux';

import editorReducer from './editorReducer';
import memoReducer from './memoReducer';

const rootReducer = combineReducers({
  editorReducer,
  memoReducer,
});

export default rootReducer;
