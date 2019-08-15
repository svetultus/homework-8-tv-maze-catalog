// Реализуйте searchMiddleware
// Обратите внимание на файл `searchMiddleware.test.js`

// Вам необходимо обработать searchRequest
// После получения данных с сервера - диспачте searchSuccess
// В случае ошибки searchFailure

// На забудьте вызвать метод next.
import { changeSearchString, searchSuccess, searchError } from '../actions';
import { search } from '../api.js';

export const searchMiddleware = store => next => action => {
  if (action.type === changeSearchString.toString()) {
    console.log('запрос к серверу');
    console.log(action.payload);
    search(action.payload)
      .then(result => {
        console.log(result);
        store.dispatch(searchSuccess(result));
      })
      .catch(e => store.dispatch(searchError(e)));
  }
  return next(action);
};
