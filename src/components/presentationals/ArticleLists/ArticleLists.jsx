import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Item, Icon, Modal, Dimmer, Loader } from 'semantic-ui-react';
import moment from 'moment';

// config
import { DEFAULT_ARTICLE_IMAGE_URL } from '../../../utils/config';

// components
import Button from '../Button/Button';
import Title from '../Title/Title';
import { getEncodedUser } from '../../../api/helpers';

const ArticleLists = ({ articles, deleteArticle, isDeleting, email }) => {
  return (
    <div className="post-lists">
      {articles.length === 0 ? (
        <p>You have no publications</p>
      ) : (
        articles.map(article => (
          <Item.Group key={article.id}>
            <Item>
              <Link
                to={`/read/${article.slug}`}
                key={article.id}
                style={{ padding: '10px' }}
              >
                <Item.Image
                  src={article.imageThumbnail || DEFAULT_ARTICLE_IMAGE_URL}
                />
              </Link>
              <Item.Content>
                <div className="d-flex">
                  <div style={{ marginRight: 'auto' }}>
                    <Link
                      to={`/read/${article.slug}`}
                      key={article.id}
                      style={{ color: '#100' }}
                    >
                      <Title
                        content={article.title}
                        className="title-article-lg"
                      />
                    </Link>
                  </div>
                  <div style={{ marginRight: '0.8rem' }}>
                    <p
                      style={{
                        fontSize: '1rem',
                        width: '100%',
                      }}
                    >
                      {article.readTime} mins read
                    </p>
                  </div>
                  <div>
                    <Button className="btn-transparent" type="button" value="">
                      <Icon
                        name="bookmark outline"
                        style={{
                          fontSize: '1.25rem',
                          margin: '0',
                          color: '#000000',
                        }}
                      />
                    </Button>
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
                    <Link
                      to={`/read/${article.slug}`}
                      key={article.id}
                      style={{ color: '#000' }}
                    >
                      {article.description}
                    </Link>
                  </p>
                </Item.Description>
                <Item.Extra>
                  <div className="d-flex justify-content-between">
                    <p style={{ fontSize: '1rem' }}>
                      {moment().from(article.createdAt, 'YYYYMMDD')} ago
                    </p>
                    <div>
                      {(getEncodedUser() && getEncodedUser().email) ===
                        email && (
                        <Modal
                          trigger={
                            <Button
                              className="btn-transparent"
                              type="button"
                              value=""
                            >
                              <Icon
                                name="trash"
                                className="delete-button"
                                size="large"
                                style={{
                                  margin: '0',
                                }}
                              />
                            </Button>
                          }
                          closeIcon
                          size="tiny"
                        >
                          {isDeleting && (
                            <Dimmer active>
                              <Loader />
                            </Dimmer>
                          )}
                          <Modal.Header>Delete Article!</Modal.Header>
                          <Modal.Content>
                            <p style={{ color: '#000' }}>
                              Are you sure you want to delete this Article?
                            </p>
                          </Modal.Content>
                          <Modal.Actions>
                            <Button
                              className="btn-dark mb-3"
                              type="button"
                              value="DELETE"
                              key="delete"
                              onClick={() =>
                                deleteArticle(article.id, articles)
                              }
                            />
                          </Modal.Actions>
                        </Modal>
                      )}
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
};

ArticleLists.propTypes = {
  articles: PropTypes.array,
  deleteArticle: PropTypes.any,
  isDeleting: PropTypes.bool,
  email: PropTypes.string,
};

export default ArticleLists;
