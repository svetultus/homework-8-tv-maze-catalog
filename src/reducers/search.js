import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { changeSearchString, searchSuccess, searchError } from '../actions';

const searchString = handleActions(
  {
    [changeSearchString]: (state, action) => {
      return action.payload;
    }
  },
  ''
);
const shows = handleActions(
  {
    // [changeSearchString]: (state, action) => [],
    [searchSuccess]: (state, action) => action.payload
  },
  []
);

export default combineReducers({
  searchString,
  shows
  // isLoading,
  // error,
});
