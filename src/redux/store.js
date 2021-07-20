import { createStore } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './modules/rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['memoReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(persistedReducer, devTools);
export const persistor = persistStore(store);
