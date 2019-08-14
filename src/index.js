import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Link, Route } from 'react-router-dom';
import './index.css';
import AppRouter from 'components/AppRouter';
import getStore from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './reducers';

const store = getStore();

// store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
