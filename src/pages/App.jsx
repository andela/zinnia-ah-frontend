import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import Glide from '@glidejs/glide';
import PropTypes from 'prop-types';

// components
import PopularAuthorsList from '../components/presentationals/PopularAuthorsList/PopularAuthorsList';
import Title from '../components/presentationals/Title/Title';
import VerticalCard from '../components/presentationals/VerticalCard/VerticalCard';
import Tag from '../components/presentationals/Tag/Tag';

// styles
import './App.scss';
import HorizontalCard from '../components/presentationals/HorizontalCard/HorizontalCard';
import Image from '../components/presentationals/Image/Image';

// actions
import { getPopularAuthors } from '../store/modules/profile';
import { getTrendingArticles } from '../store/modules/article';
import { getAllTags, getArticleByTag } from '../store/modules/tag';
import { getBookmarks } from '../store/modules/profile';

class App extends Component {
  componentDidMount() {
    // new Glide('.glide', {
    //   type: 'carousel',
    //   perView: 2,
    //   focusAt: 'center',
    //   gap: '50',
    //   autoplay: '3000',
    //   hoverpause: true,
    //   keyboard: true,
    //   animationDuration: '2000',
    //   breakpoints: {
    //     1250: {
    //       perView: 1,
    //     },
    //     800: {
    //       perView: 1,
    //     },
    //     480: {
    //       perView: 1,
    //     },
    //     399: {
    //       perView: 1,
    //     },
    //   },
    // }).mount();
    this.props.getTrendingArticles();
    this.props.getPopularAuthors();
    this.props.getAllTags();
    this.props.getArticleByTag('technology');
  }
  render() {
    const {
      isGettingPopularAuthorsLoading,
      authors,
      trendingArticles,
      isGettingTrendingArticles,
      taggedArticles,
      tags,
      getArticleByTag,
    } = this.props;
    return (
      <Fragment>
        <div className="top">
          <div className="trending">
            <Title content="Trending" className="title-md index-title" />
            {!isGettingTrendingArticles ? (
              <div className="trending-main-div">
                {trendingArticles.map((article, index) =>
                  index === 0 || index === 5 ? (
                    <VerticalCard article={article} index={index} />
                  ) : (
                    <HorizontalCard article={article} index={index} />
                  ),
                )}
              </div>
            ) : (
              <div className="trending-main-div">
                <div className="card-0">
                  <div className="ui">
                    <div className="ui card">
                      <div className="image">
                        <div className="ui placeholder">
                          <div className="square image" />
                        </div>
                      </div>
                      <div className="content">
                        <div className="ui placeholder">
                          <div className="header">
                            <div className="very short line" />
                            <div className="medium line" />
                          </div>
                          <div className="paragraph">
                            <div className="short line" />
                          </div>
                        </div>
                      </div>
                      <div className="extra content">
                        <div className="ui disabled button">Read More</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-1">
                  <div className="ui">
                    <div className="column">
                      <div className="ui raised segment">
                        <div className="ui placeholder">
                          <div className="image header">
                            <div className="line" />
                            <div className="line" />
                          </div>
                          <div className="paragraph">
                            <div className="medium line" />
                            <div className="short line" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-2">
                  <div className="ui">
                    <div className="column">
                      <div className="ui raised segment">
                        <div className="ui placeholder">
                          <div className="image header">
                            <div className="line" />
                            <div className="line" />
                          </div>
                          <div className="paragraph">
                            <div className="medium line" />
                            <div className="short line" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-3">
                  <div className="ui">
                    <div className="column">
                      <div className="ui raised segment">
                        <div className="ui placeholder">
                          <div className="image header">
                            <div className="line" />
                            <div className="line" />
                          </div>
                          <div className="paragraph">
                            <div className="medium line" />
                            <div className="short line" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-4">
                  <div className="ui">
                    <div className="column">
                      <div className="ui raised segment">
                        <div className="ui placeholder">
                          <div className="image header">
                            <div className="line" />
                            <div className="line" />
                          </div>
                          <div className="paragraph">
                            <div className="medium line" />
                            <div className="short line" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-5">
                  <div className="ui">
                    <div className="ui card">
                      <div className="image">
                        <div className="ui placeholder">
                          <div className="square image" />
                        </div>
                      </div>
                      <div className="content">
                        <div className="ui placeholder">
                          <div className="header">
                            <div className="very short line" />
                            <div className="medium line" />
                          </div>
                          <div className="paragraph">
                            <div className="short line" />
                          </div>
                        </div>
                      </div>
                      <div className="extra content">
                        <div className="ui disabled button">Read More</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="popular">
            {!isGettingPopularAuthorsLoading ? (
              <PopularAuthorsList authors={authors} />
            ) : (
              <div className="skeletal-loader">
                <div className="ui fluid placeholder">
                  <div className="image header">
                    <div className="line" />
                    <div className="line" />
                  </div>
                </div>
                <div className="ui fluid placeholder">
                  <div className="image header">
                    <div className="line" />
                    <div className="line" />
                  </div>
                </div>
                <div className="ui fluid placeholder">
                  <div className="image header">
                    <div className="line" />
                    <div className="line" />
                  </div>
                </div>
                <div className="ui fluid placeholder">
                  <div className="image header">
                    <div className="line" />
                    <div className="line" />
                  </div>
                </div>
              </div>
            )}
            <div className="justify-content-center ads">
              <div
                style={{
                  maxWidth: '100%',
                  marginTop: '2rem',
                  position: 'relative',
                }}
              >
                <Image
                  src="https://res.cloudinary.com/nedy123/image/upload/v1558511972/jumia-ad_hvrkw8.png"
                  style={{
                    maxWidth: '100%',
                    position: 'relative',
                    zIndex: '2',
                  }}
                />
                <Image
                  src="https://res.cloudinary.com/nedy123/image/upload/v1558511973/lady-ad_jc3tth.png"
                  style={{
                    maxWidth: '100%',
                    marginTop: '-2.8125rem',
                    position: 'relative',
                    zIndex: '1',
                  }}
                />
                <Image
                  src="https://res.cloudinary.com/nedy123/image/upload/v1558511972/konga-ad_cw2mpn.png"
                  style={{
                    maxWidth: '100%',
                    marginTop: '-3.2625rem',
                    position: 'relative',
                    zIndex: '2',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="middle">
          <div className="tag-result-div">
            <div className="h-card-container">
              {taggedArticles.length === 0 ? (
                <div className="ui">
                  <div className="column">
                    <div className="ui raised segment">
                      <div className="ui placeholder">
                        <div className="image header">
                          <div className="line" />
                          <div className="line" />
                        </div>
                        <div className="paragraph">
                          <div className="medium line" />
                          <div className="short line" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                taggedArticles.map(article => (
                  <HorizontalCard article={article} key={article.id} />
                ))
              )}
            </div>
          </div>
          <div className="tag-div">
            <Title content="Tags" className="title-md index-title" />
            {tags.length === 0 ? (
              <div className="ui placeholder d-flex">
                <div className="very short line" />
                <div className="very short line" />
              </div>
            ) : (
              <div className="inner">
                {tags.map(tag => (
                  <Tag
                    value={tag.name}
                    key={tag.id}
                    onClick={() => getArticleByTag(tag.name)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/*{isGettingTrendingArticles === true ? (*/}

        {/*  <div className="main-bottom">*/}
        {/*    <div className="suggested-reads">*/}
        {/*      <Title content="Suggested Reads" className="title-md index-title" />*/}
        {/*      <div>*/}
        {/*        <div className="glide">*/}
        {/*          <div className="glide__track" data-glide-el="track">*/}
        {/*            <ul className="glide__slides">*/}
        {/*              <li className="glide__slide">*/}
        {/*                <HorizontalCard />*/}
        {/*              </li>*/}
        {/*              <li className="glide__slide">*/}
        {/*                <HorizontalCard />*/}
        {/*              </li>*/}
        {/*              <li className="glide__slide">*/}
        {/*                <HorizontalCard />*/}
        {/*              </li>*/}
        {/*            </ul>*/}
        {/*          </div>*/}
        {/*          <div className="glide__bullets" data-glide-el="controls[nav]">*/}
        {/*            <button className="glide__bullet" data-glide-dir="=0" />*/}
        {/*            <button className="glide__bullet" data-glide-dir="=1" />*/}
        {/*            <button className="glide__bullet" data-glide-dir="=2" />*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <div className="footer">*/}
        {/*      <Link to="/" className="footer-link">*/}
        {/*        About*/}
        {/*      </Link>*/}
        {/*      <Link to="/" className="footer-link">*/}
        {/*        Terms & Conditions*/}
        {/*      </Link>*/}
        {/*      <Link to="/" className="footer-link">*/}
        {/*        Contact*/}
        {/*      </Link>*/}
        {/*      <Link to="/" className="footer-link">*/}
        {/*        Support*/}
        {/*      </Link>*/}
        {/*      <Link to="/" className="footer-link">*/}
        {/*        Cookies*/}
        {/*      </Link>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*) : (*/}

        {/*  <div className="main-bottom">*/}
        {/*    <div className="suggested-reads">*/}
        {/*      <Title content="Suggested Reads" className="title-md index-title" />*/}
        {/*      <div>*/}
        {/*        <div className="glide">*/}
        {/*          <div className="glide__track" data-glide-el="track">*/}
        {/*            <ul className="glide__slides">*/}
        {/*              {suggestedReads.map(article => (*/}
        {/*                <li className="glide__slide" key={article.id}>*/}
        {/*                  <HorizontalCard article={article} />*/}
        {/*                </li>*/}
        {/*              ))}*/}
        {/*            </ul>*/}
        {/*          </div>*/}
        {/*          <div className="glide__bullets" data-glide-el="controls[nav]">*/}
        {/*            <button className="glide__bullet" data-glide-dir="=0" />*/}
        {/*            <button className="glide__bullet" data-glide-dir="=1" />*/}
        {/*            <button className="glide__bullet" data-glide-dir="=2" />*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <div className="footer">*/}
        {/*      <Link to="/" className="footer-link">*/}
        {/*        About*/}
        {/*      </Link>*/}
        {/*      <Link to="/" className="footer-link">*/}
        {/*        Terms & Conditions*/}
        {/*      </Link>*/}
        {/*      <Link to="/" className="footer-link">*/}
        {/*        Contact*/}
        {/*      </Link>*/}
        {/*      <Link to="/" className="footer-link">*/}
        {/*        Support*/}
        {/*      </Link>*/}
        {/*      <Link to="/" className="footer-link">*/}
        {/*        Cookies*/}
        {/*      </Link>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*)}*/}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  authors: state.profile.authors,
  isGettingPopularAuthorsLoading: state.profile.isGettingPopularAuthorsLoading,
  trendingArticles: state.article.trendingArticles,
  isGettingTrendingArticles: state.article.isGettingTrendingArticles,
  taggedArticles: state.tag.articles,
  tags: state.tag.tags,
  isSuggestedReadsLoading: state.profile.isLoading,
  bookmarks: state.profile.bookmarks,
});

export default connect(
  mapStateToProps,
  {
    getPopularAuthors,
    getTrendingArticles,
    getAllTags,
    getArticleByTag,
    getBookmarks,
  },
)(App);

App.propTypes = {
  authors: PropTypes.array.isRequired,
  getAllTags: PropTypes.func.isRequired,
  getArticleByTag: PropTypes.func.isRequired,
  getPopularAuthors: PropTypes.func.isRequired,
  getTrendingArticles: PropTypes.func.isRequired,
  isGettingPopularAuthorsLoading: PropTypes.bool.isRequired,
  isGettingTrendingArticles: PropTypes.bool.isRequired,
  taggedArticles: PropTypes.array.isRequired,
  tags: PropTypes.array.isRequired,
  trendingArticles: PropTypes.array.isRequired,
};
