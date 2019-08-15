import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { showRequest, showRequestSuccess, showRequestError } from '../actions';

const showId = handleActions(
  {
    [showRequest]: (state, action) => action.payload
  },
  null
);
const showInfo = handleActions(
  {
    [showRequestSuccess]: (state, action) => {
      const show = action.payload;
      console.log('show', show);
      return show;
    }
  },
  null
);

const error = handleActions(
  {
    [showRequestError]: (state, action) => action.payload
  },
  null
);

export default combineReducers({
  showId,
  showInfo,
  error
});
