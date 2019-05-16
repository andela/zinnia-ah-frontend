import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';

// components
import Title from '../Title/Title';

const ReadingList = ({ articles, type }) => {
  return (
    <div className="post-lists">
      {articles.length < 1 ? (
        <p
          style={{
            fontWeight: 'bolder',
            fontSize: '30px',
          }}
        >{`You have no ${type}`}</p>
      ) : (
        articles.map(article => (
          <Item.Group key={article.article.id}>
            <Item>
              <Item.Content>
                <Title
                  content={article.article.title}
                  className="title-article-lg"
                />
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
                    {article.article.description}
                  </p>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        ))
      )}
    </div>
  );
};

ReadingList.propTypes = {
  articles: PropTypes.array,
  type: PropTypes.string,
};

export default ReadingList;
