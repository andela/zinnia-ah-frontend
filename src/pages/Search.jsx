import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

//components
import { Tab, Menu, Label } from 'semantic-ui-react';
import PopularAuthorItem from '../components/presentationals/PopularAuthorItem/PopularAuthorItem';
import ArticleCard from '../components/presentationals/ArticleCard/ArticleCard';
import Loader from '../components/presentationals/Loader/Loader';
import Tag from '../components/presentationals/Tag/Tag';

//stylesheets
import './Search.scss';

//images
import { DEFAULT_USER_IMAGE_URL } from '../utils/config';

//modules
import { getTagArticles } from '../store/modules/search';

export class Search extends Component {
  tagArticleSearch = tag => {
    this.props.getTagArticles(tag);
  };
  render() {
    this.props.isLoading && <Loader text="please wait" size="large" />;
    let articles;
    if (this.props.articles.length > 0) {
      articles = this.props.articles.map((article, key) => (
        <ArticleCard key={key} article={article} />
      ));
    } else {
      articles = null;
    }

    let authors;
    if (this.props.authors.length > 0) {
      authors = this.props.authors.map(author => (
        <PopularAuthorItem
          key={author.name}
          name={`${author.firstName} ${author.lastName}` || author.username}
          url={author.username}
          image={author.image || DEFAULT_USER_IMAGE_URL}
          username={author.username}
        />
      ));
    } else {
      authors = null;
    }

    let tags;
    if (this.props.tags.length > 0) {
      tags = this.props.tags.map((tag, key) => (
        <Tag
          key={key}
          className="tag"
          value={tag.name}
          onClick={() => this.tagArticleSearch(tag.name)}
        />
      ));
    } else {
      tags = null;
    }

    const loader = this.props.isLoading && (
      <Loader size="large" text="Loading... please wait" />
    );

    const panes = [
      {
        menuItem: (
          <Menu.Item key="articles">
            Articles<Label>{this.props.articles.length}</Label>
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane>
            <div className="articles">{articles}</div>
          </Tab.Pane>
        ),
      },
      {
        menuItem: (
          <Menu.Item key="authors">
            Authors<Label>{this.props.authors.length}</Label>
          </Menu.Item>
        ),
        render: () => <Tab.Pane>{authors}</Tab.Pane>,
      },
      {
        menuItem: (
          <Menu.Item key="tags">
            Tags<Label>{this.props.tags.length}</Label>
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane>
            <div className="tags">{tags}</div>
          </Tab.Pane>
        ),
      },
    ];

    return (
      <Fragment>
        {loader}
        <div className="articles">
          <Tab panes={panes} key={panes} />
        </div>
      </Fragment>
    );
  }
}

Search.propTypes = {
  articles: PropTypes.any,
  authors: PropTypes.any,
  tags: PropTypes.any,
  isLoading: PropTypes.bool,
  users: PropTypes.any,
  location: PropTypes.object,
  getTagArticles: PropTypes.func,
};

const mapStateToProps = state => ({
  articles: state.search.successResponse.data.articles,
  authors: state.search.successResponse.data.authors,
  tags: state.search.successResponse.data.tags,
  isLoading: state.search.isLoading,
});

export default connect(
  mapStateToProps,
  { getTagArticles },
)(withRouter(Search));
