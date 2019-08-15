import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { changeSearchString, searchSuccess, searchError } from '../actions';

const searchString = handleActions(
  {
    [changeSearchString]: (state, action) => action.payload,
    [searchSuccess]: (state, action) => '',
    [searchError]: (state, action) => ''
  },
  ''
);
const shows = handleActions(
  {
    [changeSearchString]: (state, action) => [],
    [searchSuccess]: (state, action) => action.payload
  },
  []
);

const error = handleActions(
  {
    [changeSearchString]: (state, action) => null,
    [searchSuccess]: (state, action) => null,
    [searchError]: (state, action) => action.payload
  },
  null
);

const isLoading = handleActions(
  {
    [changeSearchString]: (state, action) => true,
    [searchSuccess]: (state, action) => false,
    [searchError]: (state, action) => false
  },
  false
);

export default combineReducers({
  searchString,
  shows,
  isLoading,
  error
});
