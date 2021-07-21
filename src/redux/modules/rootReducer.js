import { combineReducers } from 'redux';

//reducers
import memoReducer, {
  createMemo,
  deleteMemo,
  deleteAllMemo,
  updateMemo,
} from './Memo';

export const actions = {
  createMemo,
  deleteMemo,
  deleteAllMemo,
  updateMemo,
};

const rootReducer = combineReducers({
  memoReducer,
});

export default rootReducer;
