import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Rating } from 'semantic-ui-react';

import { starRating } from '../../../store/modules/article';

class StarRating extends Component {
  handleRate = (e, { rating }) => {
    return this.props.starRating(rating);
  };

  componentDidMount() {
    return this.props.starRating(this.props.rating);
  }

  render() {
    return (
      <div>
        <Rating maxRating={5} onRate={this.handleRate} size="massive" />
      </div>
    );
  }
}

StarRating.propTypes = {
  starRating: PropTypes.func,
  rating: PropTypes.number,
};

const mapStateToProps = state => ({
  rating: state.article.rating,
  averageRating: state.article.averageRating,
});

export default connect(
  mapStateToProps,
  { starRating },
)(StarRating);
