import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { searchRequest, searchSuccess, searchError } from '../actions';

const searchString = handleActions(
  {
    [searchRequest]: (state, action) => action.payload,
    [searchSuccess]: (state, action) => '',
    [searchError]: (state, action) => ''
  },
  ''
);
const shows = handleActions(
  {
    [searchRequest]: (state, action) => [],
    [searchSuccess]: (state, action) => action.payload
  },
  []
);

const error = handleActions(
  {
    [searchRequest]: (state, action) => null,
    [searchSuccess]: (state, action) => null,
    [searchError]: (state, action) => action.payload
  },
  null
);

const isLoading = handleActions(
  {
    [searchRequest]: (state, action) => true,
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
