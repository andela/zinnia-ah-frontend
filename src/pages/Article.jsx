import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

// components
import Navbar from '../components/presentationals/Navbar/Navbar';

class Article extends Component {
  componentDidMount() {
    this.props.getArticle(this.props.match.params.uniqueId);
  }
  render() {
    return (
      <Fragment>
        <Navbar profileUrl={this.props.profileUrl} />
        <div className="d-flex auth-container" data-test="article" />
      </Fragment>
    );
  }
}

Article.propTypes = {
  getArticle: PropTypes.func,
  profileUrl: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({
      uniqueId: PropTypes.string.isRequired,
    }),
  }),
};

Article.defaultProps = {
  profileUrl: '',
};

export default Article;
