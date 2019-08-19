import { createAction } from 'redux-actions';

const searchRequest = createAction('SEARCH_REQUEST');
const searchSuccess = createAction('SEARCH_SUCCESS');
const searchError = createAction('SEARCH_ERROR');

export { searchRequest, searchSuccess, searchError };
