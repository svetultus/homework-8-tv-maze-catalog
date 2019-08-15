import { createSelector } from 'reselect';

const getShow = createSelector(
  state => state.shows.showId,
  showId => showId
);

const getShowInfo = createSelector(
  state => state.shows.showInfo,
  showInfo => showInfo
);

const getShowError = createSelector(
  state => state.shows.error,
  error => error
);

const getIsLoading = createSelector(
  state => state.shows.isLoading,
  isLoading => isLoading
);

export { getShow, getShowInfo, getShowError, getIsLoading };
