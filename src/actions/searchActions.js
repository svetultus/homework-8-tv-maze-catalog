import { createAction } from 'redux-actions';

const changeSearchString = createAction('SEARCH_REQUEST');
const searchSuccess = createAction('SEARCH_SUCCESS');
const searchError = createAction('SEARCH_ERROR');

export { changeSearchString, searchSuccess, searchError };
