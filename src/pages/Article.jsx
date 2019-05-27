import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon, Item, Modal } from 'semantic-ui-react';
import moment from 'moment';

// components
import Navbar from '../components/presentationals/Navbar/Navbar';
import Loader from '../components/presentationals/Loader/Loader';
import Title from '../components/presentationals/Title/Title';
import Author from '../components/presentationals/Author/Author';
import Button from '../components/presentationals/Button/Button';
import Avatar from '../components/presentationals/Avatar/Avatar';

// modules
import { getSingleArticle } from '../store/modules/article';

// stylesheets
import './Article.scss';

// Images
import { DEFAULT_USER_IMAGE_URL } from '../utils/config';

export class Article extends Component {
  componentDidMount() {
    const {
      article,
      match: {
        params: { articleId },
      },
      history,
    } = this.props;
    if (!article.id) {
      this.props.getSingleArticle(articleId, history);
    }
  }

  render() {
    const { article, isLoading } = this.props;
    return (
      <Fragment>
        {isLoading && <Loader size="large" text="loading, please wait" />}
        <Navbar profileUrl={this.props.profileUrl} />
        <div className="article-container" data-test="article">
          {/*sidebar*/}
          <div className="sidebar author">
            <div className="fixed-pos">
              <Author profile={article.author} />
            </div>
          </div>
          {/*content*/}
          <div className="main-content">
            <Item>
              <Title content={article.title} className="title-xl lh-4" />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  height: '1.5rem',
                  marginBottom: '1rem',
                }}
              >
                <span>{moment(article.createdAt).fromNow()}</span>
                <span
                  style={{
                    margin: '-.5rem 1rem 0',
                  }}
                >
                  .
                </span>
                <span>{article.readTime} mins read</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'start',
                  margingBottom: '2rem',
                }}
              />
              <Item.Content>
                <Item.Image src={article.imageThumbnail} size="massive" />
                <br />
                <Item.Description>
                  <div className="article-body">{article.body}</div>
                </Item.Description>
                <div className="report-rate-container">
                  <div className="rate-inner">
                    <div className="mini-author hide-lg">
                      {article.author && (
                        <div className="d-flex">
                          <Link
                            to={`@${article.author.username}`}
                            className="bg-danger"
                          >
                            <Avatar
                              url={
                                article.author.image || DEFAULT_USER_IMAGE_URL
                              }
                              className="avatar-sm"
                            />
                          </Link>
                          <div>
                            <Link to={`@${article.author.username}`}>
                              <p className="text-center username">
                                @{article.author.username}
                              </p>
                            </Link>
                            <div className="d-flex justify-content-center">
                              <Button
                                className="btn-white btn-sm"
                                value="FOLLOW"
                                type="submit"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div>
                      <Button
                        className="btn-transparent hide-sm"
                        value=""
                        type="button"
                      >
                        <Icon name="flag" color="black" size="big" />
                      </Button>
                    </div>
                  </div>
                  <div className="rate">
                    <p
                      style={{
                        fontSize: '.875rem',
                        lineHeight: '.825rem',
                      }}
                    >
                      Rate this article
                    </p>
                    <div className="d-flex">
                      <Button
                        className="btn-transparent"
                        value=""
                        type="button"
                      >
                        <Icon name="star" color="black" size="big" />
                      </Button>
                      <Button
                        className="btn-transparent"
                        value=""
                        type="button"
                      >
                        <Icon name="star" color="black" size="big" />
                      </Button>
                      <Button
                        className="btn-transparent"
                        value=""
                        type="button"
                      >
                        <Icon name="star" color="black" size="big" />
                      </Button>
                      <Button
                        className="btn-transparent"
                        value=""
                        type="button"
                      >
                        <Icon name="star" color="black" size="big" />
                      </Button>
                      <Button
                        className="btn-transparent"
                        value=""
                        type="button"
                      >
                        <Icon name="star outline" color="black" size="big" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Item.Content>
            </Item>
          </div>
          {/*right side*/}
          <div className="sidebar actions justify-content-center">
            <div className="fixed-pos" />
          </div>
        </div>

        <div className="footer">
          <div>
            <Button className="btn-transparent" value="" type="button">
              <Icon name="flag" color="black" size="big" />
            </Button>
          </div>
          <div
            className="d-flex"
            style={{
              width: '50%',
            }}
          >
            <div className="mr-auto">
              <Button className="btn-transparent" value="" type="button">
                <Icon name="thumbs up outline" color="black" size="big" />
              </Button>
            </div>
            <div className="mr-auto">
              <Modal
                trigger={
                  <Button className="btn-transparent" type="button" value="">
                    <Icon name="share" color="black" size="big" />
                  </Button>
                }
                closeIcon
                size="tiny"
              >
                <Modal.Header>Share this Article!</Modal.Header>
                <Modal.Content>
                  <div className="share-cta">
                    <a
                      className="links"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://twitter.com/intent/tweet?text=${
                        article.title
                      }&url=${location.href}`}
                    >
                      <Icon name="twitter" size="big" />
                    </a>
                    <a
                      className="links"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={`mailto:''?subject=${article.title}&body=${
                        location.href
                      }`}
                    >
                      <Icon name="mail" color="red" size="big" />
                    </a>
                    <a>
                      <Icon name="facebook" size="big" />
                    </a>
                  </div>
                </Modal.Content>
              </Modal>
            </div>
            <div className="">
              <Button className="btn-transparent" value="" type="button">
                <Icon name="bookmark" color="black" size="big" />
              </Button>
            </div>
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
  history: PropTypes.object,
};

Article.defaultProps = {
  profileUrl: '',
};

const mapStateToProps = (state, props) => {
  const { articleId } = props.match.params;
  return {
    isLoading: state.article.isLoading,
    article: state.article.articles[articleId] || {},
  };
};

export default connect(
  mapStateToProps,
  { getSingleArticle },
)(Article);
