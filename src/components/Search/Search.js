// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.

import React from 'react';
import { connect } from 'react-redux';
import { changeSearchString } from '../../actions';
import { getSearchString } from '../../selectors';

const mapStateToProps = state => ({
  searchString: getSearchString(state)
});

const mapDispatchToProps = { changeSearchString };

const Search = props => {
  const { searchString } = props;

  const onChangeInput = e => {
    changeSearchString(e.target.value);
    console.log(searchString);
  };

  return (
    <div className="Search_previewList">
      <input
        className="Search_input t-input"
        placeholder="Название сериала"
        value={searchString}
        onChange={onChangeInput}
      />
      <div className="Search_buttonWrapper">
        <button className="Search_button t-search-button">Найти</button>
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
