import { createAction } from 'redux-actions';

const showRequest = createAction('SHOW_REQUEST');
const showRequestSuccess = createAction('SHOW_REQUEST_SUCCESS');
const showRequestError = createAction('SHOW_REQUEST_ERROR');

export { showRequest, showRequestSuccess, showRequestError };
