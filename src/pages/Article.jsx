import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Icon, Item } from 'semantic-ui-react';
import moment from 'moment';

// components
import Navbar from '../components/presentationals/Navbar/Navbar';

//modules
import { getSingleArticle } from '../store/modules/article';
import Loader from '../components/presentationals/Loader/Loader';
import Title from '../components/presentationals/Title/Title';
import Author from '../components/presentationals/Author/Author';

//stylesheets
import './Article.scss';

export class Article extends Component {
  componentDidMount() {
    this.props.getSingleArticle(this.props.match.params.articleId);
  }
  render() {
    const { article } = this.props;
    return (
      <Fragment>
        {this.props.isLoading && (
          <Loader size="large" text="loading, please wait" />
        )}
        <Navbar profileUrl={this.props.profileUrl} />
        <div className="d-flex article-container" data-test="article">
          <div className="author">
            {article.author && <Author profile={article.author} />}
          </div>
          <div className="content">
            <Item>
              <Title content={article.title} className="title-lg" />
              {moment(article.createdAt).fromNow()}
              <Item.Content>
                <Item.Image src={article.imageThumbnail} size="massive" />
                <br />
                <Item.Description>{article.body}</Item.Description>
              </Item.Content>
            </Item>
          </div>
          <div className="sidebar">
            <a
              className="links"
              target="_blank"
              rel="noopener noreferrer"
              href={`https://twitter.com/intent/tweet?text=${
                article.title
              }&url=${location.href}`}
            >
              <Icon name="twitter" size="large" />
            </a>
            <a>
              <Icon name="facebook" size="large" />
            </a>
            <a
              className="links"
              rel="noopener noreferrer"
              target="_blank"
              href={`mailto:''?subject=${article.title}&body=${location.href}`}
            >
              <Icon name="mail" size="large" />
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}

Article.propTypes = {
  article: PropTypes.object.isRequired,
  getSingleArticle: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      articleId: PropTypes.string.isRequired,
    }),
  }),
  profileUrl: PropTypes.string,
};

Article.defaultProps = {
  profileUrl: '',
};

const mapStateToProps = state => ({
  isLoading: state.article.isLoading,
  article: state.article.article,
});

export default connect(
  mapStateToProps,
  { getSingleArticle },
)(Article);
