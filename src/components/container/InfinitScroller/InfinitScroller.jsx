import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Article from '../../presentationals/ArticleCard/ArticleCard';
import { fetchArticlePagination } from '../../../store/modules/article';

class InfinitScroller extends Component {
  state = {
    isFetching: false,
    pageNo: 1,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.props.fetchArticlePagination(this.state.pageNo);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  fetchMore = () => {
    this.props.fetchArticlePagination(this.state.pageNo);
    this.setState({ pageNo: this.state.pageNo + 1 });
  };

  handleScroll = () => {
    console.log(document.querySelector('.articles').offsetHeight, 'sss')
    if (
      document.querySelector('.articles').offsetHeight -
        window.innerHeight -
        window.scrollY <=
        10 ||
      this.state.isFetching
    ) {
      return this.fetchMore();
    }
  };

  render() {
    return (
      <div className="articles">
        {this.props.articles.publications.map((article, key) => {
          return <Article key={key} article={article} />;
        })}
      </div>
    );
  }
}

InfinitScroller.propTypes = {
  articles: PropTypes.any,
  fetchArticlePagination: PropTypes.any,
};

const mapStateToProps = state => {
  return { articles: state.articles };
};

export default connect(
  mapStateToProps,
  { fetchArticlePagination },
)(InfinitScroller);
