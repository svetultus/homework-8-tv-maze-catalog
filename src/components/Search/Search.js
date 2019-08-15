// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.

import React from 'react';
import { connect } from 'react-redux';
import { changeSearchString } from '../../actions';
import {
  getSearchString,
  getShows,
  getIsLoading,
  getSearchError
} from '../../selectors';
import ShowPreview from '../ShowPreview';

const mapStateToProps = state => ({
  searchString: getSearchString(state),
  shows: getShows(state),
  isLoading: getIsLoading(state),
  error: getSearchError(state)
});

const mapDispatchToProps = { changeSearchString };

class Search extends React.Component {
  render() {
    const { shows, changeSearchString, isLoading, error } = this.props;

    if (error) return <p>Произошла сетевая ошибка</p>;
    if (isLoading) return <div>Выполняется поиск</div>;
    if (!this.props.shows) return null;

    // const onChangeInput = e => {
    //   changeSearchString(e.target.value);
    // };

    const onSubmit = e => {
      e.preventDefault();
      changeSearchString(e.target['Search_input'].value);
    };

    return (
      <div className="Search_previewList">
        <form onSubmit={onSubmit}>
          <input
            className="Search_input t-input"
            placeholder="Название сериала"
            name="Search_input"
          />
          <div className="Search_buttonWrapper">
            <button className="Search_button t-search-button" type="submit">
              Найти
            </button>
          </div>
        </form>
        <div className="t-search-result Search_searchPanel">
          {shows.map(show => (
            <ShowPreview key={show.id} {...show} />
          ))}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
