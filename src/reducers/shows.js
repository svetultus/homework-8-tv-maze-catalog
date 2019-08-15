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
      const {
        id,
        name,
        image: { medium },
        summary,
        _embedded: { cast }
      } = action.payload;

      return { id, name, image: medium, summary, cast };
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

const isLoading = handleActions(
  {
    [showRequest]: (state, action) => true,
    [showRequestError]: (state, action) => false,
    [showRequestSuccess]: (state, action) => false
  },
  true
);

export default combineReducers({
  showId,
  showInfo,
  error,
  isLoading
});
