import React from 'react';
import PropTypes from 'prop-types';
import { Item, Icon } from 'semantic-ui-react';

// config
import { DEFAULT_ARTICLE_IMAGE_URL } from '../../../utils/config';

// components
import Title from '../Title/Title';

const ArticleLists = ({ articles }) => {
  return (
    <div className="post-lists">
      {articles.length === 0 ? (
        <p>You have no publications</p>
      ) : (
        articles.map(article => (
          <Item.Group key={article.id}>
            <Item>
              <Item.Image
                src={article.imageThumbnail || DEFAULT_ARTICLE_IMAGE_URL}
              />

              <Item.Content>
                <Title content={article.title} className="title-article-lg" />
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
                    {article.description}
                  </p>
                </Item.Description>
                <Item.Extra>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '1rem',
                      }}
                    >
                      3 days ago
                    </p>
                    <div
                      style={{
                        display: 'flex',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '1rem',
                        }}
                      >
                        2 mins read
                      </p>
                      <button
                        type="button"
                        style={{
                          padding: 0,
                          border: 0,
                          background: 'transparent',
                        }}
                      >
                        <Icon
                          name="bookmark outline"
                          style={{
                            fontSize: '1.25rem',
                            marginLeft: '2.50rem',
                          }}
                        />
                      </button>
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
};

export default ArticleLists;
