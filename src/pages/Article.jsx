import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Image } from 'semantic-ui-react';
import { getToken, decodeToken } from '../api/helpers';

// components
import Loader from '../components/presentationals/Loader/Loader';
import Button from '../components/presentationals/Button/Button';

//Reducer
import { likeArticle } from '../store/modules/article';

// stylesheets
// import './Article.scss';

// Images
import LikeIcon from '../components/images/like.svg';
import UnLikeIcon from '../components/images/unlike.svg';

//Helper
import response from './mockArticle';

export class Article extends Component {
  likeArticleHandler = () => {
    this.props.likeArticle(this.checkLikeState());
  };
  checkLikeState = () => {
    const { id } = decodeToken(getToken());
    const { likes } = response.data;
    const existingUser = likes.find(like => like.id === id);
    if (existingUser) return 'unlike';
    return 'like';
  };

  render() {
    return (
      <Fragment>
        {this.props.isLoading && (
          <Loader size="large" text="loading, please wait" />
        )}
        <Button
          className="btn-transparent"
          type="button"
          onClick={this.likeArticleHandler}
        >
          <Image
            src={this.checkLikeState() === 'unlike' ? LikeIcon : UnLikeIcon}
          />
        </Button>
      </Fragment>
    );
  }
}

Article.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  likeArticle: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoading: state.article.isLoading,
  // article: state.article.article,
});

export default connect(
  mapStateToProps,
  { likeArticle },
)(Article);
