// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.

import React from 'react';
import { connect } from 'react-redux';
import { changeSearchString } from '../../actions';
import { getSearchString, getShows } from '../../selectors';

const mapStateToProps = state => ({
  searchString: getSearchString(state),
  shows: getShows(state)
});

const mapDispatchToProps = { changeSearchString };

class Search extends React.Component {
  render() {
    const { searchString, shows, changeSearchString } = this.props;

    // const onChangeInput = e => {
    //   changeSearchString(e.target.value);
    // };

    const onSubmit = e => {
      e.preventDefault();
      changeSearchString(e.target['Search_input'].value);
    };

    console.log(shows);
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

function ShowPreview(props) {
  const { id, name, image, summary } = props;

  return (
    <div className="t-preview ShowPreview_container">
      <div>
        <a className="t-link" href={`"/shows/"${id}`}>
          {name}
        </a>
        <img src={image} alt={name} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
