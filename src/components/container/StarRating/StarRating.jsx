import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Rating } from 'semantic-ui-react';

import { starRatingRequest } from '../../../store/modules/starRating';

export class StarRating extends Component {
  handleRate = (e, { rating }) => {
    return this.props.starRatingRequest(rating);
  };

  componentDidMount() {
    return this.props.starRatingRequest(this.props.rating);
  }

  render() {
    return (
      <div data-test="starRatingComponent">
        <Rating maxRating={5} onRate={this.handleRate} size="massive" />
      </div>
    );
  }
}

StarRating.propTypes = {
  starRatingRequest: PropTypes.func,
  rating: PropTypes.number,
};

const mapStateToProps = state => ({
  rating: state.starRating.rating,
  averageRating: state.starRating.averageRating,
});

export default connect(
  mapStateToProps,
  { starRatingRequest },
)(StarRating);
