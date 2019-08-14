import { createStore, compose, applyMiddleware } from 'redux';
//import { tvmazeFetchMiddleware } from './modules/series';
import reducers from './reducers';

function getStore() {
  return createStore(
    reducers,
    compose(
      //applyMiddleware(tvmazeFetchMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : noop => noop
    )
  );
}

export default getStore;
