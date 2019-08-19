import { createSelector } from 'reselect';

const getSearchString = createSelector(
  state => state.search.searchString,
  searchString => {
    return searchString;
  }
);

const getShows = createSelector(
  state => state.search.shows,
  shows => {
    return shows.map(({ id, name, image, summary }) => ({
      id,
      name,
      image: image ? image.medium : '',
      summary
    }));
  }
);
const getSearchError = createSelector(
  state => state.search.error,
  error => error
);

const getIsLoading = createSelector(
  state => state.search.isLoading,
  isLoading => isLoading
);

export { getSearchString, getShows, getSearchError, getIsLoading };
