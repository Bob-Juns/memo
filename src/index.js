import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import GlobalStyle from './styles/GlobalStyle';

import App from './components/App';

render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.querySelector('#root'),
);
