// Реализуйте showMiddleware

// Вам необходимо обработать showRequest
// После получения данных с сервера - диспачте showSuccess
// В случае ошибки showSuccess

// На забудьте вызвать метод next.
import { showRequest, showRequestSuccess, showRequestError } from '../actions';
import { show } from '../api.js';

const showMiddleware = store => next => action => {
  if (action.type === showRequest.toString()) {
    show(action.payload)
      .then(result => {
        store.dispatch(showRequestSuccess(result));
      })
      .catch(e => store.dispatch(showRequestError(e)));
  }
  return next(action);
};
export { showMiddleware };
