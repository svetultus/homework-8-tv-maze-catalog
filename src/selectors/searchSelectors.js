// import { createSelector } from 'reselect';

export const getSearchString = state => {
  return state.search.searchString;
};

export default getSearchString;
