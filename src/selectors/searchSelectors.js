import { createSelector } from 'reselect';

// export const getSearchString = state => state.searchString;
export const getSearchString = createSelector(
  state => state.search.searchString,
  searchString => {
    return searchString;
  }
);

export const getShows = createSelector(
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

// export default { getSearchString, getShows };
