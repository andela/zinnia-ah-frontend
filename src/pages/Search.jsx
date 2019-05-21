import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//components
import Input from '../components/presentationals/Input/Input';
import Button from '../components/presentationals/Button/Button';
import Navbar from '../components/presentationals/Navbar/Navbar';

//stylesheets
import './Search.scss';

//modules
import { customSearch } from '../store/modules/search';
import Loader from '../components/presentationals/Loader/Loader';

export class Search extends Component {
  state = {
    keyword: '',
  };

  inputHandler = event => {
    const { value } = event.target;
    this.setState({ keyword: value });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.customSearch(this.state.keyword);
  };
  render() {
    let articles;

    if (this.props.articles.length > 0) {
      articles = this.props.articles.map(article => (
        <div key={article.id} className="article">
          Article
          <p key={article.title}>{article.title}</p>
          <p key={article.id}>{article.description}</p>
          <p key={article.id}>{article.body}</p>
          <p key={article.id}>{article.readTime}</p>
        </div>
      ));
    } else {
      articles = null;
    }
    let authors;

    if (this.props.authors.length > 0) {
      authors = this.props.authors.map(author => (
        <div key={author.username} className="author">
          Author
          <p key={author.firstName}>{author.firstName}</p>
          <p>{author.username}</p>
          <p>{author.lastName}</p>
        </div>
      ));
    } else {
      authors = null;
    }

    const loader = this.props.isLoading && (
      <Loader size="large" text="Loading... please wait" />
    );

    return (
      <Fragment>
        <Navbar />
        {loader}
        <div className="search-container">
          <form className="form" onSubmit={this.submitHandler}>
            <Input
              value={this.state.keyword}
              className="form-control"
              type="search"
              placeholder="Search Authors' Haven"
              onChange={this.inputHandler}
              name="q"
              data-test="search-input"
            />
            <Button
              className="btn-dark form-control"
              value="SEARCH"
              data-test="button"
            />
          </form>
        </div>
        <div className="articles-container">{articles}</div>
        <div className="authors-container">{authors}</div>
      </Fragment>
    );
  }
}

Search.propTypes = {
  articles: PropTypes.any,
  authors: PropTypes.any,
  customSearch: PropTypes.any,
  isLoading: PropTypes.bool,
  searchResult: PropTypes.array,
  users: PropTypes.any,
};

const mapStateToProps = state => ({
  articles: state.search.successResponse.data.articles,
  authors: state.search.successResponse.data.authors,
  isLoading: state.search.isLoading,
});

export default connect(
  mapStateToProps,
  { customSearch },
)(Search);
