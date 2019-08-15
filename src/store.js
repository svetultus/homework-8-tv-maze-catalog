import { createStore, compose, applyMiddleware } from 'redux';
import { searchMiddleware } from './middlewares';
import reducers from './reducers';

function getStore() {
  return createStore(
    reducers,
    compose(
      applyMiddleware(searchMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : noop => noop
    )
  );
}

export default getStore;
