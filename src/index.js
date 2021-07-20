import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import GlobalStyle from './styles/GlobalStyle';
import App from './App';

render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <GlobalStyle />
      <App />
    </PersistGate>
  </Provider>,
  document.querySelector('#root'),
);
