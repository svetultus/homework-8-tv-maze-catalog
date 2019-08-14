import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { changeSearchString } from '../actions';

const searchString = handleActions(
  {
    [changeSearchString]: (_state, action) => {
      console.localStorage(_state);
      console.localStorage(action);
      return action.payload;
    }
  },
  ''
);

export default combineReducers({
  searchString
  //   elements,
  //   isLoading,
  //   error,
});
