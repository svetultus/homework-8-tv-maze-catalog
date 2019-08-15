import { createSelector } from 'reselect';

export const getShow = createSelector(
  state => state,
  state => {
    console.log(state);
    return state;
  }
);

// export const getShow = createSelector(
//   state => state.search.shows,
//   shows => {
//     return shows.map(({ id, name, image, summary }) => ({
//       id,
//       name,
//       image: image ? image.medium : '',
//       summary
//     }));
//   }
// );

// export default { getSearchString, getShows };
