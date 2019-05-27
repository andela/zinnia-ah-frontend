import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Item, Icon } from 'semantic-ui-react';
import moment from 'moment';

// config
import { DEFAULT_ARTICLE_IMAGE_URL } from '../../../config/config';

// components
import Button from '../../presentationals/Button/Button';
import Title from '../../presentationals/Title/Title';
import { getBookmarks } from '../../../store/modules/profile';

export class BookmarkLists extends Component {
  componentDidMount() {
    this.props.getBookmarks();
  }
  render() {
    const { bookmarks } = this.props;
    return (
      <div className="post-lists">
        {bookmarks.length === 0 ? (
          <p>You have no bookmarks</p>
        ) : (
          bookmarks.map(bookmark => (
            <Item.Group key={bookmark.id}>
              <Item>
                <Item.Image
                  src={bookmark.imageThumbnail || DEFAULT_ARTICLE_IMAGE_URL}
                />
                <Item.Content>
                  <div className="d-flex">
                    <div style={{ marginRight: 'auto' }}>
                      <Title
                        content={bookmark.title}
                        className="title-article-lg"
                      />
                    </div>
                    <div style={{ marginRight: '0.8rem' }}>
                      <p
                        style={{
                          fontSize: '1rem',
                          width: '100%',
                        }}
                      >
                        {bookmark.readTime} mins read
                      </p>
                    </div>
                  </div>
                  <Item.Description
                    style={{
                      marginBottom: 'auto',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '1.125rem',
                        lineHeight: '1.375rem',
                        fontWeight: '200',
                      }}
                    >
                      {bookmark.description}
                    </p>
                  </Item.Description>
                  <Item.Extra>
                    <div className="d-flex justify-content-between">
                      <p style={{ fontSize: '1rem' }}>
                        {moment().from(bookmark.createdAt, 'YYYYMMDD')}
                      </p>
                      <div>
                        <div>
                          <Button
                            className="btn-transparent"
                            type="button"
                            value={
                              <Icon
                                name="bookmark"
                                style={{
                                  fontSize: '1.25rem',
                                  margin: '0',
                                  color: '#000000',
                                }}
                              />
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          ))
        )}
      </div>
    );
  }
}

BookmarkLists.propTypes = {
  bookmarks: PropTypes.array,
  getBookmarks: PropTypes.func,
};

export const mapStateToProps = state => ({
  error: state.profile.error,
  isLoading: state.profile.isLoading,
  bookmarks: state.profile.bookmarks,
});

export default connect(
  mapStateToProps,
  { getBookmarks },
)(BookmarkLists);
