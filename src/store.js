import { createStore, compose, applyMiddleware } from 'redux';
import { searchMiddleware, showMiddleware } from './middlewares';
import reducers from './reducers';

function getStore() {
  return createStore(
    reducers,
    compose(
      applyMiddleware(searchMiddleware, showMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : noop => noop
    )
  );
}

export default getStore;
