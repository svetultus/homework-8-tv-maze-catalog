import { createAction } from 'redux-actions';

const changeSearchString = createAction('CHANGE_SEARCH_STRING');
const searchSuccess = createAction('SEARCH_SUCCESS');
const searchError = createAction('SEARCH_ERROR');

export { changeSearchString, searchSuccess, searchError };
