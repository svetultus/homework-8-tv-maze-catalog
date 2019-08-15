import React from 'react';
import { connect } from 'react-redux';
import {
  showRequest,
  showRequestSuccess,
  showRequestError
} from '../../actions';
import { getShow } from '../../selectors';
// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action

const mapStateToProps = state => ({
  showId: getShow,
  showInfo: {},
  error: null
});
const mapDispatchToProps = {
  showRequest,
  showRequestSuccess,
  showRequestError
};

class ShowPage extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;
  }

  componentDidMount() {
    this.props.showRequest(this.id);
  }

  render() {
    return (
      <div>
        <div>Show {this.id}</div>
        <p>C³</p>
        <img
          src="http://static.tvmaze.com/uploads/images/medium_portrait/78/195703.jpg"
          alt="C³"
        />
        <div>
          <p>
            From the light novel series written by Minase Hazuki, comes a story
            of love, action, and comedy. Yachi Haruaki is a high school boy who
            is naturally resistant to curses. After his father sends him a
            mysterious black cube, Haruaki awakes to find a nude girl named Fear
            standing in his kitchen. She's the human form of the cursed black
            cube – and an instrument of torture! Utilizing her special
            abilities, Fear fights alongside Haruaki to defeat other cursed
            instruments and their owners.
          </p>
        </div>
        <div className="ShowPage_cast" />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
